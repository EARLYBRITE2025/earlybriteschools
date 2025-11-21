import React from "react";
import Image from "next/image";

const ProgramsForGrowth = () => {
  return (
    <section className="w-full bg-white py-16 flex justify-center">
      <div className="w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-4">
            Programs Designed for Real Growth
          </h2>
          <p className="text-[#101010E5] text-[16px]">
            Schools can choose one or combine multiple categories depending on
            their goals.
          </p>
        </div>

        {/* Cards Container - Horizontal scroll on mobile/tablet, grid on desktop */}
        <div className="overflow-x-auto xl:overflow-visible  scrollbar-hide">
          <div className="flex gap-2 xl:grid xl:grid-cols-3 xl:gap-2 min-w-max xl:min-w-0">
            {/* Emerging Tech - spans 2 rows, 1 column */}
            <div
              className="min-w-[280px] lg:rounded-tl-2xl xl:min-w-0 xl:row-span-2 p-6 flex flex-col"
              style={{ backgroundColor: "rgba(0, 145, 71, 0.19)" }}
            >
              <h3 className="text-[24px] font-bold text-black mb-3 font-[family-name:var(--font-baloo2)]">
                Emerging Tech
              </h3>
              <p className="text-black text-[14px] mb-2">
                Students learn the digital tools shaping tomorrow.
              </p>
              <p className="text-black text-[14px] mb-2">
                Coding, AI, Robotics, UI/UX, Innovation Tools
              </p>
              <p className="text-black text-[14px] font-semibold mb-4">
                Outcome: Digital fluency and problem-solving
              </p>
              <div className="mt-auto relative h-[280px]">
                <Image
                  src="/images/talent-emerging.png"
                  fill
                  alt="Emerging Tech"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Next Digital Creators Club - spans 1 row, 2 columns */}
            <div className="min-w-[380px] lg:rounded-tr-2xl xl:min-w-0 xl:col-span-2 bg-[#FFE5A2] p-6 flex flex-col xl:flex-row gap-4">
              <div className="flex-1 justify-center items-start flex flex-col">
                <h3 className="text-[24px] font-bold text-black mb-3 font-[family-name:var(--font-baloo2)]">
                  Next Digital Creators Club
                </h3>
                <p className="text-black text-[14px] mt-5 mb-2">
                  Create, publish, and make an impact online.
                </p>
                <p className="text-black text-[14px] mb-2">
                  Photo + video creation, editing, branding, monetization
                </p>
                <p className="text-black text-[14px] font-semibold">
                  Outcome: Expression, communication, entrepreneurship
                </p>
              </div>
              <div className="w-full flex-1 relative h-[200px]">
                <Image
                  src="/images/talent-next.png"
                  fill
                  alt="Next Digital Creators"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Linguaventure - 1 row, 1 column */}
            <div className="min-w-[280px] xl:min-w-0 bg-[#F2F2F2] p-6 flex flex-col">
              <h3 className="text-[24px] font-bold text-black mb-3 font-[family-name:var(--font-baloo2)]">
                Linguaventure
              </h3>
              <p className="text-black text-[14px] mb-2">
                Become a global communicator.
              </p>
              <p className="text-black text-[14px] mb-2">
                Local & international languages + culture exposure
              </p>
              <p className="text-black text-[14px] font-semibold mb-4">
                Outcome: Confidence interacting across borders
              </p>
              <div className="mt-auto relative h-[100px]">
                <Image
                  src="/images/talent-linguaventure.png"
                  fill
                  alt="Linguaventure"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Business Tycoon Club - 1 row, 1 column */}
            <div
              className="min-w-[280px] xl:min-w-0 p-6 flex flex-col"
              style={{ backgroundColor: "rgba(237, 110, 35, 0.5)" }}
            >
              <h3 className="text-[24px] font-bold text-black mb-3 font-[family-name:var(--font-baloo2)]">
                Business Tycoon Club
              </h3>
              <p className="text-black text-[14px] mb-2">
                A launchpad for young entrepreneurs.
              </p>
              <p className="text-black text-[14px] mb-2">
                Financial literacy, idea development, innovation projects
              </p>
              <p className="text-black text-[14px] font-semibold mb-4">
                Outcome: Smart money habits and enterprise mindset
              </p>
              <div className="mt-auto relative h-[100px]">
                <Image
                  src="/images/talent-business.png"
                  fill
                  alt="Business Tycoon"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Sporting IQ - spans 1 row, 2 columns */}
            <div className="min-w-[380px] lg:rounded-bl-2xl xl:min-w-0 xl:col-span-2 bg-[#BAE6FC] p-10 flex flex-col xl:flex-row gap-4">
              <div className="flex-1 justify-center items-start flex flex-col">
                <h3 className="text-[24px] font-bold text-black mb-3 font-[family-name:var(--font-baloo2)]">
                  Sporting IQ
                </h3>
                <p className="text-black text-[14px] mt-5 mb-2">
                  Sports with strategy, discipline, performance insights.
                </p>
                <p className="text-black text-[14px] mb-2">
                  Football, basketball, athletics, fitness and mindset
                </p>
                <p className="text-black text-[14px] font-semibold">
                  Outcome: Physical confidence and teamwork
                </p>
              </div>
              <div className="w-full flex-1 relative h-full">
                <Image
                  src="/images/talent-sporting.png"
                  fill
                  alt="Sporting IQ"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Gaming & Animation - 1 row, 1 column */}
            <div
              className="min-w-[280px] xl:min-w-0 p-6 flex flex-col"
              style={{ backgroundColor: "rgba(32, 45, 96, 0.5)" }}
            >
              <h3 className="text-[24px] font-bold text-black mb-3 font-[family-name:var(--font-baloo2)]">
                Gaming & Animation
              </h3>
              <p className="text-black text-[14px] mb-2">
                Game design, animation, creative tools
              </p>
              <p className="text-black text-[14px] font-semibold mb-4">
                Outcome: Creativity, design thinking, teamwork
              </p>
              <div className="mt-auto relative h-[150px]">
                <Image
                  src="/images/talent-gaming.png"
                  fill
                  alt="Gaming & Animation"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsForGrowth;
