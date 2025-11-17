"use client";

import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Socialproofpage = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline for section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".social-section",
          start: "top 80%",
          end: "bottom 50%",
          toggleActions: "play none none reverse",
        },
      });

      // Header & text
      tl.from(".social-heading", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".social-subtext",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".social-tabs",
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        .from(
          ".social-video-frame",
          {
            opacity: 0,
            scale: 0.95,
            y: 20,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.3"
        )
      

      // Pulse effect for YouTube icon
     
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#00914721] w-full py-10 px-5 md:px-10 flex items-center justify-center">
      <section className="social-section bg-[#F9BB1E] min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[918px] w-full max-w-[400px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px] flex-col rounded-2xl flex items-center py-10 px-5">
        <div className="text-[#000000] space-y-5 flex items-center justify-center flex-col w-full">
          {/* --- Heading --- */}
          <h1 className="social-heading w-full max-w-[282px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[504.9px] font-[family-name:var(--font-baloo2)] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44.56px] font-bold text-center text-[#000000]">
            What Our Students & Parents Say
          </h1>

          {/* --- Subtext --- */}
          <p className="social-subtext text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-semibold xl:font-normal w-full max-w-[282px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[504.9px] text-center">
            See how Earlybrite has helped young people build skills, confidence,
            and a sense of purpose.
          </p>

          {/* --- Tabs --- */}
          <div className="social-tabs">
            <div className="bg-white p-[6px] sm:p-[8px] items-center rounded-full gap-[10px] sm:gap-[14px] flex w-[160px] sm:w-[192px] shadow-md">
              <div
                className="bg-[#009147] flex justify-center items-center text-[#FFFFFF]
                px-[14px] sm:px-[18px] py-[6px] sm:py-[8px] text-[16px] sm:text-[18px] md:text-[20px] w-[80px] sm:w-[99px] rounded-full"
              >
                Videos
              </div>
              <div className="text-[#999999] text-[16px] sm:text-[18px] md:text-[20px]">Text</div>
            </div>
          </div>

          {/* --- Video Frame with YouTube Icon --- */}
          <div className="relative w-full max-w-[350px] md:max-w-[600px] lg:max-w-[900px] xl:max-w-[1110px] social-video-frame">
            {/* Background image */}
            <Image
              src="/images/socialcenter-1.png"
              width={282}
              height={276}
              alt="socialcenter.image"
              className="rounded-2xl md:hidden w-full h-auto object-cover"
            />
            <Image
              src="/images/Company Intro Video.png"
              width={1110}
              height={491}
              alt="socialcenter.image"
              className="rounded-2xl hidden md:flex object-cover w-full h-auto"
            />

            {/* Centered YouTube icon */}
            <Image
              src="/images/Youtube.svg"
              width={60}
              height={60}
              alt="youtube.logo"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] md:w-[60px] md:h-[60px] cursor-pointer hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Socialproofpage;
