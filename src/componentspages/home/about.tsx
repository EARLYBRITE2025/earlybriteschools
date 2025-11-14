'use client'
import React from 'react'
import Image from 'next/image'
import gsap from "gsap"
import { WhiteRightarrowSvg } from '../../../public/svg/constants'
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { learningHighlights } from '../layouts/constants/constants'
gsap.registerPlugin(ScrollTrigger);

interface Highlight {
  id: number;
  icon: string;
  title: string;
}

interface AboutProps {
  learningHighlights: Highlight[];
}
const About = () => {
  useGSAP(() => {
    // --- TEXT SECTION ANIMATION ---
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#notabout",
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from("#clansic", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        ".about-text",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        ".highlight-item",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        ".stat-box",
        {
          scale: 0.9,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      )
      .from(
        ".talk-btn",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

    // --- IMAGES ANIMATION ---
    const imgTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#notabout",
        start: "top 80%",
      },
    });

    imgTl
      .from(".main-about-img", {
        opacity: 0,
        scale: 0.9,
        y: 30,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        [".small-left", ".small-right"],
        {
          opacity: 0,
          y: 40,
          scale: 0.9,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.6"
      );
  }, []);
  return (
    <div
      className="bg-[#FFFFFF] about-style flex-col md:h-[732px] pb-20 lg:flex-row lg:justify-between items-start 
      p-[80px] md:px-[120px] flex justify-center w-full px-5 h-[1319px] space-y-10 xl:h-[673px]"
      id="notabout"
    >
      <div className="space-y-5 w-full">
        <h1
          className="second-headers font-[family-name:var(--font-baloo2)]  md:w-[624px] md:text-[40px]"
          id="clansic "
        >
          What makes Earlybrite different?
        </h1>
        <p className="text-[#666666] about-text w-[322px] text-[18px] xl:font-medium md:w-[639px]">
          We blend mentorship, technology, and creativity to deliver learning
          that matters. Our approach connects students to real opportunities,
          global standards, and practical experience that lasts a lifetime.
        </p>

        {learningHighlights.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center md:pl-4 gap-4 highlight-item"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-[24px] h-[24px] object-contain"
            />
            <div className="w-full">
              <h3 className="text-[#666666] font-semibold w-[276px] md:w-[578px] md:text-[20px]">
                {item.title}
              </h3>
            </div>
          </div>
        ))}

        <section className="flex flex-col items-center md:items-start justify-center space-y-8 w-full">
          <section className="space-y-8 md:space-y-0 md:flex-row md:gap-[36px] font-[family-name:var(--font-baloo2)]   md:flex md:items-center md:justify-center">
            <div className="flex flex-col items-start justify-center gap-1 stat-box">
              <span className="text-[#101010] text-center font-bold text-[36px] w-[148px]">
                10,000+
              </span>
              <span className="text-[#666666] font-semibold text-center w-[148px]">
                Children Trained
              </span>
            </div>
            <div className="flex flex-col items-start justify-center gap-1 stat-box">
              <span className="text-[#101010] text-center font-bold text-[36px] w-[148px]">
                97%
              </span>
              <span className="text-[#666666] text-center items-center font-semibold w-[148px]">
                Satisfaction
              </span>
            </div>
          </section>

          <div className="w-full flex md:items-start items-center justify-center md:justify-start">
            <button className="button bg-[#1A94D2] text-white ">
              Talk to Us
            </button>
          </div>
        </section>
      </div>

      <section className="relative flex flex-col items-center justify-center w-full">
        <Image
          src="/images/Pictures(1).png"
          width={274}
          height={342}
          alt="about image"
          className="md:hidden main-about-img"
        />
        <Image
          src="/images/largeaboutus.png"
          width={441}
          height={552}
          alt="about image"
          className="hidden md:flex rounded-2xl main-about-img"
        />

        <div className="absolute md:left-[30px] md:top-[10%] left-[30px] top-[45%] small-left">
          <Image
            src="/images/Pictures.png"
            width={93}
            height={114}
            alt="left small image"
            className="md:hidden"
          />
          <Image
            src="/images/smallrightabourpic.png"
            width={175.5}
            height={175.5}
            alt="left small image"
            className="hidden md:flex rounded-2xl xl:max-w-[139.5px]"
          />
        </div>

        <div className="absolute md:right-[-5px] xl:max-w-[139.5px] xl:max-h-[171px] xl:md:top-[65%] small-right">
          <Image
            src="/images/aboutimage-3.png"
            width={173.25}
            height={173.25}
            alt="right small image"
            className="hidden md:flex rounded-2xl"
          />
        </div>
      </section>
    </div>
  )
}

export default About
