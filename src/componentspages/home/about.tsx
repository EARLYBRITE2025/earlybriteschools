'use client'

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { WhiteRightarrowSvg } from "../../../public/svg/constants";
import { learningHighlights } from "../layouts/constants/constants";

const About: React.FC = () => {
  const countRef1 = useRef<HTMLSpanElement | null>(null);
const countRef2 = useRef<HTMLSpanElement | null>(null);

useEffect(() => {
  const animateCount = (
    ref: React.RefObject<HTMLSpanElement | null>,
    endValue: number,
    suffix: string = ""
  ) => {
    const obj = { val: 0 };

    gsap.to(obj, {
      val: endValue,
      duration: 2,
      ease: "power3.out",
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent =
            Math.floor(obj.val).toLocaleString() + suffix;
        }
      },
    });
  };

  animateCount(countRef1, 10000, "+");
  animateCount(countRef2, 97, "%");
}, []);

  return (
    <div className="bg-[#FFFFFF] w-full flex justify-center py-20">
      <div className="w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0">
        <div className="xl:flex xl:items-center justify-center xl:gap-[50px] w-full space-y-10 xl:space-y-0">
          <div className="space-y-5 w-full md:w-full lg:w-[90%] xl:w-[639px]">
            <h1 className="second-headers text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] xl:text-[48px] w-full md:w-full lg:w-[90%] font-bold font-[family-name:var(--font-baloo2)]">
              What makes Earlybrite different?
            </h1>
            <p className="text-[#666666] text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] w-full font-medium">
              We blend mentorship, technology, and creativity to deliver
              learning that matters. Our approach connects students to real
              opportunities, global standards, and practical experience that
              lasts a lifetime.
            </p>

            {learningHighlights.map((item) => (
              <div key={item.id} className="flex items-start gap-4 w-full">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                  className="w-5 h-5 md:w-6 md:h-6 object-contain shrink-0 mt-1"
                />
                <div className="w-full">
                  <h3 className="text-[#666666] font-semibold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-[family-name:var(--font-baloo2)]">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}

            {/* COUNT-UP ANIMATION SECTION */}
            <section className="flex flex-col items-center md:items-start justify-center space-y-8 w-full pt-5">
              <section className="space-y-8 md:space-y-0 md:flex-row md:gap-8 lg:gap-12 md:flex md:items-center md:justify-start w-full">

                {/* 10,000+ */}
                <div className="flex flex-col items-center md:items-start justify-center gap-1">
                  <span
                    ref={countRef1}
                    className="text-[#101010] font-bold text-[32px] md:text-[36px] font-[family-name:var(--font-baloo2)] lg:text-[40px]"
                  >
                    10,000+
                  </span>
                  <span className="text-[#666666] font-semibold text-[14px] md:text-[16px]">
                    Children Trained
                  </span>
                </div>

                {/* 97% */}
                <div className="flex flex-col items-center md:items-start font-[family-name:var(--font-baloo2)] justify-center gap-1">
                  <span
                    ref={countRef2}
                    className="text-[#101010] font-bold text-[32px] md:text-[36px] lg:text-[40px]"
                  >
                    97%
                  </span>
                  <span className="text-[#666666] font-semibold text-[14px] md:text-[16px]">
                    Satisfaction
                  </span>
                </div>
              </section>

              <div className="w-full flex md:items-start items-center justify-center md:justify-start">
                <button className="button bg-[#1A94D2] text-[14px] sm:text-[16px]">
                  <span className="flex gap-2 items-center group justify-center text-white">
                    Talk to Us <WhiteRightarrowSvg />
                  </span>
                </button>
              </div>
            </section>
          </div>

          {/* Image Section - untouched */}
          <section className="relative px-5 md:px-10 flex flex-col items-center justify-center w-full md:w-auto lg:shrink-0 mt-10 lg:mt-0">
            <Image
              src="/images/mainabout.png"
              width={274}
              height={342}
              alt="about image"
              className="md:hidden w-full max-w-[300px] h-auto object-cover rounded-xl"
            />
            <Image
              src="/images/mainabout.png"
              width={441}
              height={552}
              alt="about image"
              className="hidden md:flex rounded-xl w-full max-w-[350px] md:max-w-[400px] xl:w-[400px] h-auto object-cover"
            />

            <div className="absolute left-[5px] top-[35%] md:top-[8%] lg:left-[-3%]">
              <Image
                src="/images/about-side.png"
                width={93}
                height={114}
                alt="left small image"
                className="lg:hidden w-[120px] md:w-[200px]  h-auto"
              />
              <Image
                src="/images/about-side.png"
                width={139.5}
                height={171}
                alt="left small image"
                className="hidden lg:flex w-[100px] lg:w-[120px] xl:w-[139.5px] h-auto"
              />
            </div>

            <div className="absolute right-[5px] bottom-[10%] md:right-[0%] md:top-[50%] lg:top-[65%] z-50">
              <Image
                src="/images/aboutimage-3.png"
                width={139.5}
                height={171}
                alt="right small image"
                className="hidden md:flex rounded-2xl w-[100px] md:w-[180px] lg:w-[120px] xl:w-[139.5px] h-auto"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
