"use client";

import Image from "next/image";

const brands = [
  "/images/brand1.png",
  "/images/brand2.png",
  "/images/brand3.png",
  "/images/brand4.png",
];

const Brands = () => {
  return (
    <section className="w-full bg-white  py-16">
      <div className="max-w-[1200px] mx-auto px-5">
        <h3 className="text-[#666666] text-center text-[20px] font-semibold font-[family-name:var(--font-nunito)] leading-[100%] mb-8">
          Brands who trust us
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand}
              width={150}
              height={50}
              alt={`Brand ${index + 1}`}
              className="h-8 md:h-10 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
