import React from 'react'
import Image from 'next/image'
import { WhiteRightarrowSvg } from '../../../public/svg/constants'

const SummerHero = () => {
  return (
    <section className='w-full bg-black pt-12 relative flex justify-center' id='home'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className='flex flex-col items-center text-center'>
        {/* Text content */}
        <div className='max-w-[700px] mb-8'>
          <h1 className='text-[32px] xl:text-[48px] font-[family-name:var(--font-baloo2)] font-bold text-white leading-tight mb-6'>
            A Summer of <span className='text-[#F9BB1E]'>Learning, Creativity and Discovery</span>
          </h1>
          <p className='text-white text-[16px] xl:text-[18px] mb-8'>
            Earlybrite Summer School gives young learners real skills, real exposure, and real experiences that build confidence for life. Hands-on learning. Practical projects. Teamwork and guided mentorship.
          </p>
          <div className='flex items-center justify-center gap-4'>
            <button className='bg-transparent border border-white text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-all duration-300'>
              Apply For GIT <WhiteRightarrowSvg />
            </button>
            <button className='bg-[#1A94D2] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#1580b8] transition-all duration-300'>
              Talk to Us <WhiteRightarrowSvg />
            </button>
          </div>
        </div>

        {/* Hero image - overflows down into next section */}
        <div className='w-full relative mb-[-100px] xl:mb-[-150px]'>
          <Image
            src="/images/summer-hero.png"
            width={1200}
            height={600}
            alt='Summer School students'
            className='rounded-xl object-cover w-full'
          />
        </div>
        </div>
      </div>
    </section>
  )
}

export default SummerHero
