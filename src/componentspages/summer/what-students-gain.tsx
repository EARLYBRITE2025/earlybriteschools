import React from "react";
import Image from "next/image";
import { WhiteRightarrowSvg } from "../../../public/svg/constants";

const WhatStudentsGain = () => {
  const benefits = [
    "Confidence to explore and express ideas",
    "Digital, creative and business skills",
    "Strong teamwork and communication abilities",
    "Early exposure to careers and innovation opportunities",
    "A sense of purpose and direction",
  ];

  return (
    <section className="w-full bg-white py-16 flex justify-center">
      <div className="w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0">
        <div className="flex flex-col-reverse xl:flex-row gap-8 xl:items-center">
          {/* Left - Text */}
          <div className="xl:w-1/2">
            <h2 className="text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-4">
              What Students Gain
            </h2>
            <p className="text-[#101010E5] text-[16px] mb-6">
              Skills that help them stand out in school and life.
            </p>

            {/* Benefits list */}
            <div className="space-y-3 mb-6 ">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Image
                    src="/images/check-green.svg"
                    width={20}
                    height={20}
                    alt="check"
                    className="mt-1"
                  />
                  <p className="text-black text-[14px]">{benefit}</p>
                </div>
              ))}
            </div>

            <button className="bg-[#1A94D2] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#1580b8] transition-all duration-300">
              Join Summer School <WhiteRightarrowSvg />
            </button>
          </div>

          {/* Right - Image */}
          <div className="xl:w-1/2 relative flex justify-center">
            <Image
              src="/images/summer-boy.png"
              width={450}
              height={550}
              alt="Student"
              className="object-cover lg:object-contain w-full h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatStudentsGain;
