import React from 'react'
import Image from 'next/image'
import { RightarrowSvg, WhiteRightarrowSvg } from '../../../public/svg/constants'

const Conclusion = () => {
  return (
    <section className='w-full bg-[#0F151E] flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        {/* Mobile */}
      <div className='flex flex-col items-center gap-10 md:hidden'>
        <div className='text-white text-center'>
          <h1 className='text-[36px] font-bold font-[family-name:var(--font-baloo2)] mb-4'>
            Give your child an edge before university
          </h1>
          <p className='text-[18px] mb-4'>
            Many students enter higher education unsure of their purpose or direction. The Earlybrite Gap Year Program helps bridge that gap by equipping them with maturity, exposure, and clarity.
          </p>
          <p>
            Learners who complete the program often step into university life more confident, independent, and ready to lead.
          </p>
        </div>
        <Image
          src="/gap-page/Image_fx - 2025-11-10T055310.431 1.png"
          alt='Conclusion'
          width={524}
          height={524}
          className='w-full'
        />
      </div>

      {/* Desktop */}
      <div className='hidden md:flex items-end justify-between gap-10'>
        <div className='relative'>
          <Image
            src="/gap-page/Layer 1ds 1(4).png"
            width={400}
            height={300}
            alt='Background'
            className='absolute top-0 left-0 z-0'
          />
          <Image
            src="/gap-page/Image_fx - 2025-11-10T055310.431 1(1).png"
            alt='Conclusion'
            width={550}
            height={550}
            className='relative z-10 mt-[100px]'
          />
        </div>

        <div className='text-white max-w-[539px] py-16'>
          <h1 className='text-[48px] font-bold font-[family-name:var(--font-baloo2)] mb-4'>
            Give your child an edge before university
          </h1>
          <p className='text-[18px] text-white/80 mb-4'>
            Many students enter higher education unsure of their purpose or direction. The Earlybrite Gap Year Program helps bridge that gap by equipping them with maturity, exposure, and clarity.
          </p>
          <p className='text-[18px] text-white/80 mb-6'>
            Learners who complete the program often step into university life more confident, independent, and ready to lead.
          </p>
          <div className='flex items-center gap-3'>
            <button className='bg-[#1A94D2] reuseable-button text-white'>
              <span className='flex items-center justify-center gap-2'>
                Apply for Gap <WhiteRightarrowSvg />
              </span>
            </button>
            <button className='bg-[#F9BB1E] reuseable-button text-black'>
              <span className='flex items-center justify-center gap-2'>
                Talk to Us <RightarrowSvg />
              </span>
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Conclusion
