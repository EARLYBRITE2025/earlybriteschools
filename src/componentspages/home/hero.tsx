'use client'
import React from 'react'
import {  Baloo_2 } from 'next/font/google'
import { useLayoutEffect } from "react";
import {gsap} from 'gsap'
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react";
import { RightarrowSvg } from '../../../public/svg/constants'
import Image from 'next/image'

const baloo2 = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-baloo',
})

gsap.registerPlugin(SplitText);
const Hero = () => {

 useLayoutEffect(() => {
    const heroSplit = new SplitText(".title", { type: "chars,words" });
    const paragraphSplit = new SplitText("#classics", { type: "lines" });

    // Step 1: Set initial hidden state
    gsap.set(heroSplit.chars, { yPercent: 100, opacity: 0 });// not in use yet
    gsap.set(paragraphSplit.lines, { yPercent: 100, opacity: 0 });

    // Step 2: Make parent visible so animation shows
    gsap.set([".title", "#classics"], { opacity: 1, visibility: "visible" });

    // Step 3: Animate
    gsap.to(heroSplit.chars, {
      yPercent: 0,
      opacity: 1,
      duration: 1.6,
      ease: "expo.out",
      stagger: 0.009,
    });

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
   <section className=' w-full md:bg-gradient-to-r from-[#E1F5FE]  to-[#FFF0CC]  'id='home'>
    <div className='flex flex-col md:flex-row w-full md:pb-10 xl:pb-0 xl:h-[633px] xl:w-[1200px] xl:h-[633px]'>
       <div className={` hero-div flex flex-col space-y-5  justify-center items-center
    
     w-full md:items-start md:px-[30px] lg:px-[110px] ${baloo2.variable} `}>
      
        <h1 className='classic  font-baloo xl:text-[60px] w-[354px]  pl-1 font-bold text-black xl:w-[530px] ' id='classics' >
        Building <span className='text-[#009147] md:text-black'>strong minds</span> and <span className='text-[#009147] md:text-black'>bright futures</span> for African children.
      </h1>
      <p className='px-3 pl-1 text-start max-w-90  ' id='classics' > 
        Earlybrite helps young people discover who they are, 
        explore what they love, and prepare for the future with confidence.
      </p>
      <div className='flex items-center space-x-3 w-full justify-center whitespace-nowrap md:justify-start' >
        <button className='bg-[#F9BB1E]  button '  >Explore Program  </button>
      <button className='bg-[#1A94D2] button text-white '><span className='flex gap-4 items-center group justify-center text-white'>Talk to Us  <RightarrowSvg /> </span></button>
      </div>
      
     
    </div>
  <div className="flex image-container items-center mt-5 md:mt-0 ml-10
   xl:w-[603px] xl:h-[603px]
  mr-10 overflow-y-hidden h-[403px] md:w-[481px] lg:flex overflow-x-auto no-scrollbar pl-10 gap-5 snap-x snap-mandatory">
  {/* First image */}
  <div className="flex-shrink-0 md:w-[100%]  w-[85%] snap-start">
    <Image
      src="/images/righr-hero.png"
      width={603}
      height={603}
      alt="right.hero"
      className="rounded-2xl w-full h-auto object-cover hero-img"
    />
  </div>

  {/* Second image (10% visible initially) */}
  <div className="flex-shrink-0 w-[85%] md:w-[100%] snap-start">
    <Image
      src="/images/left-hero.png"
      width={603}
      height={603}
      alt="left.hero"
      className="rounded-2xl w-full h-auto object-cover hero-img  "
    />
  </div>
</div>

    </div>

   </section>
   </>
  )
}

export default Hero
