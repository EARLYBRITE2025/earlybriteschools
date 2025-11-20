"use client";
import Image from "next/image";
import gsap from "gsap";
import { RightarrowSvg } from "../../../public/svg/constants";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const Features = () => {
  const imgRef = useRef(null);

  useGSAP(() => {
    if (window.innerWidth < 1280) return; // Only run animations on desktop (xl breakpoint)
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
    const start = "top top";
    const maskedTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
        pinSpacing: false,
      },
    });
    maskedTimeline.to(
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
    <section
      className="flex flex-col items-center w-full justify-center md:bg-[#BAE6FC]"
      id="about"
    >
      {/* First card - Blue */}
      <div
        className="w-full flex justify-center pt-10 xl:relative xl:z-[1]"
        id="art"
      >
        <div className="w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0 feature-styles">
          <div className="bg-[#1A94D2] first-div xl:h-full flex flex-col xl:flex-row items-center w-full rounded-2xl overflow-hidden">
          <div
            className="p-5 md:p-[30px] space-y-4 md:space-y-3 xl:gap-[40px]
        xl:h-[330px] flex flex-col justify-center"
          >
            <h2 className="second-header font-(family-name:--font-baloo2) text-[24px] md:text-[32px] xl:text-[48px] md:w-[350px] xl:w-[483px]">
              We make learning come alive.
            </h2>
            <p
              className="w-full md:w-[350px] xl:w-[483px] text-[#FFFFFF] text-[14px] md:text-[16px] xl:text-[18px]"
              id="classique"
            >
              Earlybrite is a hybrid education platform helping children and
              young adults, aged 5 to 22, build creativity, leadership, and
              real-world skills. We combine mentorship, technology, and
              experience-based learning to help them thrive in an ever-changing
              world.
            </p>
            <button className="button bg-white">
              <span className="flex gap-4 items-center group justify-center">
                Talk to Us <RightarrowSvg />
              </span>
            </button>
          </div>
          <div
            className="w-full relative hero-image flex
        justify-center
        items-center"
            id="top-grid"
          >
            <div className="relative abstract-shape md:hidden">
              <Image
                src="/images/layerfutures.png"
                alt="hero right"
                width={603.83}
                height={462.643335}
                ref={imgRef}
                className="relative top-[-100px] left-8"
              />
            </div>
            <Image
              src="/images/feature-child.png"
              alt="hero right image"
              width={615}
              className="rounded-xl md:hidden z-[5]"
              height={403}
            />
            {/*larger screen */}
            <Image
              src="/images/lrgefuturespic.png"
              alt="hero right image"
              width={824}
              ref={imgRef}
              className="rounded-xl hidden md:block z-[5] w-full max-w-[500px] xl:max-w-[824px] h-auto"
              height={540}
            />
          </div>
          </div>
        </div>
      </div>
      {/*this is the second card - Green */}
      <div
        className="w-full flex justify-center xl:relative xl:z-[10]"
        id="will-fade"
      >
        <div className="w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0 feature-styles">
          <div className="bg-[#009147] first-div xl:h-full flex flex-col xl:flex-row items-center w-full rounded-2xl overflow-hidden">
            <div
              className="p-[20px] md:p-[30px] xl:p-[40px] space-y-4 md:space-y-3 xl:gap-[40px]
        xl:h-[330px] flex flex-col justify-center"
            >
              <h2 className="second-header text-[24px] md:text-[32px] xl:text-[48px] md:w-[350px] xl:w-[483px] font-[family-name:var(--font-baloo2)]">
                Shaping Africa&apos;s future, one learner at a time.
              </h2>
              <p className="w-full md:w-[350px] xl:w-[483px] text-[#FFFFFF] text-[14px] md:text-[16px] xl:text-[18px]">
                Our vision is to become the most trusted and innovative learning
                destination for young people worldwide. We want every learner,
                wherever they are, to access quality education that&apos;s
                practical, global, and fun.
              </p>
              <button className="button bg-white">
                <span className="flex gap-4 items-center group justify-center">
                  Talk to Us <RightarrowSvg />
                </span>
              </button>
            </div>
            <div
              className="w-full relative hero-image flex
        justify-center
        items-center"
            >
              <div className="relative abstract-shape md:hidden">
                <Image
                  src="/images/larercard.png"
                  alt="hero right image"
                  width={603.8}
                  className="relative top-[-25px] left-9"
                  height={462.6}
                />
              </div>
              <Image
                src="/images/smallcard.png"
                alt="hero right image"
                width={492}
                className="rounded-xl relative md:hidden z-[5]"
                height={492}
              />
              {/*larger screen */}
              <Image
                src="/images/largecard.png"
                alt="hero right image"
                width={669}
                className="rounded-xl relative hidden md:block z-[5] w-full max-w-[500px] xl:max-w-[669px] h-auto"
                height={669}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
