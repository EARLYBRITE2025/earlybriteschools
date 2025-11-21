import FAQSection from "../shared/faq-section";
import { tempFAQData } from "@/data/faq-temp";

const TempFAQ = () => {
  const categories = [tempFAQData.general, tempFAQData.temp];

  return (
    <FAQSection
      title="Frequently Asked Questions"
      subtitle="We put together answers to the most common questions about our programs, safety, admissions, and learning experience. If you need more details or personalized support, our advisors are always ready to help."
      categories={categories}
      showTabs={false}
      ctaText="Let's help you make the best decision"
      ctaButtonText="Book a Free Consultation"
    />
  );
};

export default TempFAQ;
