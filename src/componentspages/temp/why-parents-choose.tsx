import React from 'react'
import Image from 'next/image'

const WhyParentsChoose = () => {
  const features = [
    {
      image: '/images/temp-why-1.png',
      text: 'Every learner is matched with mentors who guide them based on their goals and interests.'
    },
    {
      image: '/images/temp-why-2.png',
      text: 'TEMP is practical. Learners work on projects and challenges that prepare them for the real world.'
    },
    {
      image: '/images/temp-why-3.png',
      text: 'Our model aligns with leading global frameworks, giving learners a world-class learning edge.'
    },
    {
      image: '/images/temp-why-4.png',
      text: 'Graduates join a global network of young innovators, leaders, and creatives who grow together.'
    }
  ]

  return (
    <section className='w-full py-16 bg-[#FFE5A2] flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className='max-w-[1200px] mx-auto'>
        <div className='text-center mb-6'>
          <h2 className='text-[36px] xl:text-[48px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-4'>
            Why Parents Choose TEMP
          </h2>
          <p className='text-[16px] xl:text-[18px] text-[#666666]'>
            A mentorship experience designed for growth, purpose, and global relevance.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-[#F9BB1E] rounded-[24px] overflow-hidden flex flex-col'
            >
              {/* Image */}
              <div className='relative w-full h-[200px]'>
                <Image
                  src={feature.image}
                  fill
                  alt={`Feature ${index + 1}`}
                  className='object-cover'
                />
              </div>
              {/* Text */}
              <div className='p-6 flex-1'>
                <p className='text-[15px] xl:text-[16px] text-black leading-relaxed'>
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-center gap-4 mt-10'>
          <button className='bg-[#F9BB1E] text-black px-8 py-3 rounded-full font-semibold'>
            Join TEMP
          </button>
          <button className='bg-[#1A94D2] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2'>
            Speak With Advisor
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default WhyParentsChoose
