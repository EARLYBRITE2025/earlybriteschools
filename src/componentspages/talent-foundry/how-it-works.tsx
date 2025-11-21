import React from "react";
import Image from "next/image";
import { WhiteRightarrowSvg } from "../../../public/svg/constants";

const HowItWorks = () => {
  return (
    <>
      <section className="w-full bg-white py-16 flex justify-center">
        <div className="w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0">
          {/* How Talent Foundry Works */}
          <div className="flex flex-col xl:flex-row gap-8 mb-16 items-center">
            {/* Left - Text */}
            <div className="xl:w-1/2">
              <h2 className="text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-4">
                How Talent Foundry Works
              </h2>
              <p className="text-[#101010E5] text-[16px] mb-6">
                Simple to adopt. Flexible to run.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/check-green.svg"
                    width={20}
                    height={20}
                    alt="check"
                    className="mt-1"
                  />
                  <p className="text-black text-[14px]">
                    8-week learning cycles
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/check-green.svg"
                    width={20}
                    height={20}
                    alt="check"
                    className="mt-1"
                  />
                  <p className="text-black text-[14px]">1–2 sessions weekly</p>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/check-green.svg"
                    width={20}
                    height={20}
                    alt="check"
                    className="mt-1"
                  />
                  <p className="text-black text-[14px]">
                    Delivered as electives, clubs, or after-school programs
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/check-green.svg"
                    width={20}
                    height={20}
                    alt="check"
                    className="mt-1"
                  />
                  <p className="text-black text-[14px]">
                    Led by certified mentors in collaboration with school staff
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/check-green.svg"
                    width={20}
                    height={20}
                    alt="check"
                    className="mt-1"
                  />
                  <p className="text-black text-[14px]">
                    Project showcase at the end of every cycle
                  </p>
                </div>
              </div>

              <p className="text-black text-[14px] mb-6">
                Outcome: A consistent pipeline of engaged, skilled learners.
              </p>

              <button className="bg-[#1A94D2] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#1580b8] transition-all duration-300">
                Partner with us <WhiteRightarrowSvg />
              </button>
            </div>

            {/* Right - Image */}
            <div className="xl:w-1/2 relative w-full min-h-[400px]">
              <Image
                src="/images/talent-how-it-work.png"
                fill
                alt="How Talent Foundry Works"
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* What Students Gain */}
          <div className="flex flex-col-reverse xl:flex-row gap-8">
            {/* Left - Image */}
            <div className="xl:w-1/2 relative min-h-[400px]">
              <Image
                src="/images/talent-what-students.png"
                fill
                alt="What Students Gain"
                className="object-cover rounded-lg"
              />
            </div>

            {/* Right - Text */}
            <div className="pr-10 lg:w-1/2 ">
              <h2 className="text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-4">
                What Students Gain
              </h2>
              <p className="text-[#101010E5] text-[16px] mb-6">
                Skills that open doors.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/check-green.svg"
                    width={20}
                    height={20}
                    alt="check"
                    className="mt-1"
                  />
                  <p className="text-black text-[14px]">
                    Digital creation and problem-solving abilities
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/check-green.svg"
                    width={20}
                    height={20}
                    alt="check"
                    className="mt-1"
                  />
                  <p className="text-black text-[14px]">
                    Confidence to express and collaborate
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/check-green.svg"
                    width={20}
                    height={20}
                    alt="check"
                    className="mt-1"
                  />
                  <p className="text-black text-[14px]">
                    Real exposure to industries and role models
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/check-green.svg"
                    width={20}
                    height={20}
                    alt="check"
                    className="mt-1"
                  />
                  <p className="text-black text-[14px]">
                    Recognition through certificates and portfolios
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/check-green.svg"
                    width={20}
                    height={20}
                    alt="check"
                    className="mt-1"
                  />
                  <p className="text-black text-[14px]">
                    Early clarity about strengths and career paths
                  </p>
                </div>
              </div>

              <button className="bg-[#1A94D2] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#1580b8] transition-all duration-300">
                Partner with us <WhiteRightarrowSvg />
              </button>
            </div>
          </div>

          {/* What Schools Gain - Full width section */}
        </div>
      </section>
      <section className="w-full bg-black py-16 flex justify-center">
        <div className="w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0">
          <div className="flex flex-col xl:flex-row gap-8">
            {/* Left - Image */}
            <div className="xl:w-1/2 relative min-h-[400px]">
              <Image
                src="/images/talent-what-schol.png"
                fill
                alt="What Schools Gain"
                className="object-cover rounded-lg"
              />
            </div>

            {/* Right - Text */}
            <div className="xl:w-1/2">
              <h2 className="text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-white mb-4">
                What Schools Gain
              </h2>
              <p className="text-white/80 text-[16px] mb-6">
                A partner that strengthens your mission.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/check-green.svg"
                    width={20}
                    height={20}
                    alt="check"
                    className="mt-1"
                  />
                  <p className="text-white text-[14px]">
                    More engaged students
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/check-green.svg"
                    width={20}
                    height={20}
                    alt="check"
                    className="mt-1"
                  />
                  <p className="text-white text-[14px]">
                    Modern skill development without extra burden on teachers
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/check-green.svg"
                    width={20}
                    height={20}
                    alt="check"
                    className="mt-1"
                  />
                  <p className="text-white text-[14px]">
                    Opportunities to participate in competitions and tech tour
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/check-green.svg"
                    width={20}
                    height={20}
                    alt="check"
                    className="mt-1"
                  />
                  <p className="text-white text-[14px]">
                    Positive reputation with parents and the community
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Image
                    src="/images/check-green.svg"
                    width={20}
                    height={20}
                    alt="check"
                    className="mt-1"
                  />
                  <p className="text-white text-[14px]">
                    Structured support for future-readiness goals
                  </p>
                </div>
              </div>

              <button className="bg-[#1A94D2] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#1580b8] transition-all duration-300">
                Partner with us <WhiteRightarrowSvg />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our School Partnership Model */}
      <section className="w-full bg-white py-16 flex justify-center">
        <div className="w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0">
          <div className="bg-black rounded-[24px] relative overflow-visible">
            <div className="flex flex-col-reverse xl:flex-row xl:items-end">
              {/* Left - Text */}
              <div className="xl:w-[50%] flex flex-col-reverse p-8 xl:p-12">
                <h2 className="text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-white mb-2">
                  Our School
                  <br />
                  <span className="text-[#1A94D2]">Partnership</span> Model
                </h2>
                <p className="text-white/80 text-[16px] mb-6">
                  We work closely with your school to:
                </p>

                <button className="bg-[#1A94D2] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#1580b8] transition-all duration-300 mb-6">
                  Partner with us <WhiteRightarrowSvg />
                </button>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Image
                      src="/images/check-green.svg"
                      width={20}
                      height={20}
                      alt="check"
                      className="mt-1"
                    />
                    <p className="text-white text-[14px]">
                      Co-design the right learning mix
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Image
                      src="/images/check-green.svg"
                      width={20}
                      height={20}
                      alt="check"
                      className="mt-1"
                    />
                    <p className="text-white text-[14px]">
                      Provide approved mentors and facilitators
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Image
                      src="/images/check-green.svg"
                      width={20}
                      height={20}
                      alt="check"
                      className="mt-1"
                    />
                    <p className="text-white text-[14px]">
                      Offer training for your staff if needed
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Image
                      src="/images/check-green.svg"
                      width={20}
                      height={20}
                      alt="check"
                      className="mt-1"
                    />
                    <p className="text-white text-[14px]">
                      Integrate seamlessly into the school calendar
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Image that overflows out the top on desktop, bottom on mobile */}
              <div className="xl:w-[50%] relative">
                <div className="relative h-[400px] xl:h-[550px] xl:-mt-[100px]">
                  <Image
                    src="/images/talent-partnership.png"
                    fill
                    alt="School Partnership"
                    className="object-cover object-top xl:object-bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
