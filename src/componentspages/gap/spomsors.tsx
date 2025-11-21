"use client";

import Image from "next/image";

const brands = [
  "/images/brand1.png",
  "/images/brand2.png",
  "/images/brand3.png",
  "/images/brand4.png",
];

const Sponsors = () => {
  return (
    <section className="w-full py-16 flex justify-center" style={{ backgroundColor: 'rgba(0, 145, 71, 0.5)' }}>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <h3 className="text-[#666666] text-center text-[16px] xl:text-[20px] font-semibold font-[family-name:var(--font-nunito)] mb-8">
        Brands who trust us
      </h3>
      <div className="flex overflow-x-auto no-scrollbar items-center justify-start md:justify-center gap-8 md:gap-12 lg:gap-16 px-4 md:px-0">
        {brands.map((brand, index) => (
          <Image
            key={index}
            src={brand}
            width={150}
            height={50}
            alt={`Brand ${index + 1}`}
            className="h-8 md:h-10 w-auto object-contain shrink-0"
          />
        ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
