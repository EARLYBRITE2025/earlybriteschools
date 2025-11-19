"use client";

import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WhiteRightarrowSvg, RightarrowSvg } from "../../../public/svg/constants";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#contact",
          start: "top 75%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
        },
      });

      // TEXT HEADER + PARAGRAPH
      tl.from(".contact-heading", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      })
        .from(
          ".contact-text",
          {
            y: 35,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )
       

      // IMAGE ANIMATION
      const imgTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%",
        },
      });

      imgTl
        .from(".contact-bg-img", {
          opacity: 0,
          y: 30,
          scale: 1.05,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          ".contact-student-img",
          {
            opacity: 0,
            y: 40,
            scale: 0.9,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.6"
        )
        .from(
          ".contact-layer",
          {
            opacity: 0,
            scale: 1.15,
            duration: 1.1,
            ease: "power2.out",
          },
          "-=1"
        );

      // PARALLAX FLOAT EFFECT
      gsap.to(".contact-layer", {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="flex items-center justify-center py-10 px-5 md:py-[60px] md:px-10 lg:px-[120px]
       md:bg-gradient-to-r from-[#E1F5FE] to-[#FFF0CC]"
      id="contact"
    >
      <div className="bg-[#0F151E] w-full max-w-[1201px] min-h-[700px] md:min-h-[450px] lg:min-h-[452px] p-[24px] sm:p-[32px] md:p-[40px] lg:p-[60px] flex flex-col gap-[40px] md:gap-[60px] lg:gap-[100px] rounded-2xl md:flex-row md:justify-between md:items-center">
        {/* LEFT TEXT SIDE */}
        <div className="gap-[24px] sm:gap-[32px] md:gap-[40px] flex flex-col w-full md:w-1/2">
          <h1 className="contact-heading w-full max-w-[322px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[454px] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[52px] xl:text-[56.62px] font-[family-name:var(--font-baloo2)] font-bold text-[#FFFFFF]">
            Let&apos;s build the <strong className="text-[#009147]">future</strong>{" "}
            together.
          </h1>

          <p className="contact-text w-full max-w-[322px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[454px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18.87px] text-[#FFFFFF]">
            Whether you&apos;re a parent, student, or educator, there&apos;s a place for
            you at Earlybrite.
          </p>

          <div className="gap-[16px] sm:gap-[20px] flex flex-wrap">
            <button className="button bg-[#F9BB1E] text-[14px] sm:text-[16px] w-full sm:w-auto min-w-[180px] sm:min-w-[212px]">
             <span className="flex items-center gap-2 justify-center">Talk to Us <RightarrowSvg/></span>
            </button>
            <button className="button bg-[#1A94D2] text-[14px] sm:text-[16px] w-full sm:w-auto min-w-[180px] sm:min-w-[212px] justify-center hidden lg:flex">
               <span className="flex items-center gap-2 text-white">Partner with Us<WhiteRightarrowSvg/></span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="relative flex w-full md:w-1/2 justify-center items-center min-h-[400px] md:min-h-[350px] overflow-hidden">
          {/* Decorative pattern background - visible on desktop */}
          <div className="absolute inset-0 hidden md:flex items-center justify-end pointer-events-none">
            <Image
              src="/images/anyrgb.com (11) 1.png"
              width={506.39}
              height={846.92}
              alt="decorative pattern"
              className="contact-bg-img absolute right-[-20%] w-auto h-[120%] object-contain opacity-100"
            />
          </div>

          {/* Decorative pattern background - mobile */}
          <Image
            src="/images/anyrgb.com (11) 1.png"
            width={506.39}
            height={846.92}
            alt="background contact image"
            className="contact-bg-img absolute top-[50px] sm:top-[60px] md:hidden w-auto h-[400px] object-contain"
          />

          {/* Student image (desktop) */}
          <Image
            src="/images/student-contact.png"
            width={304.22}
            height={804.22}
            alt="student contact image"
            className="contact-student-img relative z-[2] hidden md:flex w-auto h-[350px] lg:h-[400px] xl:h-[450px] object-contain"
          />

          {/* Student image (mobile) */}
          <Image
            src="/images/student-contact.png"
            width={804.22}
            height={804.22}
            alt="student contact image"
            className="contact-student-img relative z-[2] md:hidden w-auto h-[350px] object-contain"
          />

          {/* Layer decoration */}
          <Image
            src="/images/layer.svg"
            width={430.34}
            height={329.71}
            alt="layer shape"
            className="contact-layer absolute bottom-0 z-[1] hidden md:flex w-auto h-[200px] lg:h-[250px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
