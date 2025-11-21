import React from "react";
import Image from "next/image";
import { WhiteRightarrowSvg } from "../../../public/svg/constants";
const GitHero = () => {
  return (
    <>
      <section className="hero  bg-gradient-to-r from-[#E1F5FE] h-[910px] ">
        <div className="hero-first-div md:flex-col md:items-center xl:w-[1440px] xl:mt-[100px]  md:w-[90%] rounded-xl gap-[90px]  ">
          <div
            className={` hero-div flex flex-col gap-[40px]  justify-center items-center
        w-full xl:items-center `}
          >
            <h1 className="classic text-[36px]  text-center  xl:text-[60px] w-[354px]  font-[family-name:var(--font-baloo2)] font-bold text-black xl:w-[910px]  ">
              A Summer Journey of Innovation, Culture, and Discovery.
            </h1>

            <p className="text-center  text-[#666666]  xl:w-[910px] xl:text-[20px]  w-[354px]  ">
              Earlybrite helps young people discover who they are, explore what
              they love, and prepare for the future with confidence.
            </p>
            <span className="font-bold">
              Portugal | Spain | France | Ages 12+
            </span>
            <div className="flex items-center space-x-3 w-full justify-center whitespace-nowrap md:items-center">
              <button className="bg-[#F9BB1E] reuseable-button ">
                Apply For GIT{" "}
              </button>
              <button className="bg-[#1A94D2] reuseable-button text-white ">
                <span className="flex gap-4 items-center group justify-center text-white">
                  Talk to Us <WhiteRightarrowSvg />{" "}
                </span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto overflow-y-visible no-scrollbar xl:overflow-visible py-12 xl:py-0">
            <div className="flex xl:-[1119.70px] xl:space-x-[60px] relative gap-8 xl:gap-0 px-4 xl:px-0">
              <Image
                src="/images/paris.png"
                width={324.4}
                height={274.9302665212467}
                alt="first-git-hero"
                className="absolute top-[-150px] hidden lg:block w-24 left-0 p-[5px]  bg-white rounded-xl"
              />
              <Image
                src="/images/globe.png"
                width={324.4}
                height={274.9302665212467}
                alt="first-git-hero"
                className="absolute top-[-150px] w-24 hidden lg:block right-0 p-[5px]  bg-white rounded-xl"
              />
              <Image
                src="/images/git-hero-1.png"
                width={324.4}
                height={274.9302665212467}
                alt="first-git-hero"
                className="rotate-[-15.86deg] p-[5px] bg-white rounded-xl shrink-0"
              ></Image>
              <Image
                src="/images/git -her-2.png"
                width={324.4}
                height={274.9302665212467}
                alt="second-git-hero"
                className="p-[5px] bg-white rounded-xl shrink-0"
              ></Image>

              <Image
                src="/images/git-her-3.png"
                width={324.4}
                height={274.9302665212467}
                alt="third-git-hero"
                className="rotate-[22.46deg] p-[5px] bg-white rounded-xl shrink-0"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GitHero;
