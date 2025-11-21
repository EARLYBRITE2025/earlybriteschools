import React from "react";
import Image from "next/image";

const WhySummerSchool = () => {
  const benefits = [
    "Practical workshops and guided projects",
    "Tech and innovation exposure",
    "Fun competitions and group challenges",
    "Mentorship from real professionals",
    "Field visits to companies and innovation hubs",
  ];

  return (
    <section className="w-full bg-white pt-[120px] xl:pt-[180px] pb-16 flex justify-center">
      <div className="w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0">
        <div className="text-center max-w-[600px] mx-auto">
          <h2 className="text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-4">
            Why Summer School
          </h2>
          <p className="text-[#101010E5] text-[16px] mb-2">
            We help students use this time to explore, invent, collaborate, and
            grow.
          </p>
          <p className="text-[#ED6E23] text-[16px] mb-8">
            Students learn by going through:
          </p>

          {/* Benefits list */}
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] rounded-lg p-4 flex items-center gap-3"
              >
                <Image
                  src="/images/check-green.svg"
                  width={20}
                  height={20}
                  alt="check"
                />
                <p className="text-black text-[14px] text-left">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySummerSchool;
