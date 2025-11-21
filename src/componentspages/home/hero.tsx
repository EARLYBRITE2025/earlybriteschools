"use client";
import { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import {
  BlackRightarrowSvg,
  WhiteRightarrowSvg,
} from "../../../public/svg/constants";
import Image from "next/image";

gsap.registerPlugin(SplitText);
const Hero = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);

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
    gsap.set(".button ", { opacity: 0, visibility: "hidden" });

    // Step 2: animate left → right
    gsap.to(".button ", {
      opacity: 1,
      visibility: "visible",
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    const container = imageContainerRef.current;
    if (!container) return;

    let currentIndex = 0;
    let autoSlide: NodeJS.Timeout;

    // Initial delay to ensure images are loaded
    const startDelay = setTimeout(() => {
      autoSlide = setInterval(() => {
        const clientWidth = container.clientWidth;
        const gap = 20;

        currentIndex = (currentIndex + 1) % 2;

        container.scrollTo({
          left: currentIndex * (clientWidth + gap),
          behavior: "smooth",
        });
      }, 3000);
    }, 1000);

    return () => {
      clearTimeout(startDelay);
      if (autoSlide) clearInterval(autoSlide);
    };
  }, []);

  return (
    <>
      <section
        className="hero pb-10 lg:pb-0 bg-linear-to-r  from-[#E1F5FE] to-[#FFF0CC] w-full flex justify-center"
        id="home"
      >
        <div className="hero-first-div w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0">
          <div className="hero-div flex flex-col space-y-5 justify-center items-center   w-full sm:items-start">
            <h1
              className="classic text-[32px] sm:text-[36px] md:text-[48px] xl:text-[60px] w-full max-w-[354px] md:max-w-[450px] xl:max-w-[530px] font-[family-name:var(--font-baloo2)] font-bold text-black"
              id="classics"
            >
              Building{" "}
              <span className="text-[#009147] md:text-black">strong minds</span>{" "}
              and{" "}
              <span className="text-[#009147] md:text-black">
                bright futures
              </span>{" "}
              for African children.
            </h1>
            <p
              className="text-start text-[14px] sm:text-[16px] md:text-[18px] w-full max-w-[354px] md:max-w-[450px] xl:max-w-[530px]"
              id="classics"
            >
              Earlybrite helps young people discover who they are, explore what
              they love, and prepare for the future with confidence.
            </p>
            <div className="flex items-center gap-3  w-full  md:justify-start flex-wrap">
              <button className="bg-[#F9BB1E] button w-fit text-[12px] font-medium sm:text-[16px]">
                <span className="flex gap-2 items-center justify-center text-[12px] font-medium text-black">
                  Explore Program <BlackRightarrowSvg />
                </span>
              </button>
              <button className="bg-[#1A94D2] button w-fit text-white text-[14px] sm:text-[16px]">
                <span className="flex gap-2 items-center justify-center text-[12px] font-medium text-white">
                  Talk to Us <WhiteRightarrowSvg />
                </span>
              </button>
            </div>
          </div>

          <div className="mt-5 lg:mt-0 w-full lg:w-auto px-5 md:px-0">
            <div
              ref={imageContainerRef}
              className="flex image-container items-center h-[300px] sm:h-[350px] md:h-[403px] lg:h-[450px] xl:w-[603px] xl:h-[500px] overflow-x-auto no-scrollbar gap-5 snap-x snap-mandatory"
            >
              {/* First image */}
              <div className="w-full h-full shrink-0 rounded-2xl snap-start">
                <Image
                  src="/images/righr-hero.png"
                  width={603}
                  height={603}
                  alt="right.hero"
                  className="w-full h-full object-cover hero-img rounded-2xl"
                />
              </div>

              {/* Second image */}
              <div className="w-full h-full shrink-0 rounded-2xl snap-start">
                <Image
                  src="/home-page/left-hero.png"
                  width={603}
                  height={603}
                  alt="left.hero"
                  className="w-full h-full object-cover hero-img rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
