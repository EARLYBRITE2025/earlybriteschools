import React from 'react'
import { WhiteRightarrowSvg } from '../../../public/svg/constants'
import Image from 'next/image'
import { GapFEat } from '../layouts/constants/constants'

const WorldClass = () => {
  return (
    <section className='w-full py-16 flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        {/* Mobile */}
      <div className='flex flex-col items-center gap-10 md:hidden'>
        <h1 className='text-[30px] font-[family-name:var(--font-baloo2)] font-bold text-center'>
          A Program Built on World-Class Learning Standards
        </h1>
        <p className='text-[#666666]'>
          Our curriculum draws inspiration from some of the world&apos;s most respected education models, ensuring that every learner is prepared for life, not just school.
        </p>
        <button className='bg-[#1A94D2] reuseable-button text-white'>
          <span className='flex gap-4 items-center justify-center text-white'>
            Talk to Us <WhiteRightarrowSvg />
          </span>
        </button>
        <Image
          src="/gap-page/Image_fx - 2025-10-22T140529.383 3.png"
          height={588}
          width={354}
          alt='World Class Learning'
          className='rounded-2xl w-full'
        />
        <div className='flex flex-col gap-6 w-full'>
          {GapFEat.map((activity, index) => (
            <div
              key={index}
              style={{ background: activity.color }}
              className='py-5 px-10 flex flex-col items-center justify-center rounded-[24px] text-center'
            >
              <h3 className="font-bold text-[#101010] text-[24px]">{activity.title}</h3>
              <p className="text-black/70 leading-relaxed mt-2">{activity.paragraph}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className='hidden md:flex flex-col items-center gap-10'>
        <div className='flex items-center justify-between w-full gap-10'>
          <h1 className='text-[48px] font-[family-name:var(--font-baloo2)] font-bold max-w-[469px]'>
            A Program Built on World-Class Learning Standards
          </h1>
          <div className='max-w-[418px] flex flex-col items-start gap-6'>
            <p className='text-[#666666] text-[18px]'>
              Our curriculum draws inspiration from some of the world&apos;s most respected education models, ensuring that every learner is prepared for life, not just school.
            </p>
            <button className='bg-[#1A94D2] reuseable-button text-white'>
              <span className='flex gap-4 items-center justify-center text-white'>
                Talk to Us <WhiteRightarrowSvg />
              </span>
            </button>
          </div>
        </div>

        <div className='relative w-full'>
          <Image
            src="/gap-page/Image_fx - 2025-10-22T140529.383 3(1).png"
            height={588}
            width={1200}
            alt='World Class Learning'
            className='rounded-2xl w-full'
          />

          <div className='absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[80%] grid grid-cols-2 gap-4 bg-white rounded-[24px] p-10'>
            {GapFEat.map((activity, index) => (
              <div
                key={index}
                style={{ background: activity.color }}
                className='py-6 px-8 flex flex-col rounded-[16px]'
              >
                <h3 className="font-bold text-[#101010] text-[18px] mb-6">{activity.title}</h3>
                <p className="text-black/70 text-[14px] leading-relaxed">{activity.paragraph}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='h-[150px]'></div>
        </div>
      </div>
    </section>
  )
}

export default WorldClass
