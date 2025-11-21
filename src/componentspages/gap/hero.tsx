import React from "react";
import Image from "next/image";
import { WhiteRightarrowSvg } from "../../../public/svg/constants";

const GapHero = () => {
  return (
    <section className="w-full  3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0">
      <div className="w-full bg-[#F9BB1E] flex flex-col h-[1050px] sm:h-[750px] overflow-clip lg:h-screen rounded-3xl">
        <div className="flex flex-col h-1/2 w-full items-center justify-center ">
          <h1 className="text-[36px] xl:text-[60px] px-4 sm:px-10 lg:px-40 text-center font-[family-name:var(--font-baloo2)] font-bold text-black ">
            Turn waiting time into a season of purpose and growth
          </h1>
          <p className="text-center text-[#101010E5] text-[18px] px-4 sm:px-10 lg:px-40 mt-5">
            The Earlybrite Gap Year Program helps young adults transform their
            transition year into a life-changing experience. Through
            internships, mentorship, and global learning, your child gains
            clarity, confidence, and the skills to thrive in university and
            beyond.
          </p>
          <div className="flex items-center sm:gap-3 mt-5">
            <button className="bg-[#202D60] w-fit reuseable-button text-white">
              Apply for Git
            </button>
            <button className="bg-[#1A94D2] w-fit reuseable-button text-white">
              <span className="flex gap-4 items-center justify-center text-white">
                Talk to Us <WhiteRightarrowSvg />
              </span>
            </button>
          </div>
        </div>

        <div className="flex items-center w-full h-1/2   justify-center relative ">
          <Image
            src="/images/gap-arrow.png"
            width={775}
            height={500}
            alt="arrow pic"
            className="w-[140px] absolute lg:top-0 sm:top-[-60] top-0 right-5"
          />
          <Image
            src="/images/gap-spark.png"
            width={775}
            height={500}
            alt="sparkle pic"
            className="w-[140px] absolute bottom-0 lg:top-0 sm:top-[-60] top-0 left-5"
          />
          <Image
            src="/images/anyrgb.com (11) 1.png"
            width={775}
            height={500}
            alt="icons pic"
            className="w-[350px] hidden lg:block z-1 absolute bottom-0 left-1/3"
          />
          <Image
            src="/gap-page/gap-hero-large.png"
            width={775}
            height={500}
            alt="hero pic"
            className="w-fit absolute hidden sm:block bottom-0 h-[600px]"
          />
          <Image
            src="/images/gap-hero-mobile.png"
            width={775}
            height={500}
            alt="hero pic"
            className="w-fit absolute object-fit sm:hidden bottom-0 h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default GapHero;
