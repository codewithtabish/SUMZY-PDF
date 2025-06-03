"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  FileText,
  Clock,
  ScanText,
  Languages,
  ClipboardList,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const features = [
  {
    icon: <Sparkles className="w-8 h-8 text-orange-700" />,
    title: "AI-Powered Summaries",
    desc: "Generate accurate and clear summaries using cutting-edge AI models.",
  },
  {
    icon: <FileText className="w-8 h-8 text-orange-700" />,
    title: "Multi-Format Support",
    desc: "Upload PDFs, DOCs, or paste text — we handle all content types.",
  },
  {
    icon: <Clock className="w-8 h-8 text-orange-700" />,
    title: "Save Hours of Time",
    desc: "No need to skim — we highlight the key points in seconds.",
  },
  {
    icon: <ScanText className="w-8 h-8 text-orange-700" />,
    title: "OCR & Image Text",
    desc: "Summarize text from scanned documents and screenshots too.",
  },
  {
    icon: <Languages className="w-8 h-8 text-orange-700" />,
    title: "Multi-language Support",
    desc: "Supports summarization in multiple languages with accuracy.",
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-orange-700" />,
    title: "Actionable Highlights",
    desc: "Outputs key takeaways and bullet summaries you can use.",
  },
  // {
  //   icon: <Lightbulb className="w-8 h-8 text-violet-600" />,
  //   title: "Smart Suggestions",
  //   desc: "AI recommends further reading or insights based on context.",
  // },
];

export default function FeaturesSection() {
  return (
    <section id="feature" className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Unlock Your Productivity
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how our AI summarizer helps you save time, focus better, and work smarter — no matter the format.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", index * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="p-3  h-full cursor-pointer">
                <CardContent className="flex flex-col justify-center items-center  gap-4">
                  {feature.icon}
                  <h3 className="text-xl text-center font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-center">{feature.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
