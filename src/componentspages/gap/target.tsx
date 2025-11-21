import React from 'react'
import Image from 'next/image'
import { Targets } from '../layouts/constants/constants'

const Target = () => {
  return (
    <section className='w-full py-16 bg-white flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className='text-center mb-10'>
        <h1 className='text-[30px] xl:text-[48px] font-[family-name:var(--font-baloo2)] font-bold'>
          Who it is for
        </h1>
      </div>

      <div className='flex flex-col xl:flex-row gap-6 justify-center'>
        {Targets.map((activity, index) => (
          <div
            key={index}
            style={{ background: activity.color }}
            className='p-8 flex flex-col items-start space-y-4 flex-1 rounded-[24px]'
          >
            <Image src={activity.icon} alt={activity.title} width={80} height={80} className='p-5 bg-white rounded-full' />
            <h3 className="font-bold text-[#101010] text-[24px] font-[family-name:var(--font-baloo2)]">{activity.title}</h3>
            <p className="text-black/70 leading-relaxed">{activity.paragraph}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Target
