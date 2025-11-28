import React from "react";
import Image from "next/image";

const WhyTalentFoundry = () => {
  const offerings = [
    "Hands-on, project-based learning",
    "Mentors who work in tech, media, and innovation",
    "Flexible integration into school schedules",
    "Real-world exposure through tours, events, and showcases",
  ];

  return (
    <section className="w-full bg-[#0F151E] relative overflow-hidden lg:overflow-visible h-[1064px] lg:h-fit flex justify-center">
      <div className="w-full 3xl:max-w-[1400px] px-0 3xl:px-0">
        <div className="flex flex-col-reverse xl:flex-row xl:items-end">
          {/* Left image section */}
          <div className="xl:w-[40%] relative">
            {/* Image that overflows into hero on large screens */}
            <div className="relative h-[380px] justify-center flex  items-center mt-[86px] flex-col lg:h-[600px] lg:-mt-[200px]">
              <Image
                src="/home-page/Image_fx - 2025-10-17T063208.426 1.png"
                fill
                alt="Student confident"
                className=" object-cover hidden lg:block object-bottom"
              />
                <Image
    src="/images/talent-why.png"
    alt="Student"
    fill
    className="absolute bottom-0 left-0 right-0 object-contain"
  />
 

              {/* Overlay text card */}
             <div
              className="flex items-center justify-center lg:h-[111px] lg:w-[310px] lg:top-[340px] 
               absolute top-[-100px] lg:left-14 w-[260px] h-[103px] 
                 bg-[#FFE5A27A] backdrop-blur-md rounded-lg"
                >
               <p className="text-white text-[14px] w-[211px] font-medium">
                   Talent Foundry turns curiosity into skill, and skill into confidence.
                  </p>
               </div>

            </div>
          </div>

          {/* Right content section */}
          <div className="xl:w-[60%] py-16 px-7 xl:px-28">
            <h2 className="text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-white mb-6">
              Why Talent Foundry
            </h2>
            <p className="text-white text-[16px] mb-2">
              Learning that prepares students for real opportunities.
            </p>
            <p className="text-white text-[16px] mb-6">
              Schools are expected to build future-ready learners. We make that
              easier by offering:
            </p>

            {/* Offering cards */}
            <div className="space-y-3">
              {offerings.map((offering, index) => (
                <div key={index} className="bg-white rounded-lg p-[24px] mx-h-[86px]">
                  <p className="text-[#666666] w-[306px] text-[14px]">{offering}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTalentFoundry;
