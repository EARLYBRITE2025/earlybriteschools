import React from 'react'
import Image from 'next/image'
import { WhiteRightarrowSvg } from '../../../public/svg/constants'

const ImmaginariumHero = () => {
  return (
    <>
      <section className='w-full bg-black py-12 flex justify-center' id='home'>
        <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
          <div className=' flex flex-col xl:flex-row items-center justify-between gap-8'>
          {/* Left content */}
          <div className='xl:w-[50%] w-full'>
            <div className='flex flex-col space-y-6'>
              <h1 className='text-[32px] xl:text-[48px] font-[family-name:var(--font-baloo2)] font-bold text-white leading-tight'>
                Where <span className='bg-[#F9BB1E] text-black px-3 py-1 rounded-lg'>imagination</span> meets real-world learning
              </h1>
              <p className='text-white text-[16px] xl:text-[18px]'>
                Immaginarium is an <span className='text-[#009147] font-semibold'>experiential learning journey</span> for children aged 2–10. Through guided play, creativity, and discovery, your child learns to explore the world with confidence and curiosity.
              </p>
              <div className='flex items-center space-x-3 whitespace-nowrap'>
                <button className='bg-[#202D60] reuseable-button text-[white]'>Apply For GIT</button>
                <button className='bg-[#1A94D2] reuseable-button text-white'>
                  <span className='flex gap-4 items-center group justify-center text-white'>
                    Talk to Us <WhiteRightarrowSvg />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className='relative xl:w-[45%] w-full'>
            {/* Sparkle decorations */}
            <div className='absolute top-[-30px] right-[20px] z-10'>
              <Image
                src="/gap-page/gap-spark.svg"
                width={50}
                height={50}
                alt='sparkle decoration'
              />
            </div>
            <div className='absolute top-[40%] left-[-20px] z-10'>
              <Image
                src="/gap-page/gap-spark.svg"
                width={40}
                height={40}
                alt='sparkle decoration'
              />
            </div>
            <div className='absolute bottom-[20px] left-[10px] z-10'>
              <Image
                src="/gap-page/gap-spark.svg"
                width={30}
                height={30}
                alt='sparkle decoration'
              />
            </div>
            <Image
              src="/images/immaginerium-hero.png"
              width={500}
              height={500}
              alt='Children learning and playing'
              className='rounded-xl object-cover w-full'
            />
          </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ImmaginariumHero
