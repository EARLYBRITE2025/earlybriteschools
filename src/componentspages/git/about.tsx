import React from 'react'
import { features } from '../layouts/constants/constants'
import Image from 'next/image'
const About = () => {
  return (
    <>
    <section className='bg-[#BAE6FC]  xl:h-[497.30px] p-[40px] xl:justify-center flex items-center flex-col '>
        <div className='flex flex-col items-center  gap-[16px] justify-center w-[322px] xl:w-[1197.93px] '>
            <h1 className='text-[#101010] xl:w-[570px]   text-[48px] text-center font-bold font-[family-name:var(--font-baloo2)]'>Why Parents Choose GIT</h1>
            <p className='text-[#666666] text-[13.8px] xl:w-[542px] text-center'>A program that gives your child the confidence, exposure, and global mindset to thrive anywhere.</p>
            <div className="flex flex-col items-center justify-center  xl:flex-row xl:w-[1197.9px] gap-6 py-[40px] w-full max-w-[1200px] mx-auto">
  {features.map((item, index) => (
    <div
      key={index}
      className="w-[290px] h-[229px] pt-[24px] px-[24px] pb-[45px] bg-white rounded-xl shadow flex flex-col items-start justify-start"
    >
      <img
        src={item.icon}
        alt={item.title}
        className="w-[48.5px] h-[48.5px] object-cover rounded-lg"
      />
      <h3 className="text-[24px] font-bold mt-4">{item.title}</h3>
      <p className="text-[#666666] text-[13.8px] ">{item.paragraph}</p>
    </div>
  ))}
</div>
        </div>


    </section>
    </>
  )
}

export default About


