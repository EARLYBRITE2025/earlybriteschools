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
        .from(
          ".contact-buttons",
          {
            opacity: 0,
            scale: 0.92,
            duration: 0.6,
            ease: "back.out(1.6)",
            stagger: 0.15,
          },
          "-=0.3"
        );

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
      className="flex items-center justify-center lg:py-[60px] lg:px-[120px] 
       md:bg-gradient-to-r from-[#E1F5FE] to-[#FFF0CC]
       md:flex-row"
      id="contact"
    >
      <div className="bg-[#0F151E] w-full h-[863px] lg:p-[40px] py-[40px] flex flex-col md:w-[1201px] md:h-[452px] gap-[40px]
       md:gap-[100px] md:p-[60px] rounded-2xl md:flex-row md:justify-between">
        {/* LEFT TEXT SIDE */}
        <div className="gap-[40px] pl-[40px] flex flex-col">
          <h1 className="contact-heading w-[322px] text-[36px] font-[family-name:var(--font-baloo2)]  font-bold text-[#FFFFFF]
           md:text-[56.62px] md:w-[454px]">
            Let's build the <strong className="text-[#009147]">future</strong>{" "}
            together.
          </h1>

          <p className="contact-text w-[322px] text-[16px] text-[#FFFFFF] md:w-[454px] md:text-[18.87px]">
            Whether you're a parent, student, or educator, there's a place for
            you at Earlybrite.
          </p>

          <div className="gap-[20.69px] flex">
            <button className="button bg-[#F9BB1E]  w-[212px] ">
             <span className="flex items-center gap-2  justify-center"> Talk to Us <RightarrowSvg/></span>
            </button>
            <button className="button bg-[#1A94D2] hidden w-[212px] justify-center lg:flex ">
               <span className="flex items-center gap-2 text-white  ">Partner with Us<WhiteRightarrowSvg/></span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="relative flex  w-full flex-col">
          {/* Background image */}
          <Image
            src="/images/anyrgb.com (11) 1.png"
            width={506.39}
            height={846.92}
            alt="background contact image"
            className="contact-bg-img relative top-[78.34px] sm:hidden"
          />

          {/* Student image (desktop) */}
          <Image
            src="/images/student-contact.png"
            width={304.22}
            height={804.22}
            alt="student contact image"
            className="contact-student-img relative top-[40.96px] md:max-w-804.22 z-[2] hidden xl:flex"
          />

          {/* Student image (mobile) */}
          <Image
            src="/images/student-contact.png"
            width={804.22}
            height={804.22}
            alt="student contact image"
            className="contact-student-img relative top-[-410.96px] z-[2] sm:hidden"
          />

          {/* Layer */}
          <Image
            src="/images/layer.svg"
            width={430.34}
            height={329.71}
            alt="layer shape"
            className="contact-layer relative top-[-412.96px] z-[1] sm:hidden xl:flex hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
