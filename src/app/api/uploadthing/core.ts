import { currentUser } from "@clerk/nextjs/server";
import {
  createUploadthing,
  type FileRouter,
} from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const middleware = async () => {
  const user = await currentUser();

  if (!user || !user.id) {
    throw new UploadThingError("Unauthorized");
  }

  return { userId: user.id };
};

export const ourFileRouter = {
  pdfUploader: f({ pdf: { maxFileSize: "32MB" } })
    .middleware(middleware)
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("✅ Upload complete for user:", metadata.userId);
      console.log("📄 File URL:", file.ufsUrl); // ✅ Correct ufsUrl

      return {
        userId: metadata.userId,
        fileUrl: file.ufsUrl,
        fileName: file.name,
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
