import React from "react";
import Image from "next/image";
import { WhiteRightarrowSvg } from "../../../public/svg/constants";

const TalentFoundryHero = () => {
  return (
    <section className="w-full  bg-gradient-to-r from-[#E1F5FE] to-[#FFF0CC] md:bg-white py-12 flex justify-center" id="home">
      <div className="w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0">
        <div className=" flex flex-col xl:flex-row items-center justify-between gap-8">
          {/* Left content */}
          <div className="xl:w-[40%] w-full">
            <h1 className="text-[32px] xl:text-[48px] font-[family-name:var(--font-baloo2)] font-bold text-black leading-tight mb-6">
              The skills that shape tomorrow start here.
            </h1>
            <p className="text-[#101010E5] text-[16px] mb-6">
              Talent Foundry brings hands-on digital, creative, and innovation
              programs into schools. We help students build the skills,
              confidence, and opportunities they need to thrive in a digital
              world.
            </p>
            <button className="bg-[#1A94D2] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#1580b8] transition-all duration-300">
              Partner with us <WhiteRightarrowSvg />
            </button>
          </div>

          {/* Right images grid */}
          <div className="xl:w-[55%] w-full">
            <div className=" hidden lg:grid grid-cols-3 gap-3">
              {/* Row 1 */}
              <div className="col-span-2 row-span-2 relative h-[280px]">
                <Image
                  src="/images/talent-hero-1.png"
                  fill
                  alt="Student learning"
                  className=" object-cover"
                />
              </div>
              <div className="row-span-2">
                <div className="relative h-[30%] mb-3 w-[70%] ">
                  <Image
                    src="/images/talent-hero-2.png"
                    fill
                    alt="Student portrait"
                    className=" object-fit"
                  />
                </div>
                <div className="relative w-[80%] h-[65%]">
                  <Image
                    src="/images/talent-hero-3.png"
                    fill
                    alt="Student in classroom"
                    className=" object-cover"
                  />
                </div>
              </div>
              {/* Row 2 */}
              <div className="relative h-[150px]">
                <Image
                  src="/images/talent-hero-4.png"
                  fill
                  alt="Student smiling"
                  className=" object-cover"
                />
              </div>
              <div className="col-span-1 relative h-[220px]">
                <Image
                  src="/images/talent-hero-5.png"
                  fill
                  alt="Students collaborating"
                  className="  object-cover"
                />
              </div>
              <div className="col-span-1 relative w-[50%] h-[65%]">
                <Image
                  src="/images/talent-hero-6.png"
                  fill
                  alt="Students collaborating"
                  className="  object-fit  "
                />
              </div>
            </div>
            <div>
              <Image
                src="/images/talent-hero-mobile.png"
                alt="Talent Foundry"
                width={600}
                height={400}
                className="lg:hidden w-full h-auto  object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentFoundryHero;
