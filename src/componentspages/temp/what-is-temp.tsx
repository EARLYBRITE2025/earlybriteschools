import React from 'react'
import Image from 'next/image'

const WhatIsTemp = () => {
  return (
    <section className='w-full py-16 bg-[#F2F2F2] flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className='text-center mb-10'>
        <h2 className='text-[36px] xl:text-[48px] font-[family-name:var(--font-baloo2)] font-bold text-black'>
          What is TEMP?
        </h2>
      </div>

      <div className='flex flex-col xl:flex-row gap-6 max-w-[1200px] mx-auto'>
        {/* Left Column - Cards 1 and 2 stacked */}
        <div className='flex flex-col gap-6 flex-1'>
          {/* Card 1 - Orange */}
          <div className='rounded-[24px] overflow-hidden' style={{ backgroundColor: '#ED6E23EE' }}>
            <div className='flex flex-col md:flex-row items-center p-6 xl:p-8'>
              {/* Text - Left */}
              <div className='flex-1 text-white md:pr-6'>
                <p className='text-[16px] xl:text-[18px] leading-relaxed'>
                  The Elite Mentorship Program (TEMP) is a transformative youth development initiative helping young Africans discover their potential, develop global skills, and access real-world opportunities
                </p>
              </div>
              {/* Image - Right */}
              <div className='flex-shrink-0 mt-4 md:mt-0'>
                <div className='relative w-[280px] h-[180px] rounded-[16px] overflow-hidden'>
                  <Image
                    src="/images/temp-why-1.png"
                    fill
                    alt='TEMP participants'
                    className='object-cover'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Yellow */}
          <div className='bg-[#F9BB1E] rounded-[24px] overflow-hidden'>
            <div className='flex flex-col md:flex-row-reverse items-center p-6 xl:p-8'>
              {/* Text - Right (appears left on mobile due to flex-col) */}
              <div className='flex-1 text-black md:pl-6'>
                <p className='text-[16px] xl:text-[18px] leading-relaxed'>
                  TEMP&apos;s model connects education with relevance, exposing learners to international frameworks, mentors, and industries that shape the global future.
                </p>
                <button className='bg-[#1A94D2] text-white px-6 py-3 rounded-full mt-6 flex items-center gap-2 font-semibold'>
                  Get Started
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              {/* Image - Left */}
              <div className='flex-shrink-0 mt-4 md:mt-0'>
                <div className='relative w-[280px] h-[180px] rounded-[16px] overflow-hidden'>
                  <Image
                    src="/images/temp-why-1.png"
                    fill
                    alt='TEMP learning environment'
                    className='object-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Card 3 (Tall) */}
        <div className='flex-1 bg-[#059669] rounded-[24px] overflow-hidden flex flex-col'>
          {/* Image - Top */}
          <div className='relative w-full h-[250px] xl:h-[300px]'>
            <Image
              src="/images/temp-why-2.png"
              fill
              alt='TEMP mentorship'
              className='object-cover'
            />
          </div>
          {/* Text - Bottom */}
          <div className='p-6 xl:p-8 text-white flex-1 flex items-center'>
            <p className='text-[16px] xl:text-[18px] leading-relaxed'>
              TEMP blends mentorship, creativity, and practical learning to prepare participants for leadership in a changing world. Each learner is guided through a structured process that builds confidence, clarity, and competence, one experience at a time
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsTemp
