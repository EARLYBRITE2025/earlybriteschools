"use client";
import React, { HtmlHTMLAttributes, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { forSchool } from "../layouts/constants/constants";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorldClassSchool = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const element:any = sectionRef.current;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element, // <-- REAL ELEMENT
          start: "top 70%", // scroll-based, not load-based
          end: "bottom 60%",
          once: true,
        },
      });

      tl.from(element.querySelector(".world-title"), {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          element.querySelector(".world-text"),
          {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          element.querySelectorAll(".world-card"),
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="world-section flex flex-col justify-center items-center p-[40px] gap-[40px]"
    >
      <div className="w-[354px] xl:w-auto flex flex-col items-center justify-center gap-[40px]">
        <h1 className="world-title text-[30px] xl:text-[48px] xl:w-[820px] text-center font-bold font-[family-name:var(--font-baloo2)]">
          Why Schools Partner with Earlybrite
        </h1>

        <p className="world-text text-[#666666] text-center xl:w-[820px]">
          Earlybrite makes it easy for schools to bring innovation and creativity into
          the classroom. Our programs help students think critically, solve problems,
          and lead with confidence.
        </p>

        <section className="flex flex-col gap-[40px] xl:gap-[16px] xl:flex-row">
          {forSchool.map((activity, index) => (
            <div
              key={index}
              className="world-card py-[24px] h-[169px] w-[353.9px] xl:w-[282px] rounded-[16px] px-[24px] flex flex-col justify-center items-start"
              style={{ background: activity.color }}
            >
              <h3 className="font-bold text-[#101010] text-[32px] font-[family-name:var(--font-baloo2)] w-[234px]">
                {activity.title}
              </h3>

              <p className="text-[#000000] text-[18px] leading-relaxed w-[234px]">
                {activity.paragraph}
              </p>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default WorldClassSchool;
