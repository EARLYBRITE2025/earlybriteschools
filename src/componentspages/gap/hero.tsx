import React from 'react'
import Image from 'next/image'
import { WhiteRightarrowSvg } from '../../../public/svg/constants'

const GapHero = () => {
  return (
    <section className='w-full bg-white py-12 flex justify-center' id='home'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className='bg-[#F9BB1E] rounded-[24px] flex flex-col items-center justify-center py-10'>
        <div className='flex flex-col items-center justify-center px-7 xl:px-16'>
          <h1 className='text-[36px] xl:text-[60px] text-center font-[family-name:var(--font-baloo2)] font-bold text-black max-w-[879px]'>
            Turn waiting time into a season of purpose and growth
          </h1>
          <p className='text-center text-[#101010E5] text-[18px] max-w-[879px] mt-5'>
            The Earlybrite Gap Year Program helps young adults transform their transition year into a life-changing experience. Through internships, mentorship, and global learning, your
            child gains clarity, confidence, and the skills to thrive in university and beyond.
          </p>
          <div className='flex items-center gap-3 mt-5'>
            <button className='bg-[#202D60] reuseable-button text-white'>Apply for Git</button>
            <button className='bg-[#1A94D2] reuseable-button text-white'>
              <span className='flex gap-4 items-center justify-center text-white'>Talk to Us <WhiteRightarrowSvg /></span>
            </button>
          </div>
        </div>

        {/* Mobile image */}
        <div className='relative flex flex-col items-center justify-center mt-8 md:hidden'>
          <Image
            src="/gap-page/gap-spark.svg"
            width={230}
            height={228}
            alt='hero spark'
            className='absolute top-[-50px]'
          />
          <Image
            src="/images/gap-hero-pic.png"
            width={397}
            height={397}
            alt='hero pic'
            className='rounded-xl relative z-10'
          />
        </div>

        {/* Desktop image */}
        <div className='hidden md:flex items-center justify-center mt-8'>
          <Image
            src="/gap-page/gap-hero-large.png"
            width={775}
            height={500}
            alt='hero pic'
            className='relative'
          />
        </div>
      </div>
      </div>
    </section>
  )
}

export default GapHero
