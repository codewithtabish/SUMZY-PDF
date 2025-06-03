import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import { ThemeProvider } from "@/components/common/theme-provider";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight:["200",'300','400','500','600','700','800','900']
});


export const metadata: Metadata = {

  title: "PDF Summarizer AI – Instantly Summarize Any PDF Online",
  description: "Easily extract key insights from PDFs with our AI-powered summarizer. Upload, summarize, and save time – no sign-up required. Perfect for students, professionals, and researchers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} font-sans antialiased `}
      >
                 <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <main className="">

            <Header/>
            {children}
            </main>
           </ThemeProvider>

        
      </body>
    </html>
  );
}
