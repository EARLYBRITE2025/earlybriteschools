import React from "react";
import Image from "next/image";
import { Check } from "../../../public/svg/constants";
const BeyondTip = () => {
  return (
    <>
      <section className="bg-[#1A94D2] relative items-center flex justify-center flex-col  gap-10 lg:hidden">
        <div className="flex flex-col px-10 pt-10">
          <div className="flex flex-col text-[#FFFFFF] gap-4">
            <h1 className="text-[36px] font-bold font-[family-name:var(--font-baloo2)] ">
              Beyond the Trip
            </h1>
            <p className="text-[18px]">
              Every GIT participant continues their development through
              Earlybrite&apos;s Elite Mentorship Program (TEMP), a structured
              30-month roadmap that ensures their global learning becomes
              lifelong growth.
            </p>
            <div className="flex items-center  space-x-3 xl:items-start justify-start whitespace-nowrap md:items-center">
              <button className="bg-[#F9BB1E] reuseable-button">
                Apply For GIT
              </button>
            </div>
          </div>
          <div className="w-full bg-[#FFE5A2] rounded-2xl flex flex-col  p-5 mt-10  justify-start  h-fit lg:hidden xl:flex">
            <h1 className="text-[#000000] pl-5 text-[36px] font-bold font-(family-name:--font-baloo2) lg:hidden xl:flex">
              What this includes
            </h1>
            <ul className="flex flex-col font-bold text-[#000000] gap-[18px]  text-[20px]  ">
              <li className="flex    ">
                <span>
                  <Check />
                </span>{" "}
                Digital Skills & AI Fluency Training
              </li>
              <li className="flex">
                <span>
                  {" "}
                  <Check />{" "}
                </span>{" "}
                Global Language Mastery
              </li>
              <li className="flex">
                <span>
                  {" "}
                  <Check />{" "}
                </span>{" "}
                Internship & Job Placement Support
              </li>
              <li className="flex">
                <span>
                  {" "}
                  <Check />{" "}
                </span>{" "}
                Peer Workshop Alumni Workshop
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full relative overflow-clip">
          <Image
            src="/images/whats-this-include-layer.png"
            width={1200}
            height={500}
            alt=""
            className="w-[700px] rotate-360 top-0 z-[1] absolute  object-cover rounded-xl"
          />

          <Image
            src="/images/side-attraction.png"
            width={1200}
            height={500}
            alt=""
            className="w-full relative z-[2] object-cover rounded-xl"
          />
        </div>
      </section>

      <section className="relative hidden lg:flex items-start justify-center bg-[#1A94D2] min-h-[800px] pt-10">
        <div className="relative z-10 w-full ">
          {/* Top section with text and card */}
          <div className="flex justify-between items-start px-28 pt-10">
            {/* Left text content */}
            <div className="flex flex-col text-[#FFFFFF] gap-4 max-w-[454px]">
              <h1 className="text-[40px] font-bold font-[family-name:var(--font-baloo2)]">
                Beyond the Trip
              </h1>
              <p className="text-[18px]">
                Every GIT participant continues their development through
                Earlybrite&apos;s Elite Mentorship Program (TEMP), a structured
                30-month roadmap that ensures their global learning becomes
                lifelong growth.
              </p>
              <div className="flex items-center">
                <button className="bg-[#202D60] w-[212px] text-white reuseable-button">
                  Speak with an advisor
                </button>
              </div>
            </div>

            {/* Right card */}
            <div className="bg-[#FFE5A2] rounded-2xl flex flex-col py-10 px-10 items-start justify-center gap-6 w-[550px]">
              <h1 className="text-[#000000] text-[36px] font-bold font-[family-name:var(--font-baloo2)]">
                What this includes
              </h1>
              <ul className="flex flex-col font-bold text-[#000000] gap-3 text-[16px]">
                <li className="flex items-center gap-2">
                  <span>
                    <Image
                      src="/images/check-green.svg"
                      alt="check"
                      height={18}
                      width={18}
                      className="inline-block mr-2 mt-1"
                    />{" "}
                  </span>
                  Digital Skills & AI Fluency Training
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <Image
                      src="/images/check-green.svg"
                      alt="check"
                      height={18}
                      width={18}
                      className="inline-block mr-2 mt-1"
                    />{" "}
                  </span>
                  Global Language Mastery
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <Image
                      src="/images/check-green.svg"
                      alt="check"
                      height={18}
                      width={18}
                      className="inline-block mr-2 mt-1"
                    />{" "}
                  </span>
                  Internship & Job Placement Support
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <Image
                      src="/images/check-green.svg"
                      alt="check"
                      height={18}
                      width={18}
                      className="inline-block mr-2 mt-1"
                    />{" "}
                  </span>
                  Exam Prep and Study Abroad Guidance
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    <Image
                      src="/images/check-green.svg"
                      alt="check"
                      height={18}
                      width={18}
                      className="inline-block mr-2 mt-1"
                    />{" "}
                  </span>
                  Career Workshops & Alumni Network
                </li>
              </ul>
            </div>
          </div>

          {/* Image with guy on laptop - contained with spacing */}
          <div className="w-full relative">
            <Image
              src="/images/whats-this-include-layer.png"
              width={1200}
              height={500}
              alt=""
              className="w-[700px] rotate-360 top-40 z-[1] absolute  object-cover rounded-xl"
            />

            <Image
              src="/images/side-attraction.png"
              width={1200}
              height={500}
              alt=""
              className="w-full relative z-[2] object-cover rounded-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BeyondTip;
