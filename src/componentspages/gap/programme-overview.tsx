import React from 'react'
import Image from 'next/image'

const ProgrammeOverview = () => {
  return (
    <section className='w-full py-16 bg-[#F2F2F2] flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className='text-center mb-10'>
        <h1 className='text-black text-[30px] xl:text-[48px] font-[family-name:var(--font-baloo2)] font-bold'>
          Program Overview
        </h1>
      </div>

      <div className='flex flex-col xl:flex-row items-stretch justify-center gap-4 xl:gap-6 mb-10'>
        <div className='bg-[#1A94D2] text-white rounded-xl flex items-center justify-center p-6 flex-1'>
          <p>The Earlybrite Gap Year Program is a 6-12 month bridge designed for secondary school and high school graduates preparing for university or professional life.</p>
        </div>
        <div className='bg-[#1A94D2] text-white rounded-xl flex items-center justify-center p-6 flex-1'>
          <p>Instead of waiting passively, participants spend this period gaining practical experience, building essential life skills, and discovering their direction under guided mentorship.</p>
        </div>
        <div className='bg-[#1A94D2] text-white rounded-xl flex items-center justify-center p-6 flex-1'>
          <p>Each learner joins a supportive community that values curiosity, discipline, and purpose, helping them move into adulthood with confidence.</p>
        </div>
      </div>

      <div className='flex justify-center'>
        <Image
          src="/gap-page/gap-programme.png"
          width={322}
          height={440}
          alt='Gap Programme'
          className='rounded-xl md:hidden'
        />
        <Image
          src="/gap-page/gaplarge.png"
          width={1200}
          height={648}
          alt='Gap Programme'
          className='rounded-t-xl hidden md:block w-full'
        />
        </div>
      </div>
    </section>
  )
}

export default ProgrammeOverview
