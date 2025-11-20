import React from 'react'
import Image from 'next/image'
import { WhiteRightarrowSvg } from '../../../public/svg/constants'

const PlaceForEveryLearner = () => {
  return (
    <section className='w-full bg-white py-16 flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className=''>
        {/* Header */}
        <div className='flex flex-col xl:flex-row justify-between items-start xl:items-center mb-8'>
          <h2 className='text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-black'>
            A place for every learner
          </h2>
          <div className='xl:text-right mt-4 xl:mt-0'>
            <p className='text-[#101010E5] text-[16px] mb-4'>
              To make learning personal and social, children are grouped by age and developmental stage.
            </p>
            <button className='bg-[#1A94D2] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#1580b8] transition-all duration-300 xl:ml-auto'>
              Enroll your child <WhiteRightarrowSvg />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
          {/* Bright Explorers Card */}
          <div className='bg-[#BAE6FC] rounded-xl p-6'>
            <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4'>
              <Image src="/images/checkmark-circle-01.svg" width={20} height={20} alt='check' />
            </div>
            <h3 className='text-[24px] xl:text-[28px] font-bold text-black mb-2'>
              Bright Explorers (Ages 2–6)
            </h3>
            <p className='text-[14px] text-[#101010E5] mb-4'>
              Blends discovery and guided making through crafts, music, and stories.
            </p>
            <Image
              src="/images/immaginerium-bright-exploerers.png"
              width={400}
              height={250}
              alt='Bright Explorers - children learning'
              className='rounded-xl object-cover w-full'
            />
          </div>

          {/* Future Makers Card */}
          <div className='bg-[#F9BB1E] rounded-xl p-6'>
            <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4'>
              <Image src="/images/checkmark-circle-01.svg" width={20} height={20} alt='check' />
            </div>
            <h3 className='text-[24px] xl:text-[28px] font-bold text-black mb-2'>
              Future Makers (Ages 7–10)
            </h3>
            <p className='text-[14px] text-[#101010E5] mb-4'>
              Encourages creativity, teamwork, and design thinking through hands-on projects.
            </p>
            <Image
              src="/images/immaginerium-future.png"
              width={400}
              height={250}
              alt='Future Makers - children collaborating'
              className='rounded-xl object-cover w-full'
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default PlaceForEveryLearner
