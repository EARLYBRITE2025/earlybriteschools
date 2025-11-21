"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  categories: FAQCategory[];
  showTabs?: boolean;
  tabOptions?: string[];
  ctaText?: string;
  ctaButtonText?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "We put together answers to the most common questions about our programs, safety, admissions, and learning experience. If you need more details or personalized support, our advisors are always ready to help.",
  categories,
  showTabs = false,
  tabOptions = ["Parent", "School"],
  ctaText = "Let's help you make the best decision",
  ctaButtonText = "Book a Free Consultation",
}) => {
  const [activeTab, setActiveTab] = useState(tabOptions[0]);

  return (
    <section className="w-full bg-white py-16 flex justify-center">
      <div className="w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-4">
            {title}
          </h2>
          <p className="text-[#666666] text-[16px] max-w-[800px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Tabs (if enabled) */}
        {showTabs && (
          <div className="flex justify-center gap-4 mb-8">
            {tabOptions.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-[16px] font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#1A94D2] text-white"
                    : "bg-[#F2F2F2] text-black hover:bg-[#E5E5E5]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Categories */}
        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-[24px] xl:text-[28px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-6">
                {category.title}
              </h3>

              <Accordion
                type="single"
                collapsible
                className="w-full flex flex-col gap-3"
              >
                {category.items.map((item, itemIndex) => (
                  <AccordionItem
                    key={itemIndex}
                    value={`item-${catIndex}-${itemIndex}`}
                    className="bg-[#F2F2F2] rounded-xl px-5"
                  >
                    <AccordionTrigger className="text-[18px] font-medium py-4 flex justify-between items-center text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-[16px] text-[#555] leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 p-8 bg-[#F9F9F9] rounded-2xl">
          <h3 className="text-[24px] font-bold text-black mb-4 font-[family-name:var(--font-baloo2)]">
            {ctaText}
          </h3>
          <p className="text-[#666666] text-[16px] mb-6">
            Book a quick call with our advisory team to get personalized
            guidance.
          </p>
          <button className="bg-[#F9BB1E] text-black px-8 py-3 rounded-full hover:bg-[#e5aa1a] transition-all duration-300 font-medium">
            {ctaButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
