"use client";
import React, { useEffect, useRef } from "react";
import { WhiteRightarrowSvg } from "../../../public/svg/constants";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BringToSchool: React.FC = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  
 
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          end: "bottom 40%",
          once: true,
        },
      });

      tl.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          paraRef.current,
          { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        )
      

      // Parallax effect on images
      
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="flex flex-col items-center justify-center mb-10"
      id="contact"
    >
      <div className="bg-[#1A94D2] rounded-[24px] w-[351px] xl:flex xl:items-center xl:justify-center md:w-[90%] xl:w-[1200px]">
        <section className="flex flex-col items-center px-[24px] py-[40px] justify-center gap-[40px]">
          <h1
            ref={headingRef}
            className="text-[30px] text-white font-bold font-[family-name:var(--font-baloo2)] xl:w-[467px] xl:text-[40px]"
          >
            Bring Earlybrite to Your School
          </h1>
          <div className="flex flex-col text-white items-center justify-center gap-[16px]">
            <p ref={paraRef} className="xl:w-[467px]">
              Join forward-thinking schools redefining education through
              experiential learning. Together, we can prepare students for the
              world that's already here and the one that's coming.
            </p>
            <div className="flex items-start  space-x-3 w-full  justify-start whitespace-nowrap">
              <button
                
                className="bg-[#009147] reuseable-button px-5 w-[212px]"
              >
                <span className="flex px-8 text-white items-center group justify-between">
                  Talk to US <WhiteRightarrowSvg />
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Image wrapper with parallax */}
        <div
          
          className="relative flex items-center justify-center flex-col"
        >
          <Image
            src="/for-school/Layer 1ds 1(5).png"
            width={525}
            height={402}
            alt=""
            className="absolute top-[-90px] md:hidden"
          />
          <Image
            src="/for-school/Image_fx - 2025-11-10T130726.823 1.png"
            width={525}
            height={402}
            alt=""
            className="z-[20] md:hidden"
          />
          <Image
            src="/for-school/Image_fx - 2025-11-10T130726.823 1(1).png"
            width={527}
            height={527}
            alt=""
            className="z-[20] hidden md:flex"
          />
          <Image
            src="/for-school/Layer 1ds 1(6).png"
            width={604}
            height={463}
            alt=""
            className="absolute left-[80px] hidden md:flex top-[-1px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BringToSchool;
