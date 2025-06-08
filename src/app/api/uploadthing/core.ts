import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from 'uploadthing/server';

const f = createUploadthing();

const middleware = async () => {
  const user = await currentUser();
  if (!user) throw new UploadThingError("Unauthorized");
  return { userId: user.id }; // user.id is definitely defined here
};

export const ourFileRouter = {
  pdfUploader: f({ pdf: { maxFileSize: "32MB" } })
    .middleware(middleware)
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for:", metadata.userId);
      console.log("Accessible at:", file.url);

      return {
        userId: metadata.userId,
        fileUrl: file.url,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type,
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
