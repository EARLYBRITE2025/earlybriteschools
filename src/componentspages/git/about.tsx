import React from "react";
import Image from "next/image";
import { features } from "../layouts/constants/constants";
const About = () => {
  return (
    <>
      <section className="bg-[#BAE6FC] p-5 lg:px-16 xl:justify-center flex items-center flex-col ">
        <div className="flex flex-col items-center  gap-4 justify-center w-full ">
          <h1 className="text-[#101010] text-[48px] text-center font-bold font-(family-name:--font-baloo2)">
            Why Parents Choose GIT
          </h1>
          <p className="text-[#666666] text-[13.8px] xl:w-[542px] text-center">
            A program that gives your child the confidence, exposure, and global
            mindset to thrive anywhere.
          </p>
          <div className="flex flex-wrap  items-center justify-center flex-row gap-6 py-10 w-full mx-auto">
            {features.map((item, index) => (
              <div
                key={index}
                className="w-[290px] h-[229px] pt-6 px-6 pb-[45px] bg-white rounded-xl shadow flex flex-col items-start justify-start"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="w-[48.5px] h-[48.5px] object-cover rounded-lg"
                />
                <h3 className="text-[24px] font-bold mt-4">{item.title}</h3>
                <p className="text-[#666666] text-[13.8px] ">
                  {item.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
