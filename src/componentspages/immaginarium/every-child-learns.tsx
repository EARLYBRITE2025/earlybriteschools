import React from 'react'
import Image from 'next/image'
import { WhiteRightarrowSvg } from '../../../public/svg/constants'

const EveryChildLearns = () => {
  const stages = [
    {
      title: "Early Sparks (Ages 2–4)",
      description: "A gentle introduction to learning through exploration, movement, and sensory play."
    },
    {
      title: "Junior Creators (Ages 5–7)",
      description: "Hands-on creative sessions that build confidence, curiosity, and collaboration."
    },
    {
      title: "Young Innovators (Ages 8–10)",
      description: "Advanced projects that encourage independent thinking and problem-solving."
    }
  ]

  return (
    <section className='w-full bg-white py-16 flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className=' flex flex-col xl:flex-row items-start justify-between gap-8'>
        {/* Left image */}
        <div className='xl:w-[45%] w-full'>
          <Image
            src="/images/immaginerium-every-child.png"
            width={500}
            height={600}
            alt='Children learning together'
            className='rounded-xl object-cover w-full'
          />
        </div>

        {/* Right content */}
        <div className='xl:w-[50%] w-full'>
          <h2 className='text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-4'>
            Every child learns at their own pace
          </h2>
          <p className='text-[#101010E5] text-[16px] mb-6'>
            Immaginarium is designed to grow with your child. Each stage builds on the last, ensuring that learning feels natural, engaging, and age-appropriate.
          </p>

          {/* Stages */}
          <div className='space-y-4 mb-8'>
            {stages.map((stage, index) => (
              <div key={index} className='bg-[#F9BB1E] rounded-xl p-4'>
                <h3 className='text-[16px] font-bold text-black mb-2'>
                  {stage.title}
                </h3>
                <p className='text-[14px] text-[#101010E5]'>
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

          <button className='bg-[#1A94D2] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#1580b8] transition-all duration-300'>
            Enroll your child <WhiteRightarrowSvg />
          </button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default EveryChildLearns
