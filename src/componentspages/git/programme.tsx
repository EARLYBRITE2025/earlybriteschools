import React from "react";
import Image from "next/image";
const Programme = () => {
  return (
    <section className="bg-[#0F151E] px-5 lg:px-16 h-full relative grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
      <div className="text-white flex h-auto py-10 justify-start flex-col  md:gap-[30px]">
        <h1 className="text-[36px] pb-10 text-center lg:text-left font-[family-name:var(--font-baloo2)] font-bold">
          Program Overview
        </h1>
        <p className="   text-[16px] pb-10">
          The Global Innovation Trek is an exclusive summer experience for young
          people who want more than classroom learning. You will spend three
          weeks exploring Lisbon, Barcelona, and Paris, with each city offering
          something unique to learn and experience.
        </p>

        <p className="  text-[16px] ">
          You will visit startups,develop your own business ideas, explore
          cultural landmarks, and learn how technology, art, and leadership
          connect. Along the way, you will meet new friends, share ideas that
          matter, and discover a deeper sense of purpose. After the trip, your
          journey continues with the Elite Mentorship Program (TEMP). For 30
          months, you will build digital fluency, global awareness, and the
          skills to turn your ideas into action. Your passport takes you
          there.Your purpose keeps you growing.
        </p>

        <div className="flex items-center mt-5 md:justify-center lg:justify-start space-x-3 xl:items-start justify-start whitespace-nowrap md:items-center">
          <button className="bg-[#F9BB1E] text-black reuseable-button">
            Apply For GIT
          </button>
          <button className="bg-[#1A94D2] text-white reuseable-button">
            Download Brochure
          </button>
        </div>
      </div>
      <div className=" lg:pt-20 h-full relative flex items-center justify-center">
        <Image
          src="/images/programme-map.png"
          width={514}
          alt="programme.map"
          height={270}
          className="absolute object-cover lg:relative"
        />
        <Image
          src="/images/programme-large.png"
          width={514}
          alt="programme.map"
          height={400}
          className="relative lg:absolute bottom-0 object-contain w-[70%] mt-32 lg:mt-0 lg:w-full lg:h-[105%]"
        />
      </div>
    </section>
  );
};

export default Programme;
