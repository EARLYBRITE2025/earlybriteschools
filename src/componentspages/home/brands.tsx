"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const brands = [
  "/images/brand1.png",
  "/images/brand2.png",
  "/images/brand3.png",
  "/images/brand4.png",
];

const Brands = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate width of scrolling content
    const totalWidth = track.scrollWidth / 2; // because we duplicate the items
    
    // GSAP infinite marquee
    gsap.to(track, {
      x: -totalWidth,
      ease: "none",
      duration: 12,
      repeat: -1,
    });
  }, []);

  return (
    <section className="w-full bg-white py-16 flex justify-center">
      <div className="w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0 overflow-hidden">
        <h3 className="text-[#666666] text-center text-[20px] font-semibold font-[family-name:var(--font-nunito)] leading-[100%] mb-8">
          Brands who trust us
        </h3>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden">
          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-16 whitespace-nowrap will-change-transform"
          >
            {/* Duplicate the list so there is never a blank gap */}
            {[...brands, ...brands].map((brand, i) => (
              <Image
                key={i}
                src={brand}
                width={150}
                height={50}
                alt={`Brand ${i + 1}`}
                className="h-8 md:h-10 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
