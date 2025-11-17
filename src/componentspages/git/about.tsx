import React from 'react'
import { features } from '../layouts/constants/constants'
import Image from 'next/image'
const About = () => {
  return (
    <>
    <section className='bg-[#BAE6FC] h-[1286.23px] xl:h-[497.30px] p-[40px]  flex items-center flex-col '>
        <div className='flex flex-col items-center  gap-[16px] justify-center w-[322px] '>
            <h1 className='text-[#101010] xl:w-[570px]  text-[48px] text-center font-bold font-[family-name:var(--font-baloo2)]'>Why Parents Choose GIT</h1>
            <p className='text-[#666666] text-[18px] xl:w-[542px] text-center'>A program that gives your child the confidence, exposure, and global mindset to thrive anywhere.</p>
        <div className="flex flex-col xl:flex-row gap-[10px] items-center justify-center py-[40px]   w-[322px]">
             {features.map((item, index) => (
               <div key={index} className="p-5  bg-white rounded-xl shadow">
                 <img 
                   src={item.icon} 
                   alt={item.title} 
                   className="w-[48.5px] h-[48.5px]  object-cover rounded-lg"
                 />
       
                 <h3 className="text-[24px] xl:w-[225px]  font-bold mt-4">{item.title}</h3>
                 <p className="text-[#666666] text-[13.8px] mt-2">{item.paragraph}</p>
               </div>
             ))}
           </div>     
        </div>

    </section>
    </>
  )
}

export default About
