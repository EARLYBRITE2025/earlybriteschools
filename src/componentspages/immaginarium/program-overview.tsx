import React from 'react'

const ProgramOverview = () => {
  return (
    <section className='w-full bg-[#FFE5A2] py-16 flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className='max-w-[800px] mx-auto text-center'>
        <h2 className='text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-6'>
          Program Overview
        </h2>
        <p className='text-[#101010E5] text-[16px] xl:text-[18px] mb-4'>
          Immaginarium is one of Earlybrite&apos;s flagship programs. It is an immersive, hands-on experience that turns play into learning. Each session invites children to create, explore, and collaborate while developing confidence, communication, and problem-solving skills.
        </p>
        <p className='text-[#101010E5] text-[16px] xl:text-[18px] mb-8'>
          We blend freedom and structure to help children grow not just academically, but emotionally and socially.
        </p>
        <button className='bg-white text-black px-6 py-3 rounded-full border border-black hover:bg-gray-100 transition-all duration-300'>
          See program structure
        </button>
        </div>
      </div>
    </section>
  )
}

export default ProgramOverview
