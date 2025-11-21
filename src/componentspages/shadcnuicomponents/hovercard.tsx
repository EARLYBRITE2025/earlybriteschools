"use client";
import React from "react";
import Link from "next/link";
import { DownarrowSvg } from "../../../public/svg/constants";

interface HoverDropdownProps {
  onLinkClick?: () => void;
}

const HoverDropdown = ({ onLinkClick }: HoverDropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const handleLinkClick = () => {
    setIsOpen(false);
    if (onLinkClick) {
      onLinkClick();
    }
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center text-lg gap-2 hover:text-[#1A94D2] transition"
      >
        Programs
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <DownarrowSvg />
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border w-[316px] border-gray-200 shadow-md rounded-[12px] p-2 z-50 min-w-[200px]">
          <div className="flex flex-col gap-2">
            <Link
              href="/temp"
              onClick={handleLinkClick}
              className="text-black hover:text-[#1A94D2] cursor-pointer transition-colors"
            >
              The Elite Mentorship Programme [TEMP]
            </Link>
           
            <Link
              href="/git"
              onClick={handleLinkClick}
              className="text-black hover:text-[#1A94D2] cursor-pointer transition-colors"
            >
              Global Innovation Trek [GIT]
            </Link>
            <Link
              href="/immaginarium"
              onClick={handleLinkClick}
              className="text-black hover:text-[#1A94D2] cursor-pointer transition-colors"
            >
              Immaginarium
            </Link>
          
            <Link
              href="/summer"
              onClick={handleLinkClick}
              className="text-black hover:text-[#1A94D2] cursor-pointer transition-colors"
            >
              Summer School
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverDropdown;
