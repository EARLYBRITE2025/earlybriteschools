import React from "react";
import FAQSection from "../shared/faq-section";
import { talentFoundryFAQData } from "@/data/faq-talent-foundry";

const TalentFoundryFAQ = () => {
  const categories = [
    talentFoundryFAQData.general,
    talentFoundryFAQData.talentFoundry,
  ];

  return (
    <FAQSection
      categories={categories}
      showTabs={false}
      ctaText="Let's help you make the best decision"
      ctaButtonText="Book a Free Consultation"
    />
  );
};

export default TalentFoundryFAQ;
