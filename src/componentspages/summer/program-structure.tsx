import React from "react";
import Image from "next/image";

const ProgramStructure = () => {
  return (
    <section className="w-full bg-[#FFE5A2] py-16 flex justify-center">
      <div className="w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-8 text-center">
            Program Structure
          </h2>

          {/* Top row - Age and Mode */}
          <div className="flex flex-col xl:flex-row gap-4 mb-4">
            <div className="flex-1 bg-white rounded-lg p-4 flex items-center gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Image
                  src="/images/highlight.png"
                  alt="highlight icon"
                  width={12}
                  height={12}
                  className="w-20"
                />
              </div>
              <div>
                <span className="text-[#1A94D2] font-semibold text-[14px]">
                  For ages:
                </span>
                <span className="text-black text-[14px] ml-1">
                  12 years and above
                </span>
              </div>
            </div>

            <div className="flex-1 bg-white rounded-lg p-4 flex items-center gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Image
                  src="/images/highlight.png"
                  alt="highlight icon"
                  width={12}
                  height={12}
                  className="w-20"
                />
              </div>
              <div>
                <span className="text-[#1A94D2] font-semibold text-[14px]">
                  Mode:
                </span>
                <span className="text-black text-[14px] ml-1">
                  On-site learning and mentorship sessions
                </span>
              </div>
            </div>
          </div>

          {/* Weekly Schedule */}
          <div className="bg-[#F9BB1E] rounded-lg p-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Image
                  src="/images/highlight.png"
                  alt="highlight icon"
                  width={12}
                  height={12}
                  className="w-20"
                />
              </div>
              <div>
                <p className="text-black font-semibold text-[16px] mb-3">
                  Weekly Schedule:
                </p>
                <ul className="text-black text-[14px] space-y-1">
                  <li>• Monday, Wednesday, Friday: On-site learning</li>
                  <li>
                    • Tuesday and Thursday: Online mentorship and guided
                    activities
                  </li>
                  <li>• One Day Mega Festival to close the program</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramStructure;
