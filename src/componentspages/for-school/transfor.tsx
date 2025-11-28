"use client";
import React, { useLayoutEffect, useRef } from "react";
import { RightarrowSvg } from "../../../public/svg/constants";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Transfer = () => {
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // TIMELINE
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".transfer-card",
            start: "top 85%",
            once: true, // run only once
          },
          defaults: {
            ease: "power3.out",
            duration: 1,
          },
        })
        .from(".transfer-title", { y: 40, opacity: 0 })
        .from(".transfer-text-1", { y: 40, opacity: 0 }, "-=0.7")
        .from(".transfer-text-2", { y: 40, opacity: 0 }, "-=0.7")
        .from(".transfer-text-3", { y: 40, opacity: 0 }, "-=0.7")
        .from(".transfer-btn", { y: 40, opacity: 0 }, "-=0.7")
        .from(
          ".transfer-img",
          { x: 50, opacity: 0, scale: 0.95, duration: 1 },
          "-=2"
        );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="flex flex-col items-center justify-center p-[40px]"
    >
      <div
        className="transfer-card bg-[#009147] w-[350px] md:w-[90%] xl:w-[1200px] xl:p-[45px] xl:flex-row xl:justify-between
        text-white py-[40px] px-[24px] rounded-[24px] flex flex-col xl:gap-[64px] gap-[24px]"
      >
        <div className="gap-[40px] flex flex-col">
          <h1 className="transfer-title w-[320px] font-[family-name:var(--font-baloo2)] text-[24px] font-bold">
            Transform Learning Beyond the Classroom
          </h1>

          <p className="transfer-text-1 xl:w-[545px] text-[#F2F2F2]">
            Education is changing fast. Schools that stay ahead are those that
            give their students more than grades, they give them experience,
            confidence, and vision.
          </p>

          <p className="transfer-text-2 xl:w-[545px] text-[#F2F2F2]">
            Earlybrite helps schools do just that. We bring world-class
            programs, expert mentors, and engaging experiences that make
            learning come alive.
          </p>

          <p className="transfer-text-3 xl:w-[545px] text-[#F2F2F2]">
            Partnering with us helps your students become future-ready while
            strengthening your school's reputation for excellence.
          </p>

          <div className="transfer-btn flex items-center space-x-3 w-full justify-start whitespace-nowrap md:items-center">
            <button className="bg-[#F9BB1E] reuseable-button px-5">
              <span className="flex px-3 items-center group justify-between text-black">
                Talk to US <RightarrowSvg />
              </span>
            </button>
          </div>
        </div>

        <div>
          <Image
            src="/for-school/Rectangle 22.png"
            width={302}
            height={241}
            alt=""
            className="transfer-img md:hidden"
          />

          <Image
            src="/for-school/Rectangle 22(1).png"
            width={464}
            height={444}
            alt=""
            className="transfer-img hidden md:flex"
          />
        </div>
      </div>
    </section>
  );
};

export default Transfer;
