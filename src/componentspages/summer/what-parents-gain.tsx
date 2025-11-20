import React from 'react'
import Image from 'next/image'
import { WhiteRightarrowSvg } from '../../../public/svg/constants'

const WhatParentsGain = () => {
  const benefits = [
    "A productive and meaningful holiday plan",
    "Support for children's personal and academic growth",
    "Visible improvement in confidence and skill",
    "Safer and better alternative to idle holiday time"
  ]

  return (
    <section className='w-full py-16 flex justify-center' style={{backgroundColor: 'rgba(0, 145, 71, 0.5)'}}>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className='flex flex-col xl:flex-row gap-8 items-center'>
        {/* Left - Image */}
        <div className='xl:w-1/2 relative'>
          <Image
            src="/images/summer-boy.png"
            width={500}
            height={600}
            alt='Student'
            className='object-cover'
          />
        </div>

        {/* Right - Text */}
        <div className='xl:w-1/2'>
          <h2 className='text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-4'>
            What Parents Gain
          </h2>
          <p className='text-[#101010E5] text-[16px] mb-6'>
            A meaningful program that supports personal and academic development.
          </p>

          {/* Benefits list */}
          <div className='space-y-3 mb-6'>
            {benefits.map((benefit, index) => (
              <div key={index} className='flex items-start gap-3'>
                <Image src="/images/check-green.svg" width={20} height={20} alt="check" className='mt-1' />
                <p className='text-black text-[14px]'>{benefit}</p>
              </div>
            ))}
          </div>

          <button className='bg-[#1A94D2] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#1580b8] transition-all duration-300'>
            Join Summer School <WhiteRightarrowSvg />
          </button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default WhatParentsGain
