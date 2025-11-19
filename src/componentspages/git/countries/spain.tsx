import React from "react";
import Image from "next/image";
import { Check } from "../../../../public/svg/constants";
import { WhiteRightarrowSvg } from "../../../../public/svg/constants";
const Spain = () => {
  return (
    <div className="lg:px-16 py-16 bg-[#F2F2F2]">
      <section className="bg-[#FFE5A2] lg:shadow-2xl flex flex-col lg:flex-row-reverse w-full items-center gap-10 px-5 lg:px-16 py-10 lg:py-20 xl:rounded-xl  ">
        <div
          className=" flex items-start  h-auto flex-[.5] justify-start flex-col gap-5 
             "
        >
          <h1 className="text-[36px] font-(family-name:--font-baloo2)  text-start text-black font-bold">
            <span className="text-[#009147] font-bold">Spain:</span>The Fusion
            of Technology
          </h1>
          <p className=" text-start text-black font-bold  text-[18px] ">
            Barcelona - Innovation and Design Thinking
          </p>
          <p className=" text-start text-[18px] text-black xl:w-[583px]">
            Next, you arrive in Barcelona, a city that blends creativity with
            cutting-edge technology. This is where you will learn how ideas
            become real solutions.
          </p>
          <div className="flex flex-col text-start text-black  ">
            <div className="flex items-start justify-start">
              <Image
                src="/images/check-green.svg"
                alt="check"
                height={18}
                width={18}
                className="inline-block mr-2 mt-1"
              />
              <span className="flex gap-[22px]">
                Take part in a Design Thinking workshop that teaches you how to
                solve problems with creativity and collaboration.
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
              <span className="flex gap-[22px]">
                Visit a sports tech center and see how technology shapes modern
                football, from player performance to fan experience.
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
              <span className="flex gap-[22px]">
                Discover Spain&apos;s role in global innovation, from renewable
                energy to fashion technology.
              </span>
            </div>
          </div>

          <div className="flex items-center  space-x-3 xl:items-start justify-start whitespace-nowrap md:items-center">
            <button className="bg-[#1A94D2] reuseable-button text-white ">
              <span className="flex gap-4 items-center group justify-center text-white">
                Talk to Us <WhiteRightarrowSvg />{" "}
              </span>
            </button>
          </div>
        </div>
        <div className=" h-[480px] w-full flex-[.5]  ">
          <Image
            src="/images/spain-small.png"
            alt=""
            height={484}
            width={684}
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      </section>
    </div>
  );
};

export default Spain;
