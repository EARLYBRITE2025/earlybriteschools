import React from "react";
import Image from "next/image";
import { WhiteRightarrowSvg } from "../../../../public/svg/constants";
const Paris = () => {
  return (
    <section className="bg-[#FFFFFF] lg:shadow-2xl flex items-center gap-20 px-5 lg:px-16 flex-col lg:flex-row lg:py-20 xl:rounded-xl ">
      <div
        className=" flex items-start  h-auto flex-[.5] justify-start flex-col gap-5 
         "
      >
        <h1 className="text-[36px] text-[#666666] font-[family-name:var(--font-baloo2)] text-start font-bold">
          <span className="text-[#009147] font-bold">Paris:</span>
          Innovation, Branding, and Leadership
        </h1>
        <p className=" text-start text-[#666666] font-bold  text-[18px]">
          Your final stop is Paris, a city that celebrates creativity, culture,
          and big ideas
        </p>
        <p className=" text-start text-[18px] text-[#666666]">
          Here, you&apos;ll learn how innovation meets imagination and how the
          power of creativity can shape businesses, brands, and futures. You
          will
        </p>
        <div className="flex flex-col text-start text-[#666666] ">
          <div className="flex items-start justify-start">
            <Image
              src="/images/check-green.svg"
              alt="check"
              height={18}
              width={18}
              className="inline-block mr-2 mt-1"
            />{" "}
            <span className="flex ">
              Join a Branding and Marketing Workshop led by industry experts,
              where you&apos;ll learn how global brands like those in fashion
              and luxury use storytelling and design to make an impact.
            </span>
          </div>
          <div className="flex items-start justify-start">
            <Image
              src="/images/check-green.svg"
              alt="check"
              height={18}
              width={18}
              className="inline-block mr-2 mt-1"
            />
            <span className="flex item-center text-[#666666] ">
              Work with your group to create and present an innovative product
              or service, applying everything you&apos;ve learned throughout the
              trek
            </span>
          </div>
          <div className="flex items-start justify-start">
            <Image
              src="/images/check-green.svg"
              alt="check"
              height={18}
              width={18}
              className="inline-block mr-2 mt-1"
            />
            <span className="flex justify-center text-[#666666]">
              Visit a Technology and Science Museum to explore France&apos;s
              legacy of invention and discovery.
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3 xl:items-start justify-start whitespace-nowrap md:items-center">
          <button className="bg-[#1A94D2] reuseable-button text-white ">
            <span className="flex gap-4 items-center group justify-center text-white">
              Talk to Us <WhiteRightarrowSvg />{" "}
            </span>
          </button>
        </div>
      </div>

      <div className=" h-[480px] w-full flex-[.5]  ">
        <Image
          src="/images/pariss.png"
          alt=""
          height={484}
          width={684}
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
    </section>
  );
};

export default Paris;
