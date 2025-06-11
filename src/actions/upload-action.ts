'use server'
import { fetchAndExtractPdfText } from "@/lib/langchain-utils";

type UploadResponseItem = {
  serverData: {
    userId: string;
    fileUrl: string;
    fileName: string;
  };
};

export async function generatePdfSummary(uploadResponse: UploadResponseItem[]) {
  if (!uploadResponse || uploadResponse.length === 0) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }

  const { userId, fileUrl, fileName } = uploadResponse[0].serverData;

  if (!fileUrl) {
    return {
      success: false,
      message: "File URL is missing",
      data: null,
    };
  }

  const parsedText = await fetchAndExtractPdfText(fileUrl);
  console.log('Extracted PDF content:', parsedText);

  return {
    success: true,
    message: "Summary generated",
    data: {
      userId,
      fileUrl,
      fileName,
      parsedText,
      summary: "This is a placeholder summary.", // Replace with actual LangChain summary logic
    },
  };
}
