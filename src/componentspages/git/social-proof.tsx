"use client";

import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GitSocialproofpage = () => {
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
    <main className="bg-[#F2F2F2] w-full py-10 flex items-center justify-center">
      <section className="social-section bg-[#FFFFFF] h-[714.8545532226562px] md:h-[918px] md:w-[1200px] flex-col rounded-2xl flex items-center w-[322px]">
        <div className="text-[#000000] space-y-5 flex items-center justify-center pt-10 flex-col">
          {/* --- Heading --- */}
          <h1 className="social-heading w-[274px] font-[family-name:var(--font-baloo2)]  md:w-[504.9px] text-[38px] xl:text-[44.56px] font-bold text-center text-[#000000]">
            What Our Students & Parents Say
          </h1>

          {/* --- Subtext --- */}
          <p className="social-subtext xl:text-[18px] text-[14.85px]  xl:font-normal text-black w-[274px] xl:w-[504.9px] text-center">
            Travel that opened minds and shaped new ambitions.
          </p>

          {/* --- Tabs --- */}
          <div className="social-tabs">
            <div className="bg-white p-[8px] items-center rounded-full gap-[14px] flex w-[192px] ">
              <div
                className="bg-[#009147] flex justify-center items-center text-[#FFFFFF]
                px-[18px] py-[8px] text-[20px] w-[99px] rounded-full"
              >
                Videos
              </div>
              <div className="text-[#999999] text-[20px]">Text</div>
            </div>
          </div>

          {/* --- Video Frame with YouTube Icon --- */}
          <div className="relative inline-block w-full social-video-frame">
            {/* Background image */}
            <Image
              src="/images/socialcenter-1.png"
              width={282}
              height={276}
              alt="socialcenter.image"
              className="rounded-2xl md:hidden"
            />
            <Image
              src="/images/Company Intro Video.png"
              width={1110}
              height={491}
              alt="socialcenter.image"
              className="rounded-2xl hidden md:flex object-cover"
            />

            {/* Centered YouTube icon */}
            <Image
              src="/images/Youtube.svg"
              width={60}
              height={60}
              alt="youtube.logo"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default GitSocialproofpage;
