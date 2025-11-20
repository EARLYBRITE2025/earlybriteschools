import React from 'react'
import Image from 'next/image'
import { RightarrowSvg } from '../../../public/svg/constants'

const PlayLearnGrow = () => {
  return (
    <section className='w-full bg-white py-16 flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className=' flex flex-col xl:flex-row items-center justify-between gap-8'>
        {/* Left content */}
        <div className='xl:w-[40%] w-full'>
          <h2 className='text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-6'>
            Play. Learn. Grow.
          </h2>
          <p className='text-[#101010E5] text-[16px] mb-4'>
            At Earlybrite, we believe play is not the opposite of learning, it&apos;s the foundation of it. Every activity in Immaginarium is designed to spark curiosity, imagination, and independence.
          </p>
          <p className='text-[#101010E5] text-[16px] mb-6'>
            Our approach combines proven early learning frameworks such as:
          </p>
          <ul className='space-y-3 mb-8'>
            <li className='flex items-start gap-3'>
              <Image src="/images/checkmark-circle-01.svg" width={20} height={20} alt='check' className='mt-1' />
              <span className='text-[#101010E5] text-[16px]'>Anji Play (China): Encouraging self-directed creativity.</span>
            </li>
            <li className='flex items-start gap-3'>
              <Image src="/images/checkmark-circle-01.svg" width={20} height={20} alt='check' className='mt-1' />
              <span className='text-[#101010E5] text-[16px]'>HighScope (USA): Promoting active learning and initiative.</span>
            </li>
            <li className='flex items-start gap-3'>
              <Image src="/images/checkmark-circle-01.svg" width={20} height={20} alt='check' className='mt-1' />
              <span className='text-[#101010E5] text-[16px]'>Reggio Emilia (Italy): Using the environment as a teacher.</span>
            </li>
            <li className='flex items-start gap-3'>
              <Image src="/images/checkmark-circle-01.svg" width={20} height={20} alt='check' className='mt-1' />
              <span className='text-[#101010E5] text-[16px]'>Abecedarian Project (USA): Focusing on long-term learning impact.</span>
            </li>
          </ul>
          <button className='bg-[#F9BB1E] text-black px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#e5aa1a] transition-all duration-300'>
            Enroll your child <RightarrowSvg />
          </button>
        </div>

        {/* Right images */}
        <div className='xl:w-[55%] w-full flex gap-4'>
          <div className='w-1/2'>
            <Image
              src="/images/immaginerium-play-learn-and-grow-1.png"
              width={300}
              height={400}
              alt='Child with paint on hands'
              className='rounded-xl object-cover w-full h-full'
            />
          </div>
          <div className='w-1/2'>
            <Image
              src="/images/immaginerium-play-learn-and-grow-2.png"
              width={300}
              height={400}
              alt='Child doing crafts'
              className='rounded-xl object-cover w-full h-full'
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default PlayLearnGrow
