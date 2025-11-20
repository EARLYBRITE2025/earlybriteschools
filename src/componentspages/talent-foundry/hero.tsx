import React from 'react'
import Image from 'next/image'
import { WhiteRightarrowSvg } from '../../../public/svg/constants'

const TalentFoundryHero = () => {
  return (
    <section className='w-full bg-white py-12 flex justify-center' id='home'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className=' flex flex-col xl:flex-row items-center justify-between gap-8'>
        {/* Left content */}
        <div className='xl:w-[40%] w-full'>
          <h1 className='text-[32px] xl:text-[48px] font-[family-name:var(--font-baloo2)] font-bold text-black leading-tight mb-6'>
            The skills that shape tomorrow start here.
          </h1>
          <p className='text-[#101010E5] text-[16px] mb-6'>
            Talent Foundry brings hands-on digital, creative, and innovation programs into schools. We help students build the skills, confidence, and opportunities they need to thrive in a digital world.
          </p>
          <button className='bg-[#1A94D2] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#1580b8] transition-all duration-300'>
            Partner with us <WhiteRightarrowSvg />
          </button>
        </div>

        {/* Right images grid */}
        <div className='xl:w-[55%] w-full'>
          <div className='grid grid-cols-3 gap-3'>
            {/* Row 1 */}
            <div className='col-span-2 row-span-2 relative h-[280px]'>
              <Image
                src="/images/talent-hero-1.png"
                fill
                alt='Student learning'
                className='rounded-xl object-cover'
              />
            </div>
            <div className='relative h-[135px]'>
              <Image
                src="/images/talent-hero-2.png"
                fill
                alt='Student portrait'
                className='rounded-xl object-cover'
              />
            </div>
            <div className='relative h-[135px]'>
              <Image
                src="/images/talent-hero-3.png"
                fill
                alt='Student in classroom'
                className='rounded-xl object-cover'
              />
            </div>

            {/* Row 2 */}
            <div className='relative h-[150px]'>
              <Image
                src="/images/talent-hero-4.png"
                fill
                alt='Student smiling'
                className='rounded-xl object-cover'
              />
            </div>
            <div className='col-span-2 relative h-[150px]'>
              <Image
                src="/images/talent-hero-5.png"
                fill
                alt='Students collaborating'
                className='rounded-xl object-cover'
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default TalentFoundryHero
