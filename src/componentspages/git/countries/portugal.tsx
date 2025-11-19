import React from "react";
import Image from "next/image";
import { WhiteRightarrowSvg } from "../../../../public/svg/constants";

const Portugal = () => {
  return (
    <>
      <section className="bg-[#FFFFFF] lg:shadow-2xl flex items-center gap-20 px-5 lg:px-16 flex-col lg:flex-row lg:py-20 xl:rounded-xl ">
        <div
          className=" flex items-start  h-auto flex-[.5] justify-start flex-col gap-[20px] 
         "
        >
          <h1 className="text-[36px] font-(family-name:--font-baloo2)  xl:w-[583px] text-start text-black font-bold">
            <span className="text-[#009147] font-bold">Portugal:</span> The
            Spirit of Discovery
          </h1>
          <p className=" text-start text-[#666666] font-bold  text-[18px] xl:w-[583px]">
            Lisbon Entrepreneurship and Financial Literacy
          </p>
          <p className=" text-start text-[18px] text-[#666666]">
            Your journey begins in Lisbon, one of Europe&apos;s most vibrant
            startup hubs. Here, you will experience what it feels like to turn
            ideas into real ventures
          </p>
          <div className="flex flex-col text-start text-[#666666] gap-[18px] ">
            <div className="flex items-start justify-start">
              <Image
                src="/images/check-green.svg"
                alt="check"
                height={18}
                width={18}
                className="inline-block mr-2 mt-1"
              />
              <span className="flex gap-[22px]">
                Visit local innovation labs and meet young founders who are
                solving real-world problems.
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
              <span className="flex text-[#666666] item-center gap-[22px] ">
                Take part in a mini business challenge where you and your team
                will pitch your own startup idea.
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
              <span className="flex text-[#666666] justify-center gap-[22px]">
                Join hands-on sessions that teach you how to budget, save, and
                understand the basics of investing.
              </span>
            </div>
          </div>

          <div className="flex items-center w-[322px]  xl:w-[583px]  space-x-3 xl:items-start justify-start whitespace-nowrap md:items-center">
            <button className="bg-[#1A94D2] reuseable-button text-white ">
              <span className="flex gap-4 items-center group justify-center text-white">
                Talk to Us <WhiteRightarrowSvg />{" "}
              </span>
            </button>
          </div>
        </div>

        <div className=" h-[480px] w-full flex-[.5]  ">
          <Image
            src="/images/Pictures(3).png"
            alt=""
            height={484}
            width={684}
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      </section>
    </>
  );
};

export default Portugal;
