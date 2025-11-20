import React from "react";
import Image from "next/image";

const CoreLearningPillars = () => {
  const pillars = [
    {
      title: "Curiosity and Discovery",
      description:
        "Encouraging inquiry and experimentation through playful exploration.",
    },
    {
      title: "Creativity and Expression",
      description:
        "Fostering imagination through art, storytelling, and design.",
    },
    {
      title: "Collaboration and Character",
      description:
        "Building empathy, teamwork, and leadership in group activities.",
    },
    {
      title: "Identity and Heritage",
      description:
        "Helping children connect with culture, heritage, and self-awareness.",
    },
  ];

  return (
    <section className="w-full bg-[#BAE6FC] py-16 flex justify-center">
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className="">
        {/* Header */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-8">
          <h2 className="text-[32px] xl:text-[40px] font-(family-name:--font-baloo2) font-bold text-black">
            Core Learning Pillars
          </h2>
          <button className="bg-[#F9BB1E] text-black px-6 py-3 rounded-full hover:bg-[#e5aa1a] transition-all duration-300 mt-4 xl:mt-0">
            Enroll your child
          </button>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-[#E8F4E8] rounded-xl p-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/images/checkmark-circle-01.svg"
                  width={20}
                  height={20}
                  alt="check"
                />
              </div>
              <h3 className="text-[18px] font-bold text-black mb-2">
                {pillar.title}
              </h3>
              <p className="text-[14px] text-[#101010E5]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default CoreLearningPillars;
