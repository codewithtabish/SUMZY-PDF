'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Update path if needed

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(1); // 2nd plan selected by default

  const plans = [
    {
      title: "Starter",
      subtitle: "Basic AI PDF summarizing for individuals",
      price: "$9/mo",
      features: [
        "Summarize up to 10 PDFs per month",
        "Basic summary length options",
        "Email support",
      ],
    },
    {
      title: "Professional",
      subtitle: "Advanced features for professionals & teams",
      price: "$29/mo",
      features: [
        "Summarize up to 100 PDFs per month",
        "Custom summary length & keywords",
        "Priority email support",
        "Team collaboration tools",
      ],
    },
    {
      title: "Enterprise",
      subtitle: "Custom solutions for businesses",
      price: "Contact us",
      features: [
        "Unlimited PDF summaries",
        "Dedicated account manager",
        "API access & integration",
        "24/7 premium support",
      ],
    },
  ];

  return (
    <section id="pricing" className="min-h-[600px] max-w-6xl mx-auto px-6 py-12">
      {/* Header - First plan title & subtitle */}
      <header className="text-center mb-12">
        <h2 className="text-4xl font-bold">{plans[0].title} Plan</h2>
        <p className="mt-2 max-w-xl mx-auto">{plans[0].subtitle}</p>
      </header>

      {/* Pricing cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            onClick={() => setSelectedPlan(index)}
            className={`cursor-pointer rounded-xl border p-8 flex flex-col justify-between transition-shadow duration-300 ${
              selectedPlan === index
                ? "border-primary border-2  shadow-lg "
                : "border-gray-300 hover:shadow-md dark:border-gray-700"
            }`}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-1">{plan.title}</h3>
              <p className="mb-4 opacity-80">{plan.subtitle}</p>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 mr-2 text-violet-500"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Button 
            variant={'outline'}
            className={selectedPlan===index?"bg-primary text-white cursor-pointer":" cursor-pointer"}
            // className="mt-6 w-full bg-gradient-to-br from-violet-500 to-pink-500 hover:opacity-90 transition duration-300"
            >
              {plan.price === "Contact us" ? "Contact Sales" : "Get Started"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
