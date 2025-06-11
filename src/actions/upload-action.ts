'use server';

import { fetchAndExtractPdfText } from "@/lib/langchain-utils";
import { generateSummaryFromOpenAI } from "@/lib/open-ai-";

type UploadResponseItem = {
  serverData: {
    userId: string;
    fileUrl: string;
    fileName: string;
  };
};

export async function generatePdfSummary(uploadResponse: UploadResponseItem[]) {
  try {
    if (!uploadResponse?.length) {
      return {
        success: false,
        message: "No uploaded file found",
        data: null,
      };
    }

    const { userId, fileUrl, fileName } = uploadResponse[0].serverData;

    if (!fileUrl) {
      return {
        success: false,
        message: "Missing file URL in upload response",
        data: null,
      };
    }

    const parsedText = await fetchAndExtractPdfText(fileUrl);

    if (!parsedText || parsedText.trim().length === 0) {
      return {
        success: false,
        message: "Failed to extract text from PDF",
        data: null,
      };
    }

    const summary = await generateSummaryFromOpenAI(parsedText);

    if (!summary || summary.trim().length === 0) {
      return {
        success: false,
        message: "Failed to generate summary from extracted text",
        data: null,
      };
    }

    return {
      success: true,
      message: "PDF summary generated successfully",
      data: {
        userId,
        fileUrl,
        fileName,
        parsedText,
        summary,
      },
    };

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "An unknown error occurred";

    return {
      success: false,
      message: `Error: ${message}`,
      data: null,
    };
  }
}
