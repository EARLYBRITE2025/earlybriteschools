import React from "react";
import Image from "next/image";
import { Gapfeatures } from "../layouts/constants/constants";

const Trusted = () => {
  return (
    <section className="w-full py-16 bg-[#BAE6FC] flex justify-center">
      <div className="w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0">
        <div className="text-center mb-10">
          <h1 className="text-[#101010] text-[30px] xl:text-[48px] font-bold font-[family-name:var(--font-baloo2)] max-w-[570px] mx-auto">
            Why Parents Trust the GAP Program
          </h1>
          <p className="text-[#666666] text-[14px] xl:text-[16px] max-w-[542px] mx-auto mt-4">
            A program that helps your child maximize their waiting period
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-6 justify-center">
          {Gapfeatures.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 flex-1">
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="w-12 h-12 object-cover rounded-[24px]"
              />
              <h3 className="text-[24px] w-[80%] font-bold mt-4 line-clamp-2 font-[family-name:var(--font-baloo2)]">
                {item.title}
              </h3>
              <p className="text-[#666666] text-[16px] mt-2">
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
