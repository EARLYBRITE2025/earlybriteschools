"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LogoSvg, LocationSvg, MailSvg } from "../../../public/svg/constants";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Fade the whole section
      tl.from(".footer-wrapper", {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      // Bring the big box up
      tl.from(
        ".footer-box",
        {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // Stagger each nav column
      tl.from(
        ".footer-col",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.6"
      );

      // Icon bounce (very small & professional)
    
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="footer-wrapper bg-gradient-to-r from-[#E1F5FE] to-[#FFF0CC] 
      py-[40px] px-[24px] flex items-center justify-center w-full flex-col mt-10 xl:mt-0"
    >
      <div
        className="footer-box h-[1094px] xl:w-[1200px] xl:h-[304px] w-[358px] 
        bg-[#FFFFFF80] rounded-2xl py-[40px] px-[47px] gap-[90px] flex flex-col xl:flex-row"
      >
        
        {/* LEFT COLUMN */}
        <div className="footer-col flex flex-col items-start  justify-start gap-[32px] w-[264px]">
         <div>
             <LogoSvg  />
         </div>

          <p className="w-[255px] xl:w-[486px] text-[#000000CC] leading-[1.6]">
            At Earlybrite, we help young learners build confidence, creativity,
            and the skills to thrive in a changing world. Our programs combine
            curiosity-driven learning with practical knowledge that prepares
            every child for what's ahead.
          </p>
          <span className="md:hidden xl:flex font-bold  opacity-80 text-sm mt-4 ">
            © 2025 Earlybrite. All rights reserved.
          </span>
        </div>

        {/* RIGHT SECTION */}
        <section className="flex flex-col xl:flex-row items-start gap-[20px] w-full xl:justify-end xl:gap-[90px]">

          {/* NAVIGATION */}
          <nav className="footer-col">
            <ul className="text-[#101010CC] flex flex-col gap-[24px]">
              <span className="text-black text-[18px] font-bold font-[family-name:var(--font-baloo2)]">Navigation</span>
              <div className="flex flex-col gap-[16px] ">
                <li>Home</li>
                <li>Programs</li>
                <li>About</li>
                <li>Contact Us</li>
              </div>
            </ul>
          </nav>

          {/* GET IN TOUCH */}
          <nav className="footer-col">
            <ul className="text-[#101010CC] flex flex-col gap-[24px]">
              <span className="text-black text-[18px] font-bold font-[family-name:var(--font-baloo2)]">Get In Touch</span>
              <div className="flex flex-col gap-[16px]">
                <li className="flex items-center gap-2">
                  <LocationSvg  /> Lekki, Lagos, Nigeria.
                </li>
                <li className="flex items-center gap-2">
                  <MailSvg  /> hello@earlybrite.com
                </li>
              </div>
            </ul>
          </nav>

          {/* SOCIAL */}
          <nav className="footer-col">
            <ul className="text-[#101010CC] flex flex-col gap-[24px] font-[family-name:var(--font-baloo2)]">
              <span className="text-black text-[18px] font-bold">Follow Us</span>
              <div className="flex flex-col gap-[16px]">
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>YouTube</li>
              </div>
            </ul>
          </nav>

          <span className="md:hidden opacity-80 text-sm mt-4 font-[family-name:var(--font-baloo2)]">
            © 2025 Earlybrite. All rights reserved.
          </span>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
