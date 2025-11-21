import React from "react";
import Image from "next/image";
import { WhiteRightarrowSvg } from "../../../public/svg/constants";

const childGains = [
  "Global confidence and independence",
  "Real-world problem-solving and innovation skills",
  "Cultural awareness and empathy",
  "Leadership and teamwork abilities",
  "A portfolio of real-world experiences",
];

const ChildGain = () => {
  return (
    <section className="bg-gradient-to-r px-8 lg:px-28 py-10 mt-10 flex-col lg:flex-row from-[#E1F5FE] to-[#FFF0CC] font-[family-name:var(--font-baloo2)] flex">
      <div className="items-start flex-[.5] flex flex-col justify-start gap-[40px]">
        <h1 className="text-[#000000] xl:text-[44.56px] text-[36px] font-bold font-[family-name:var(--font-baloo2)]">
          What Your Child Gains
        </h1>

        <ul className="space-y-3 w-full  text-[#FFFFFF] flex flex-col items-start">
          {childGains.map((gain, index) => (
            <li
              key={index}
              className="min-h-[30px] bg-[#1A94D2] lg:rounded-lg  xl:h-[70px] w-full lg:w-[80%] xl:p-[24px] p-3 justify-start flex items-start text-start"
            >
              {gain}
            </li>
          ))}
        </ul>
        <div
          className=" hidden lg:flex items-center justify-center 
                    gap-3 md:gap-5 w-[80%]"
        >
          <button className="bg-[#F9BB1E] w-1/2 reuseable-button">
            Apply For GIT
          </button>

          <button className="bg-[#1A94D2] w-1/2 reuseable-button text-white">
            <span className="flex gap-4 items-center group justify-center text-white">
              Talk to Us <WhiteRightarrowSvg />
            </span>
          </button>
        </div>
      </div>
      <div className="flex-[.5] mt-10 lg:mt-0">
        <Image
          src="/images/gains-mobile.png"
          width={322}
          height={254.85}
          alt=""
          className="md:hidden"
        />
        <Image
          src="/images/gains.png"
          width={657}
          height={473}
          alt=""
          className="hidden object-cover md:flex h-full w-full  rounded-2xl"
        />
      </div>
    </section>
  );
};

export default ChildGain;
