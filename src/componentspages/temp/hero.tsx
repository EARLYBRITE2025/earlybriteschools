import React from 'react'
import Image from 'next/image'

const TempHero = () => {
  return (
    <section className='w-full bg-white py-12 flex justify-center' id='home'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className='flex flex-col xl:flex-row items-center justify-between gap-10'>
        {/* Left - Text Content */}
        <div className='flex-1 max-w-[500px]'>
          <h1 className='text-[36px] xl:text-[48px] font-[family-name:var(--font-baloo2)] font-bold text-black leading-tight'>
            Unlock Your Global Potential
          </h1>
          <p className='text-[16px] xl:text-[18px] text-[#666666] mt-4 mb-6'>
            Discover your talent, build future-ready skills, and connect with global mentors through{' '}
            <span className='font-bold text-black'>The Elite Mentorship Program (TEMP)</span>.
          </p>
          <div className='flex items-center gap-3 flex-wrap'>
            <button className='bg-[#F9BB1E] reuseable-button text-black'>
              Join TEMP
            </button>
            <button className='bg-[#1A94D2] reuseable-button text-white'>
              <span className='flex gap-2 items-center justify-center'>
                Speak With Advisor
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Right - Hero Image with Decorative Elements */}
        <div className='flex-1 relative flex items-center justify-center'>
          {/* Decorative art 1 - top-left */}
          <Image
            src="/images/hero-art-1.png"
            width={100}
            height={100}
            alt='decoration'
            className='absolute top-[-40px] left-[0px] xl:left-[-80px] z-0'
          />

          {/* Decorative art 2 - bottom-left */}
          <Image
            src="/images/hero-art-2.png"
            width={80}
            height={80}
            alt='decoration'
            className='absolute bottom-[40px] left-[-40px] xl:left-[-80px] z-0'
          />

          {/* Main hero image container with badges */}
          <div className='relative'>
            {/* Tech badge - top left */}
            <div className='absolute top-[20px] left-[-30px] xl:left-[-50px] z-10 bg-[#202D60] text-white px-4 py-2 rounded-full text-[14px] font-semibold shadow-lg'>
              Tech
            </div>

            {/* Leadership badge - top right */}
            <div className='absolute top-[40px] right-[-20px] xl:right-[-40px] z-10 bg-[#D97706] text-white px-4 py-2 rounded-full text-[14px] font-semibold shadow-lg'>
              Leadership
            </div>

            {/* Innovation badge - middle right */}
            <div className='absolute top-[180px] right-[-30px] xl:right-[-60px] z-10 bg-[#F9BB1E] text-black px-4 py-2 rounded-full text-[14px] font-semibold shadow-lg'>
              Innovation
            </div>

            {/* Football badge - bottom left */}
            <div className='absolute bottom-[80px] left-[-40px] xl:left-[-60px] z-10 bg-[#059669] text-white px-4 py-2 rounded-full text-[14px] font-semibold shadow-lg'>
              Football
            </div>

            {/* Creativity badge - bottom right */}
            <div className='absolute bottom-[20px] right-[-20px] xl:right-[-50px] z-10 bg-[#1A94D2] text-white px-4 py-2 rounded-full text-[14px] font-semibold shadow-lg'>
              Creativity
            </div>

            {/* Main hero image */}
            <div className='relative rounded-[32px] overflow-hidden border-8 border-white w-[320px] h-[380px] xl:w-[400px] xl:h-[480px]'>
              <Image
                src="/images/temp-hero.png"
                fill
                alt='TEMP students collaborating'
                className='object-cover'
              />
            </div>
          </div>

          {/* Decorative art 3 - bottom-right */}
          <Image
            src="/images/hero-art-3.png"
            width={80}
            height={80}
            alt='decoration'
            className='absolute bottom-[-40px] right-[-40px] xl:right-[-60px] z-0'
          />
        </div>
        </div>
      </div>
    </section>
  )
}

export default TempHero
