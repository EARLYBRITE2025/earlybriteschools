import React from "react";
import Image from "next/image";
import { activities } from "../layouts/constants/constants";

const SideAttraction = () => {
  return (
    <>
      <main className="flex items-center justify-center py-16 xl:py-[60px]">
        <div className="flex flex-col items-center justify-center text-center w-full px-5 max-w-[1200px] gap-10">
          {/* HEADER */}
          <div className="flex flex-col gap-4 max-w-[820px]">
            <h1 className="text-[#101010] text-[32px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-bold font-[family-name:var(--font-baloo2)]">
              Side Attractions
            </h1>

            <p className="text-[#666666] text-[16px] md:text-[18px] leading-relaxed">
              The Global Innovation Trek isn&apos;t only about learning in
              workshops or classrooms. It&apos;s a well-rounded experience that
              builds character, curiosity, and cultural appreciation through
              guided activities designed for safety and joy.
            </p>
          </div>

          {/* BUTTON */}
          <button className="bg-[#F9BB1E] reuseable-button">
            Apply For GIT
          </button>

          {/* Desktop layout */}
          <div className="hidden lg:flex items-stretch justify-center gap-6 w-full">
            {/* Left column - 2 cards */}
            <div className="flex flex-col gap-6 flex-1">
              {activities.slice(0, 2).map((activity, index) => (
                <div
                  key={index}
                  className="bg-[#C9EDFF] p-6 rounded-xl text-start shadow-sm flex-1 flex flex-col justify-center"
                >
                  <h3 className="font-bold font-(family-name:--font-baloo2)">
                    {activity.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed mt-2">
                    {activity.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Center image */}
            <div className="flex justify-center items-center relative">
              <Image
                src="/images/image.png"
                width={400}
                height={400}
                alt=""
                className="rounded-xl max-h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 rounded-b-xl text-white text-start">
                <h3 className="font-bold text-lg font-(family-name:--font-baloo2)">
                  Friendship & Fun
                </h3>
                <p className="text-sm mt-2">
                  Group challenges, movie nights, and community dinners that
                  build lifelong bonds.
                </p>
              </div>
            </div>

            {/* Right column - 2 cards */}
            <div className="flex flex-col gap-6 flex-1">
              {activities.slice(2, 4).map((activity, index) => (
                <div
                  key={index}
                  className="bg-[#C9EDFF] p-6 rounded-xl text-start shadow-sm flex-1 flex flex-col justify-center"
                >
                  <h3 className="font-bold">{activity.title}</h3>
                  <p className="text-black/70 leading-relaxed mt-2">
                    {activity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet layout */}
          <div className="w-full lg:hidden flex flex-col gap-6">
            {/* Image first on mobile */}
            <div className="flex justify-center relative">
              <Image
                src="/images/image.png"
                width={513}
                height={513}
                alt=""
                className="rounded-xl w-full max-w-[400px]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 rounded-b-xl text-white text-start">
                <h3 className="font-bold text-lg font-(family-name:--font-baloo2)">
                  Friendship & Fun
                </h3>
                <p className="text-sm mt-2">
                  Group challenges, movie nights, and community dinners that
                  build lifelong bonds.
                </p>
              </div>
            </div>

            {/* Cards below */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-[#C9EDFF] p-6 rounded-xl text-start shadow-sm"
                >
                  <h3 className="font-bold font-(family-name:--font-baloo2)">
                    {activity.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed mt-2">
                    {activity.description}
                  </p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default SideAttraction;
