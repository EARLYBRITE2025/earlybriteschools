'use client'
import Image from 'next/image'
import gsap from "gsap"
import { RightarrowSvg } from '../../../public/svg/constants'
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)
const Features = () => {
 const imgRef = useRef(null);

useGSAP(() => {
    if (window.innerWidth < 720) return;
  const titleSplit = new SplitText("#about h2 ", { type: "words" });
  const paragraphSplit = new SplitText("#classique", { type: "lines" });

  const scrollTimeline = gsap.timeline({
    scrollTrigger: {

      trigger: "#about",
      start: "top center",
      toggleActions: "play none none reverse",
    },
  });

  scrollTimeline
    .from(titleSplit.words, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.02,
    })
    .from(
      paragraphSplit.lines,
      {
        yPercent: 100,
        opacity: 0,
        duration: 1.8,
        ease: "expo.out",
        stagger: 0.06,

      },
      "-=0.5" // overlap slightly with the title animation
    );
const el = imgRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 100, scale: 0.9 }, // start: hidden, lower, smaller
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // when top of image hits 80% of viewport
          end: "bottom 50%",
          toggleActions: "play none none reverse",
        },
      }
    );
    // this is for the lower green section with a pin effect
    const  start= 'top top';
    const maskedTimeline =gsap.timeline({
    scrollTrigger:{
        trigger:'#art',
        start,
        end:'bottom center',
        scrub:1.5,
        pin:true,
        pinSpacing:false
       
    }
  })
  maskedTimeline
.to(
      "#will-fade",
      {
        // Move the pinned section up as if the next one is scrolling over
        yPercent: -50,
        ease: "none",
     
      },
      0 // start together
    );
  }, []);
    
 
  return (
  <section className='flex flex-col items-center w-full justify-center h-auto md:bg-[#BAE6FC]   'id='about'>
      <div className='flex  pt-10 items-center flex-col md:w-[90%] xl:w-[1450px] space-y-5
       justify-center   md:justify-start w-[360px] xl:relative 
       feature-styles xl:z-[1]  ' id='art'>
      <div className='bg-[#1A94D2] first-div xl:h-full flex items-center ' >
       <div className=' p-[40px] space-y-5 md:space-y-0  xl:gap-[40px] 
        xl:h-[330px] flex flex-col justify-center'>  
        <h2 className=' second-header font-[family-name:var(--font-baloo2)] xl:text-[48px] xl:w-[483px]  '>
            We make  learning come alive.
        </h2>
        <p className='w-[280px] xl:w-[483px] text-[#FFFFFF] text-[18px]  ' id='classique'>
             Earlybrite is a hybrid education platform helping children and young adults, 
             aged 5 to 22, build creativity, leadership, and real-world skills
             . We combine mentorship, technology, and experience-based learning to help them thrive in an ever-changing world.
        </p>
        <button className='button bg-[#F9BB1E]'>
           <span className='flex gap-4 items-center group justify-center '>Talk to Us  <RightarrowSvg /> </span>
        </button>
     </div>
        <div className=' w-[100%] relative hero-image flex 
        justify-center 
        items-center ' id='top-grid'>
            <div className='relative abstract-shape md:hidden '>
             <Image
                src="/images/layerfutures.png"
            alt='hero right'
            width={603.83}
            height={462.643335}
             ref={imgRef}
            className='relative top-[-100px] left-8 xl:top-[-70px] xl:left-[200px] '
                /> 
            </div>
            <Image src="/images/feature-child.png"
            alt='hero right image'
            width={615}

            className='rounded-xl md:hidden  z-[5] '
            height={403}
            
            />
            {/*larger screen */}
            
            <Image src="/images/lrgefuturespic.png"
            alt='hero right image'
            width={824}
             ref={imgRef}
            className='rounded-xl hidden md:flex z-[5] '
            height={540}
            
            />
            
        </div>

      </div>
    </div>
    {/*this is the second card*/}
    <div>
<div className='flex pt-3 pb-10 items-center flex-col xl:w-[1450px] space-y-5 md:space-y-0 md:w-[90%]  w-[375px]
       justify-center md:justify-start xl:z-[10] xl:relative
       feature-styles  xl:h-[672px]  ' id='will-fade'>

      <div className='bg-[#009147]   first-div xl:h-full flex items-center ' >
       <div className=' p-[40px] space-y-5 md:space-y-0  xl:gap-[40px] 
        xl:h-[330px] flex flex-col justify-center '>  

        <h2 className='second-header xl:text-[48px] xl:w-[483px] font-[family-name:var(--font-baloo2)] '>
            Shaping  Africa's future, one learner at a time.
        </h2>
        <p className='w-[251px] text-[#FFFFFF] w-[280px] xl:w-[483px] text-[#FFFFFF] text-[18px]   '>
            Our vision is to become the most trusted and innovative learning destination for young people worldwide. 
            We want every learner, wherever they are, to access quality education that's
             practical, global, and fun.
        </p>
        <button className='button bg-[#F9BB1E]'>
            <span className='flex gap-4 items-center group justify-center '>Talk to Us  <RightarrowSvg /> </span>
        </button>
     </div>
        <div className='  w-[100%] relative hero-image flex 
        justify-center
        items-center '>
            <div className='relative abstract-shape md:hidden'>
                
                <Image src="/images/larercard.png"
            alt='hero right image'
            width={603.8}
            className='relative top-[-25px] left-9 md:hidden'
            height={462.6}            
            />
            </div>
            <Image src="/images/smallcard.png"
            alt='hero right image'
            width={492}
            className='rounded-xl relative sm:hidden z-[5]'
            height={492}
            
            />
             {/*larger screen */}
             <Image src="/images/largecard.png"
            alt='hero right image'
            width={669}
            className='rounded-xl relative hidden xl:flex  z-[5]'
            height={669}
            
            />
        </div>

      </div>
    </div>
    </div>
  </section>
    
  )
}

export default Features
