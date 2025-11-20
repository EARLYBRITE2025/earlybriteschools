import React from 'react'
import Image from 'next/image'

const ObservationFeedback = () => {
  return (
    <section className='w-full bg-white py-16 flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className=''>
        <div className='bg-[#009147] rounded-[24px] p-8 xl:p-12 flex flex-col xl:flex-row items-stretch justify-between gap-8'>
          {/* Left content */}
          <div className='xl:w-[40%]'>
            <h2 className='text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-white mb-4'>
              Observation and Feedback
            </h2>
            <p className='text-[#F9BB1E] text-[16px] font-semibold mb-4'>
              Growth you can see and celebrate
            </p>
            <p className='text-white text-[14px] mb-6'>
              Every child&apos;s journey is documented through observation and reflection inspired by the Reggio Emilia and Anji Play methods. Parents receive monthly feedback reports highlighting growth in creativity, confidence, collaboration, and curiosity.
            </p>
            <button className='bg-[#F9BB1E] text-black px-6 py-3 rounded-full hover:bg-[#e5aa1a] transition-all duration-300'>
              Enroll Your Child
            </button>
          </div>

          {/* Right image */}
          <div className='xl:w-[55%] relative min-h-[300px]'>
            <Image
              src="/images/immaginerium-feedback.png"
              fill
              alt='Children learning and getting feedback'
              className='rounded-xl object-cover'
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default ObservationFeedback
