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

      tl.from(".footer-wrapper", { opacity: 0, duration: 0.8 });
      tl.from(".footer-box", { y: 40, opacity: 0, duration: 1 }, "-=0.4");
      tl.from(".footer-col", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="footer-wrapper bg-gradient-to-r from-[#E1F5FE] to-[#FFF0CC]
      py-10 px-5 md:px-6 flex items-center justify-center w-full flex-col "
    >
      <div
        className="
        footer-box bg-[#FFFFFF80] rounded-2xl
        py-10 px-5 md:px-8 w-full max-w-[1200px]
        flex flex-col lg:flex-row 
        gap-14 lg:gap-20
        "
      >
        {/* LEFT COLUMN */}
        <div className="footer-col flex flex-col gap-6 lg:w-[45%]">
          <LogoSvg />

          <p className="text-[#000000CC] leading-[1.7] max-w-[500px]">
            At Earlybrite, we help young learners build confidence, creativity,
            and the skills to thrive in a changing world. Our programs combine
            curiosity-driven learning with practical knowledge that prepares
            every child for what's ahead.
          </p>

          <span className="hidden md:block lg:hidden text-sm opacity-80 font-semibold">
            © 2025 Earlybrite. All rights reserved.
          </span>
        </div>

        {/* RIGHT SECTION */}
        <section
          className="
          flex flex-col sm:flex-row lg:flex-row 
          flex-wrap lg:flex-nowrap 
          gap-10 lg:gap-16 
          lg:w-[55%]
          "
        >
          {/* NAVIGATION */}
          <nav className="footer-col min-w-[150px]">
            <span className="text-black text-[18px] font-bold">Navigation</span>
            <ul className="text-[#101010CC] flex flex-col gap-3 mt-4">
              <li>Home</li>
              <li>Programs</li>
              <li>About</li>
              <li>Contact Us</li>
            </ul>
          </nav>

          {/* GET IN TOUCH */}
          <nav className="footer-col min-w-[150px]">
            <span className="text-black text-[18px] font-bold">Get In Touch</span>
            <ul className="text-[#101010CC] flex flex-col gap-3 mt-4">
              <li className="flex items-center gap-2">
                <LocationSvg /> Lekki, Lagos, Nigeria.
              </li>
              <li className="flex items-center gap-2">
                <MailSvg /> hello@earlybrite.com
              </li>
            </ul>
          </nav>

          {/* SOCIAL */}
          <nav className="footer-col min-w-[150px]">
            <span className="text-black text-[18px] font-bold">Follow Us</span>
            <ul className="text-[#101010CC] flex flex-col gap-3 mt-4">
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>YouTube</li>
            </ul>
          </nav>

          <span className="md:hidden text-sm opacity-80 font-semibold mt-4">
            © 2025 Earlybrite. All rights reserved.
          </span>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
