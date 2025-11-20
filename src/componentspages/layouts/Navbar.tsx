"use client";
import React from "react";
import Image from "next/image";
import { RightarrowSvg } from "../../../public/svg/constants";
import HoverDropdown from "../shadcnuicomponents/hovercard";
import { LogoSvg } from "../../../public/svg/constants";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  function clicker() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className="md:bg-linear-to-r  md:from-[#E1F5FE] sticky  w-full top-0 bg-white md:to-[#FFF0CC]">
      <div className="w-full flex items-center justify-center">
        <nav className="w-full 3xl:max-w-[1400px] flex items-center justify-between px-7 xl:px-28 3xl:px-0">
          <div>
            <LogoSvg />
          </div>

          <div className="hidden md:flex gap-10 lg:gap-5 md:gap-5">
            <button className="flex items-center gap-3 bg-[#202D60] rounded-full text-white py-3 px-6 md:px-5 md:py-2.5 hover:bg-[#4A5DFF] transition-all duration-300">
              <h3>For Schools</h3>
              <Image
                src="/images/star.svg"
                alt="hero image"
                width={20}
                height={20}
                className="rotate"
              />
            </button>
            <div className="flex items-center gap-5 lg:gap-15">
              <Link
                href="/"
                className="hover:text-[#1A94D2] transition-all duration-100"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="hover:text-[#1A94D2] transition-all duration-100"
              >
                About Us
              </Link>
              <HoverDropdown />
            </div>
          </div>

          <div className="md:hidden">
            <button
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1 relative z-9999"
              onClick={clicker}
            >
              <span
                className={`block w-5 h-0.5 bg-black transition-transform ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-black transition-opacity ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-black transition-transform ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>

          {/* Contact */}
          <div className="contact">
            <Link href="#contact">
              <span className="flex gap-2 ">
                Contact Us <RightarrowSvg />
              </span>
            </Link>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-9998 pt-20 px-5">
          <div className="flex flex-col gap-6">
            <button className="flex items-center justify-center gap-3 bg-[#202D60] rounded-full text-white py-3 px-6 hover:bg-[#4A5DFF] transition-all duration-300">
              <h3>For Schools</h3>
              <Image
                src="/images/star.svg"
                alt="hero image"
                width={20}
                height={20}
                className="rotate"
              />
            </button>
            <Link
              href="#home"
              className="text-lg hover:text-[#1A94D2] transition-all duration-100"
              onClick={clicker}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-lg hover:text-[#1A94D2] transition-all duration-100"
              onClick={clicker}
            >
              About Us
            </Link>
            <HoverDropdown />
            <Link
              href="#contact"
              className="text-lg hover:text-[#1A94D2] transition-all duration-100"
              onClick={clicker}
            >
              <span className="flex gap-2">
                Contact Us <RightarrowSvg />
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
