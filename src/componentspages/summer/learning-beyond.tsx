import React from "react";
import Image from "next/image";
import { WhiteRightarrowSvg } from "../../../public/svg/constants";

const LearningBeyond = () => {
  const benefits = [
    "Hands-on workshops",
    "Group challenges and competitions",
    "Innovation and company tours",
    "The Earlybrite Mega Festival that celebrates growth",
  ];

  return (
    <section className="w-full bg-white py-5 flex justify-center">
      <div className="w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0">
        <div className="flex flex-col xl:flex-row gap-8 items-center">
          {/* Left - Image */}
          <div className="lg:w-1/2 relative">
            <Image
              src="/images/summer-boy.png"
              width={500}
              height={600}
              alt="Student"
              className="object-cover lg:object-contain w-full h-[500px]"
            />
          </div>

          {/* Right - Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-4">
              Learning Beyond the Classroom
            </h2>
            <p className="text-[#101010E5] text-[16px] mb-2">
              Real experience beats theory every time
            </p>
            <p className="text-[#ED6E23] text-[16px] mb-6">
              Throughout the program, students participate in:
            </p>

            {/* Benefits list */}
            <div className="space-y-3 mb-6">
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

            <p className="text-[#101010E5] text-[14px] mb-6">
              They do not just learn. They apply knowledge and build confidence.
            </p>

            <button className="bg-[#1A94D2] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#1580b8] transition-all duration-300">
              Join Summer School <WhiteRightarrowSvg />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningBeyond;
