import React from 'react'
import Image from 'next/image'
import { RightarrowSvg } from '../../../public/svg/constants'

const HowItWorks = () => {
  const features = [
    {
      icon: "/images/checkmark-circle-01.svg",
      title: "Schedule",
      description: "Saturdays only"
    },
    {
      icon: "/images/checkmark-circle-01.svg",
      title: "Session Duration",
      description: "3 hours (10:00 AM – 1:00 PM or 11:00 AM – 2:00 PM)"
    },
    {
      icon: "/images/checkmark-circle-01.svg",
      title: "Structure",
      description: "4–6 consecutive weekends per monthly theme"
    },
    {
      icon: "/images/checkmark-circle-01.svg",
      title: "Experience Flow",
      description: "Exploration → Creation → Reflection → Showcase"
    }
  ]

  return (
    <section className='w-full bg-[#ED6E23EE] py-16 flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className=''>
        {/* Header */}
        <div className='text-center mb-10'>
          <h2 className='text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-[#F9BB1E] mb-4'>
            How Immaginarium Works
          </h2>
          <p className='text-white text-[16px] max-w-[700px] mx-auto'>
            Each Immaginarium experience runs as a 4- to 6-week program delivered through weekend sessions that balance structured guidance with open exploration.
          </p>
        </div>

        {/* Features grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-10'>
          {features.map((feature, index) => (
            <div key={index} className='bg-white rounded-xl p-6'>
              <div className='w-10 h-10 bg-[#BAE6FC] rounded-full flex items-center justify-center mb-4'>
                <Image src={feature.icon} width={20} height={20} alt='icon' />
              </div>
              <h3 className='text-[16px] font-bold text-black mb-2'>
                {feature.title}
              </h3>
              <p className='text-[14px] text-[#101010E5]'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Community text */}
        <div className='text-center mb-8'>
          <p className='text-white text-[14px] max-w-[700px] mx-auto mb-6'>
            Every child belongs to a vibrant learning community where creativity and curiosity are nurtured. Parents are partners in the journey and are invited to observe, celebrate, and support their child&apos;s growth during showcase weekends.
          </p>

          <h3 className='text-[20px] font-bold text-white mb-4'>
            Monthly + Quarterly Flow
          </h3>
          <p className='text-white text-[14px] max-w-[700px] mx-auto'>
            Each month focuses on a unique theme. Every three months form a quarterly journey with one overarching developmental focus. Each theme concludes with a showcase event, an exhibition or performance that allows children to demonstrate learning, build confidence, and celebrate progress.
          </p>
        </div>

        {/* CTA Button */}
        <div className='text-center'>
          <button className='bg-[#F9BB1E] text-black px-6 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-[#e5aa1a] transition-all duration-300'>
            Enroll your child <RightarrowSvg />
          </button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
