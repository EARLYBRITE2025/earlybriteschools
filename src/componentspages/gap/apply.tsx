import React from 'react'
import Image from 'next/image'
import { RightarrowSvg } from '../../../public/svg/constants'

const Apply = () => {
  return (
    <section className='w-full py-16 bg-[#009147] flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        {/* Mobile */}
      <div className='flex flex-col items-center gap-10 md:hidden'>
        <h1 className='text-white font-[family-name:var(--font-baloo2)] font-bold text-center'>
          Every part of the program is designed to make your child&apos;s experience relevant, future-ready, and globally recognized.
        </h1>
        <button className='bg-[#F9BB1E] reuseable-button text-black'>
          <span className='flex items-center justify-center gap-2'>
            Apply for Git <RightarrowSvg />
          </span>
        </button>
        <Image
          src="/gap-page/Image_fx - 2025-11-11T163624.255 1.png"
          width={322}
          height={391}
          alt='Apply'
          className='rounded-[24px] w-full'
        />
        <div className='flex flex-col gap-3 w-full'>
          <div className='bg-white flex rounded-[12px] p-6 gap-3'>
            <Image src="/images/check-green.svg" width={24} height={24} alt="check" />
            <p>Turn idle time into meaningful learning and real-world experience.</p>
          </div>
          <div className='bg-white flex rounded-[12px] p-6 gap-3'>
            <Image src="/images/check-green.svg" width={24} height={24} alt="check" />
            <p>Build 21st-century skills like communication, teamwork, and creativity.</p>
          </div>
          <div className='bg-white flex rounded-[12px] p-6 gap-3'>
            <Image src="/images/check-green.svg" width={24} height={24} alt="check" />
            <p>Foster independence, adaptability, and self-leadership.</p>
          </div>
          <div className='bg-white flex rounded-[12px] p-6 gap-3'>
            <Image src="/images/check-green.svg" width={24} height={24} alt="check" />
            <p>Provide guided career discovery and mentorship.</p>
          </div>
          <div className='bg-white flex rounded-[12px] p-6 gap-3'>
            <Image src="/images/check-green.svg" width={24} height={24} alt="check" />
            <p>Connect learners to internship, community, and global networks.</p>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className='hidden md:flex items-center justify-between gap-10'>
        <div className='flex flex-col gap-10'>
          <Image
            src="/gap-page/Image_fx - 2025-11-11T163624.255 1@2x.png"
            width={573}
            height={391}
            alt='Apply'
            className='rounded-[24px]'
          />
          <div className='max-w-[400px]'>
            <h1 className='text-white font-[family-name:var(--font-baloo2)] font-bold mb-6'>
              Every part of the program is designed to make your child&apos;s experience relevant, future-ready, and globally recognized.
            </h1>
            <button className='bg-[#F9BB1E] reuseable-button text-black'>
              <span className='flex items-center justify-center gap-2'>
                Apply for Git <RightarrowSvg />
              </span>
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='bg-white flex rounded-[12px] p-6 gap-3'>
            <Image src="/images/check-green.svg" width={24} height={24} alt="check" />
            <p>Turn idle time into meaningful learning and real-world experience.</p>
          </div>
          <div className='bg-white flex rounded-[12px] p-6 gap-3'>
            <Image src="/images/check-green.svg" width={24} height={24} alt="check" />
            <p>Build 21st-century skills like communication, teamwork, and creativity.</p>
          </div>
          <div className='bg-white flex rounded-[12px] p-6 gap-3'>
            <Image src="/images/check-green.svg" width={24} height={24} alt="check" />
            <p>Foster independence, adaptability, and self-leadership.</p>
          </div>
          <div className='bg-white flex rounded-[12px] p-6 gap-3'>
            <Image src="/images/check-green.svg" width={24} height={24} alt="check" />
            <p>Provide guided career discovery and mentorship.</p>
          </div>
          <div className='bg-white flex rounded-[12px] p-6 gap-3'>
            <Image src="/images/check-green.svg" width={24} height={24} alt="check" />
            <p>Connect learners to internship, community, and global networks.</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Apply
