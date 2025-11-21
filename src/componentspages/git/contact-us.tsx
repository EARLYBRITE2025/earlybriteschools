import React from "react";
import Image from "next/image";
import {
  WhiteRightarrowSvg,
  RightarrowSvg,
} from "../../../public/svg/constants";
const ContactUs = () => {
  return (
    <div className="xl:bg-gradient-to-r from-[#E1F5FE] to-[#FFF0CC] xl:flex xl:items-center xl:justify-center xl:p-[45px]">
      <section className=" bg-[#009147] lg:rounded-xl p-10 lg:p-[40px] flex xl:w-[1201px] xl:h-[642px] flex-col  md:gap-[220px] md:flex-row md:justify-between items-center justify-center ">
        <div className="w-[322px] flex flex-col gap-[40px]  ">
          <h1 className="text-[36px] text-white font-bold font-[family-name:var(--font-baloo2)] xl:text-[56.62px] xl:w-[508px]">
            Ready to Give Your Child{" "}
            <span className="text-[#F9BB1E]"> Global Advantage?</span>
          </h1>
          <p className="text-white xl:text-[21.23px] xl:w-[508]">
            The world is changing fast, but the right experience can prepare
            your child for life. Join the Earlybrite Global Innovation Trek and
            let your child learn, explore, and grow with purpose.
          </p>
          <div className="flex items-center xl:space-x-3  justify-center whitespace-nowrap lg:items-center">
            <button className="bg-[#F9BB1E] reuseable-button w-fit px-5 ">
              <span className="flex items-center group justify-between text-black ">
                Talk to US <RightarrowSvg />
              </span>
            </button>
            <button className="bg-[#1A94D2] ml-1 reuseable-button text-white w-fit ">
              <span className="flex  items-center  group justify-center text-white">
                Speak with an advisor
              </span>
            </button>
          </div>
        </div>
        <div className="relative w-[412px] xl:w-full flex items-center flex-col  justify-center ">
          <Image
            alt=""
            src="/images/layer-git.png"
            width={603.89}
            height={462.64}
            className="w-full object-cover relative top-[50px] md:hidden  "
          />
          <Image
            alt=""
            src="/images/contact-git.png"
            width={324}
            height={549}
            className="absolute top-[115px] md:hidden"
          />
          <Image
            alt=""
            src="/images/large-layer.png"
            width={603.89}
            height={462.64}
            className="absolute top-[-322px] left-[40px] hidden md:flex "
          />
          <Image
            alt=""
            src="/images/large-contact.png"
            width={454}
            height={769}
            className="absolute top-[-269px] object-cover hidden md:flex "
          />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
