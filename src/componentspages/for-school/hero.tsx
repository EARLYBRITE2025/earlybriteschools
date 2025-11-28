"use client";
import React, { useLayoutEffect, useRef } from "react";
import { RightarrowSvg } from "../../../public/svg/constants";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SchoolHero = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // MOBILE ANIMATION
      gsap
        .timeline({
          defaults: { ease: "power3.out", duration: 1 },
        })
        .from(".hero-mobile-title", { y: 40, opacity: 0 })
        .from(".hero-mobile-text", { y: 40, opacity: 0 }, "-=0.6")
        .from(".hero-mobile-btn", { y: 40, opacity: 0 }, "-=0.6")
        .from(
          ".hero-mobile-img",
          { y: 60, opacity: 0, scale: 0.95, duration: 1.2 },
          "-=0.5"
        );

      // DESKTOP ANIMATION
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#home",
            start: "top 80%",
            once: true,
          },
          defaults: { ease: "power3.out", duration: 1 },
        })
        .from(".hero-lg-title", { x: -50, opacity: 0 })
        .from(".hero-lg-text", { x: -50, opacity: 0 }, "-=0.6")
        .from(".hero-lg-btn", { x: -50, opacity: 0 }, "-=0.6")
        .from(
          ".hero-lg-img",
          { x: 80, opacity: 0, scale: 0.9, duration: 1.4 },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* MOBILE */}
      <section className="bg-[#FFE5A2] flex items-center justify-center flex-col gap-[40px] p-[24px] lg:hidden">
        <div className="w-[354px] flex flex-col gap-[16px] items-center md:text-center justify-center">
          <h1 className="hero-mobile-title w-[354px] pl-2 font-[family-name:var(--font-baloo2)] text-[36px] font-bold md:text-center">
            Prepare your <span className="text-[#009147]"> students for the future</span>
          </h1>

          <p className="hero-mobile-text text-[#666666] md:text-center pl-2">
            Empowering schools to deliver hands-on, globally aligned learning that builds skills, confidence, and real-world readiness.
          </p>

          <div className="hero-mobile-btn flex items-center pl-2 space-x-3 w-full justify-start whitespace-nowrap">
            <button className="bg-[#F9BB1E] reuseable-button px-5">
              <span className="flex px-3 items-center group justify-between text-black">
                Talk to US <RightarrowSvg />
              </span>
            </button>
          </div>
        </div>

        <div>
          <Image
            src="/for-school/Image_fx - 2025-11-10T113056.348 1.png"
            width={378}
            height={346}
            alt=""
            className="hero-mobile-img rounded-lg"
          />
        </div>
      </section>

      {/* DESKTOP */}
      <section
        className="bg-[#FFE5A2] flex items-center justify-center flex-col gap-[40px] p-[24px] hidden lg:flex"
        id="home"
      >
        <div className="w-[1200px] flex justify-start items-center text-start gap-[40px]">
          <h1 className="hero-lg-title w-[702px] text-[60px] font-[family-name:var(--font-baloo2)] font-bold">
            Prepare your <span className="text-[#009147]"> students for the future</span>
          </h1>

          <div className="flex flex-col items-center gap-[12px]">
            <p className="hero-lg-text text-[#666666] w-[439px] text-[20px]">
              Empowering schools to deliver hands-on, globally aligned learning that builds skills,
              confidence, and real-world readiness.
            </p>

            <div className="hero-lg-btn flex items-center space-x-3 w-full justify-start whitespace-nowrap">
              <button className="bg-[#F9BB1E] reuseable-button px-5">
                <span className="flex px-3 items-center group justify-between text-black">
                  Talk to US <RightarrowSvg />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div>
          <Image
            src="/for-school/Image_fx - 2025-11-10T113056.348 1(1).png"
            width={1181}
            height={346}
            alt=""
            className="hero-lg-img rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default SchoolHero;
