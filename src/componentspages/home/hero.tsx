'use client'
import React from 'react'
import {  Baloo_2 } from 'next/font/google'
import { useLayoutEffect } from "react";
import {gsap} from 'gsap'
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react";
import { WhiteRightarrowSvg } from '../../../public/svg/constants'
import Image from 'next/image'


gsap.registerPlugin(SplitText);
const Hero = () => {

 useLayoutEffect(() => {
   
    const paragraphSplit = new SplitText("#classics", { type: "lines" });
    // Step 1: Set initial hidden state
    gsap.set(paragraphSplit.lines, { yPercent: 100, opacity: 0 });
    // Step 2: Make parent visible so animation shows
    gsap.set([".title", "#classics"], { opacity: 1, visibility: "visible" });
    // Step 3: Animate
   

    gsap.to(paragraphSplit.lines, {
      yPercent: 0,
      opacity: 1,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
   //for images
   gsap.set(".hero-img", { opacity: 0, visibility: "hidden" });

    // Step 2: animate in
    gsap.fromTo(
      ".hero-img",
      {
        scale: 1.2,
        opacity: 0,
        y: 60,
        filter: "blur(10px)",
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        visibility: "visible", 
        delay: 0.3, 
      }
    );
    // for buttons
    gsap.set(".button ", { opacity: 0,  visibility: "hidden" });

    // Step 2: animate left → right
    gsap.to(".button ", {
      
      opacity: 1,
      visibility: "visible",
      duration: 1,
      ease: "power3.out",
      
    });
  }, []);

  return (
   <>
   <section className='hero md:bg-gradient-to-r from-[#E1F5FE]' id='home'>
    <div className='hero-first-div'>
       <div className='hero-div flex flex-col space-y-5 justify-center items-center w-full md:items-start px-5 md:px-0'>

             <h1 className='classic text-[32px] sm:text-[36px] md:text-[48px] xl:text-[60px] w-full max-w-[354px] md:max-w-[450px] xl:max-w-[530px] font-[family-name:var(--font-baloo2)] font-bold text-black' id='classics'>
        Building <span className='text-[#009147] md:text-black'>strong minds</span> and <span className='text-[#009147] md:text-black'>bright futures</span> for African children.
      </h1>
      <p className='text-start text-[14px] sm:text-[16px] md:text-[18px] w-full max-w-[354px] md:max-w-[450px] xl:max-w-[530px]' id='classics'>
        Earlybrite helps young people discover who they are,
        explore what they love, and prepare for the future with confidence.
      </p>
      <div className='flex items-center gap-3 w-full justify-center md:justify-start flex-wrap'>
        <button className='bg-[#F9BB1E] button text-[14px] sm:text-[16px]'>Explore Program</button>
        <button className='bg-[#1A94D2] button text-white text-[14px] sm:text-[16px]'>
          <span className='flex gap-2 items-center justify-center text-white'>Talk to Us <WhiteRightarrowSvg /></span>
        </button>
      </div>
    </div>

    <div className="flex image-container items-center mt-5 md:mt-0 w-full md:w-auto overflow-y-hidden h-[300px] sm:h-[350px] md:h-[403px] lg:h-[481px] xl:w-[603px] xl:h-[603px] overflow-x-auto no-scrollbar pl-5 md:pl-0 gap-5 snap-x snap-mandatory">
      {/* First image */}
      <div className="flex-shrink-0 w-[85%] md:w-[100%] snap-start">
        <Image
          src="/images/righr-hero.png"
          width={603}
          height={603}
          alt="right.hero"
          className="rounded-2xl w-full h-auto object-cover hero-img"
        />
      </div>

      {/* Second image */}
      <div className="flex-shrink-0 w-[85%] md:w-[100%] snap-start">
        <Image
          src="/images/left-hero.png"
          width={603}
          height={603}
          alt="left.hero"
          className="rounded-2xl w-full h-auto object-cover hero-img"
        />
      </div>
    </div>
    </div>
   </section>
   </>
  )
}

export default Hero
