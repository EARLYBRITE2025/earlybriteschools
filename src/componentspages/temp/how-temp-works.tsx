import React from 'react'

const HowTempWorks = () => {
  return (
    <section className='w-full py-16 flex justify-center' style={{ background: 'linear-gradient(180deg, #ED6E23 0%, #D97706 100%)' }}>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className='max-w-[1200px] mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-[36px] xl:text-[48px] font-[family-name:var(--font-baloo2)] font-bold text-white mb-4'>
            How TEMP Works
          </h2>
          <p className='text-[16px] xl:text-[18px] text-white max-w-[900px] mx-auto'>
            Every learner&apos;s journey in TEMP follows a simple, structured process that combines mentorship, learning, and real-world application. Each stage is designed to help participants grow with clarity, confidence, and purpose.
          </p>
        </div>

        {/* Flow diagram - Desktop */}
        <div className='hidden xl:block relative h-[450px]'>
          {/* Step 1 - Top Left */}
          <div className='absolute top-0 left-0 bg-[#F9BB1E] rounded-[20px] p-6 w-[250px] shadow-lg'>
            <h3 className='text-[20px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-3'>
              Orientation & Consultation
            </h3>
            <p className='text-[14px] text-black'>
              We begin with a personal onboarding session to identify your child&apos;s goals, strengths, and interests.
            </p>
          </div>

          {/* Curved arrow 1 to 2 - C shape going down */}
          <svg className='absolute top-[60px] left-[240px]' width='140' height='230' viewBox='0 0 140 230'>
            <path
              d='M 10 10 C 10 120, 10 120, 130 220'
              fill='none'
              stroke='#F9BB1E'
              strokeWidth='3'
              strokeDasharray='8,8'
            />
            <polygon points='130,220 122,217 125,225' fill='#F9BB1E' />
          </svg>

          {/* Step 2 - Bottom */}
          <div className='absolute bottom-0 left-[280px] bg-[#F9BB1E] rounded-[20px] p-6 w-[250px] shadow-lg'>
            <h3 className='text-[20px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-3'>
              Learn & Train
            </h3>
            <p className='text-[14px] text-black'>
              Learners participate in guided classes, mentorship sessions, and workshops to build creative and leadership skills.
            </p>
          </div>

          {/* Curved arrow 2 to 3 - C shape going up */}
          <svg className='absolute top-[60px] left-[520px]' width='140' height='230' viewBox='0 0 140 230'>
            <path
              d='M 10 220 C 130 120, 130 120, 130 10'
              fill='none'
              stroke='#F9BB1E'
              strokeWidth='3'
              strokeDasharray='8,8'
            />
            <polygon points='130,10 125,5 122,13' fill='#F9BB1E' />
          </svg>

          {/* Step 3 - Top */}
          <div className='absolute top-0 left-[560px] bg-[#F9BB1E] rounded-[20px] p-6 w-[250px] shadow-lg'>
            <h3 className='text-[20px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-3'>
              Apply & Showcase
            </h3>
            <p className='text-[14px] text-black'>
              They apply their learning through real projects, performances, and digital portfolios.
            </p>
          </div>

          {/* Curved arrow 3 to 4 - C shape going down */}
          <svg className='absolute top-[60px] left-[800px]' width='140' height='230' viewBox='0 0 140 230'>
            <path
              d='M 10 10 C 10 120, 10 120, 130 220'
              fill='none'
              stroke='#F9BB1E'
              strokeWidth='3'
              strokeDasharray='8,8'
            />
            <polygon points='130,220 122,217 125,225' fill='#F9BB1E' />
          </svg>

          {/* Step 4 - Bottom Right */}
          <div className='absolute bottom-0 right-0 bg-[#F9BB1E] rounded-[20px] p-6 w-[250px] shadow-lg'>
            <h3 className='text-[20px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-3'>
              Access Global Networks
            </h3>
            <p className='text-[14px] text-black'>
              Graduates join the TEMP Alumni Community for continuous mentorship, internships, and global exposure.
            </p>
          </div>
        </div>

        {/* Mobile layout - simple vertical */}
        <div className='xl:hidden flex flex-col gap-6'>
          <div className='bg-[#F9BB1E] rounded-[20px] p-6 shadow-lg'>
            <h3 className='text-[22px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-3'>
              Orientation & Consultation
            </h3>
            <p className='text-[15px] text-black'>
              We begin with a personal onboarding session to identify your child&apos;s goals, strengths, and interests.
            </p>
          </div>

          <div className='bg-[#F9BB1E] rounded-[20px] p-6 shadow-lg'>
            <h3 className='text-[22px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-3'>
              Learn & Train
            </h3>
            <p className='text-[15px] text-black'>
              Learners participate in guided classes, mentorship sessions, and workshops to build creative and leadership skills.
            </p>
          </div>

          <div className='bg-[#F9BB1E] rounded-[20px] p-6 shadow-lg'>
            <h3 className='text-[22px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-3'>
              Apply & Showcase
            </h3>
            <p className='text-[15px] text-black'>
              They apply their learning through real projects, performances, and digital portfolios.
            </p>
          </div>

          <div className='bg-[#F9BB1E] rounded-[20px] p-6 shadow-lg'>
            <h3 className='text-[22px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-3'>
              Access Global Networks
            </h3>
            <p className='text-[15px] text-black'>
              Graduates join the TEMP Alumni Community for continuous mentorship, internships, and global exposure.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default HowTempWorks
