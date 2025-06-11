import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import { ThemeProvider } from "@/components/common/theme-provider";
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PDF Summary Hub – AI PDF Summarizer for Students & Professionals",
  description:
    "Summarize PDF files instantly with AI at PDF Summary Hub. Upload any document, extract key points, and save hours of reading. Fast, free, and accurate PDF summarizer for students, researchers, and professionals.",
  keywords: [
    "pdf summarizer",
    "online pdf summarizer",
    "ai pdf summary tool",
    "summarize pdf online",
    "ai pdf summarizer",
    "pdfsummaryhub.site",
    "summarize pdf automatically",
    "summarize pdf ai tool",
    "free pdf summary generator",
    "instant pdf summary",
    "pdf summary maker",
    "ai summarize pdf",
    "upload and summarize pdf",
    "summarize research pdf",
    "student pdf summarizer",
    "pdf summarizer for study",
    "academic pdf summarizer",
    "business pdf summarizer",
    "pdf executive summary",
    "pdf summary extractor",
    "summarizer for pdf files",
    "summarize ebooks pdf",
    "summarize class notes pdf",
    "pdf simplification tool",
    "ai reading assistant",
    "extract insights from pdf",
    "pdf key points finder",
    "intelligent pdf summarization",
    "summarize pdfs no signup",
    "fast pdf summary tool",
    "research pdf summarizer",
    "summary tool for students",
    "college pdf summarizer",
    "university paper summarizer",
    "summarize large pdfs",
    "summarize lecture notes pdf",
    "summarize handwritten pdf",
    "text summarizer for pdf",
    "summarizer chrome extension",
    "document summarization ai",
    "best free pdf summarizer",
    "ai summary generator pdf",
    "summarize pdf without login",
    "browser pdf summary tool",
    "summarize scanned pdf",
    "summarize legal pdf files",
    "pdf summary converter",
    "convert pdf to summary",
    "smart pdf reader",
    "summarize content from pdf",
    "summarizing pdfs easily",
    "summarize books in pdf",
    "one-click pdf summarizer",
    "summarize documents online",
    "summarizer for pdf textbook",
    "summarize engineering papers",
    "summarize medical pdfs",
    "summarize technical pdfs",
    "summarizer for research papers",
    "summarize financial pdfs",
    "automated pdf analysis",
    "free pdf study tool",
    "pdf summarization bot",
    "education ai tools",
    "student productivity app",
    "free pdf ai tools",
    "best summarizer ai",
    "summarize any pdf for free",
    "summarize class pdfs",
    "summarize pdf journal",
    "summarize your syllabus pdf",
    "summarize exam prep pdf",
    "summarize articles from pdf",
    "summarize pdf notes",
    "summarize thesis pdf",
    "summarize dissertations pdf",
    "summarize resume pdf",
    "summarize pdf with AI",
    "instant summary generator",
    "summarize long pdfs",
    "summarize stories from pdf",
    "summarize reports pdf",
    "summarize pdfs easily online",
    "study notes summarizer",
    "ai for pdf reading",
    "pdf summary app",
    "online ai document summarizer",
    "educational ai apps",
    "summarizer for pdf tutorials",
    "ai pdf parser",
    "summarize digital books pdf",
    "online tools for pdf summary",
    "summarize pdf reports online",
    "pdfsummaryhub pdf summarizer",
    "upload pdf summarize now",
    "summarize content instantly",
    "free educational tools",
    "summarize articles from pdfs",
    "summarize any pdf content",
    "smart summary for documents",
    "ai extract meaning from pdf",
    "extract key points easily pdf"
  ].join(", ")
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${fontSans.variable} font-sans antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="md:px-4 px-5">
              <Header />
              {children}
              <Toaster />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
