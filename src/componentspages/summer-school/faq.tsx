import FAQSection from "../shared/faq-section";
import { summerSchoolFAQData } from "@/data/faq-summer-school";

const SummerSchoolFAQ = () => {
  const categories = [summerSchoolFAQData.summerSchool];

  return (
    <FAQSection
      title="Frequently Asked Questions"
      subtitle="Here are answers to what your child will learn and experience during the summer."
      categories={categories}
      showTabs={false}
      ctaText="Let's help you make the best decision"
      ctaButtonText="Book a Free Consultation"
    />
  );
};

export default SummerSchoolFAQ;
