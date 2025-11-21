import React from "react";
import { Faqs } from "../shadcnuicomponents/accordion";
const Faq = () => {
  return (
    <section className="flex items-center flex-col px-8 lg:px-28 justify-center py-10">
      <div className="flex flex-col items-center gap-[40px] w-full ">
        <div className=" flex flex-col gap-[16px] items-center justify-center text-center ">
          <h1 className="font-bold text-[36px] font-[family-name:var(--font-baloo2)]">
            Frequently Asked Questions
          </h1>
          <span className="text-[#666666]">
            Quick answers to help your team unlock full collaboration.
          </span>
        </div>
        <Faqs />
      </div>
    </section>
  );
};

export default Faq;
