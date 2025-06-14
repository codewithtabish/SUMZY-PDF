import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const faqs = [
  {
    question: "What is the AI PDF Summarizer?",
    answer:
      "Our AI PDF Summarizer quickly extracts key points and summaries from lengthy PDF documents to save your time.",
  },
  {
    question: "How accurate are the summaries?",
    answer:
      "Summaries are generated by advanced AI models, providing concise and relevant information, but always double-check for critical use.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we prioritize your privacy. All PDF processing happens securely with encrypted transfers, and files are not stored permanently.",
  },
  {
    question: "Can I summarize multiple PDFs at once?",
    answer:
      "Currently, the app supports one PDF at a time. We're working on batch processing for future releases.",
  },
  {
    question: "What formats are supported?",
    answer:
      "Our app supports PDF files only, but you can convert other formats to PDF before uploading.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-center font-headline text-3xl sm:text-4xl font-semibold mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map(({ question, answer }, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm leading-relaxed">{answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
