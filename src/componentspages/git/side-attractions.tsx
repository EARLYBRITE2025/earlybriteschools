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
              The Global Innovation Trek isn&apos;t only about learning in workshops
              or classrooms. It&apos;s a well-rounded experience that builds
              character, curiosity, and cultural appreciation through guided
              activities designed for safety and joy.
            </p>
          </div>

          {/* BUTTON */}
          <button className="bg-[#F9BB1E] reuseable-button">
            Apply For GIT
          </button>

          {/* IMAGE + ACTIVITIES GRID */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">

            {/* IMAGE */}
            <div className="w-full lg:w-[50%] flex justify-center">
              <Image
                src="/images/image.png"
                width={513.227}
                height={513.227}
                alt=""
                className="rounded-xl w-[90%] sm:w-[400px] md:w-[450px] lg:w-full max-w-[500px]"
              />
            </div>

            {/* ACTIVITIES GRID */}
            <div className="w-full lg:w-[50%]">
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-[#C9EDFF] p-6 rounded-xl text-start shadow-sm"
                  >
                    <h3 className="font-bold">{activity.title}</h3>

                    <p className="text-black/70 leading-relaxed mt-2">
                      {activity.description}
                    </p>
                  </div>
                ))}
              </section>
            </div>

          </div>

        </div>
      </main>
    </>
  );
};

export default SideAttraction;
