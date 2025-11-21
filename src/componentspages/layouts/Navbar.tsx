"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RightarrowSvg } from "../../../public/svg/constants";
import HoverDropdown from "../shadcnuicomponents/hovercard";
import { LogoSvg } from "../../../public/svg/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
const router = useRouter()
  function clicker() {
    setIsOpen((prev) => !prev);
  }

  // Define colors for different pages
  const getNavbarColors = () => {
    switch (pathname) {
      case "/gap":
        return "bg-gradient-to-r from-[#BAE6FC] to-[#00914780]";
      case "/git":
        return "bg-gradient-to-r from-[#E1F5FE] to-[#FFF0CC]";
      case "/immaginarium":
        return "bg-black";
      case "/temp":
        return "bg-gradient-to-r from-[#E1F5FE] to-[#BAE6FC]";
      case "/summer":
        return "bg-[#0F151E]";
      case "/talent-foundry":
        return "bg-white";
        case "/for-school":
        return "bg-[#FFE5A2]";
      default:
        return "bg-gradient-to-r from-[#E1F5FE] to-[#FFF0CC]";
    }
  };

  // Define text colors based on background
  const getTextColor = () => {
    switch (pathname) {
      case "/immaginarium":
        return "text-white";
      case "/summer":
        return "text-white";
      default:
        return "text-black";
    }
  };

  const getHamburgerColor = () => {
    switch (pathname) {
      case "/immaginarium":
        return "bg-white";
      case "/summer":
        return "bg-white";
      default:
        return "bg-black";
    }
  };

  return (
    <header className={`sticky w-full top-0 ${getNavbarColors()} z-[500]`}>
      <div className="w-full flex items-center justify-center">
        <nav className="w-full 3xl:max-w-[1400px] flex items-center justify-between px-7 xl:px-28 3xl:px-0">
          <div>
            <LogoSvg />
          </div>

          <div className="hidden lg:flex gap-10 lg:gap-5 md:gap-5">
            <button onClick={()=> router.push("/for-school")} className="flex items-center gap-3 bg-[#202D60] rounded-full text-white py-3 px-6 md:px-5 md:py-2.5 hover:bg-[#4A5DFF] transition-all duration-300">
              <h3>For Schools</h3>
              <Image
                src="/images/star.svg"
                alt="hero image"
                width={20}
                height={20}
                className="rotate"
              />
            </button>
            <div
              className={`flex items-center gap-5 lg:gap-15 ${getTextColor()}`}
            >
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

          <div className="lg:hidden">
            <button
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1 relative z-9999"
              onClick={clicker}
            >
              <span
                className={`block w-5 h-0.5 ${getHamburgerColor()} transition-transform ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 ${getHamburgerColor()} transition-opacity ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 ${getHamburgerColor()} transition-transform ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>

          {/* Contact */}
          <div className="contact">
            <Link href="#contact">
              <span className="flex gap-2 py-3">
                Contact Us <RightarrowSvg />
              </span>
            </Link>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-9998 pt-20 px-5">
          <div className="flex flex-col gap-6">
            <button onClick={()=> router.push("/for-school")} className="flex items-center justify-center gap-3 bg-[#202D60] rounded-full text-white py-3 px-6 hover:bg-[#4A5DFF] transition-all duration-300">
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
            <HoverDropdown onLinkClick={clicker} />
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
