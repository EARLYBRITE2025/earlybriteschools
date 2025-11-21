import React from "react";
import Image from "next/image";
import {
  RightarrowSvg,
  WhiteRightarrowSvg,
} from "../../../public/svg/constants";

const ImmaginariumPromise = () => {
  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full 3xl:max-w-[1400px]  xl:px-28 3xl:px-0">
        <div className="">
          <div className="bg-[#202D60] rounded-[24px] p-4 py-8 xl:p-12 flex flex-col xl:flex-row items-stretch justify-between gap-8">
            {/* Left content */}
            <div className="xl:w-[45%]">
              <h2 className="text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-white mb-6">
                The Immaginarium Promise
              </h2>
              <p className="text-white text-[16px] mb-4">
                Immaginarium transforms every Saturday into a world of discovery
                and creation.
              </p>
              <p className="text-white text-[16px] mb-4">
                Here, your child&apos;s imagination is not just celebrated,
                it&apos;s nurtured.
              </p>
              <p className="text-white text-[16px] mb-8">
                With the right guidance and joyful experiences, children grow
                into confident thinkers, problem-solvers, and compassionate
                learners.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-[#1A94D2] w-fit text-white py-3 px-2 rounded-full flex items-center gap-2 hover:bg-[#e5aa1a] transition-all duration-300">
                  Enroll your child <WhiteRightarrowSvg />
                </button>
                <button className="bg-[#F9BB1E] text-black py-3 w-fit px-2 rounded-full hover:bg-gray-100 transition-all duration-300">
                  Talk to an Advisor
                </button>
              </div>
            </div>

            {/* Right image */}
            <div className="xl:w-[50%] relative min-h-[450px]">
              <Image
                src="/images/immaginerium-promise.png"
                fill
                alt="Child with creation"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmaginariumPromise;
