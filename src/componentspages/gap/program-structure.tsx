import React from 'react'

import { GapProgramme, LargeGapProgramme } from '../layouts/constants/constants'
import Image from 'next/image'
const ProgramStructure = () => {
  return (


    <>
    <section className='bg-[#FFE5A2]   p-[40px] xl:justify-center flex items-center flex-col  p-[40px]  md:hidden'>
        <div className='flex flex-col items-center  gap-[16px] justify-center w-[322px] xl:w-[1197.93px] '>
            <h1 className='text-[#101010] xl:w-[570px] font-[family-name:var(--font-baloo2)] font-bold  text-[30px] text-center font-bold font-[family-name:var(--font-baloo2)]'>Program Structure</h1>
            <div className="flex flex-col items-center justify-center   gap-6 py-[40px] w-full  mx-auto">
  {GapProgramme.map((item, index) => (
    <div
    style={{background: item.color}}
      key={index}
      className="w-[322px]  pt-[24px] px-[24px] pb-[45px] bg-white rounded-xl  shadow flex flex-col items-start justify-start"
    >
      <img
        src={item.icon}
        alt={item.title}
        className="w-[48.46px] h-[48.46px] rounded-full bg-white p-[10px] object-cover "
      />
      <h3 style={{color:item.textcolor}} className="text-[22.28px]  font-bold mt-4">{item.title}</h3>
      <p style={{color:item.textcolor}} className="  text-[14.85px] ">{item.paragraph}</p>
      <p  style={{color:item.textcolor}} className="  text-[14.85px] ">{item.subParagraph}</p>
     <div>
         <ul >
        <li>{item.list}</li>
        </ul>
     </div>
    </div>
  ))}
</div>
        </div>
    </section>
        <section className='bg-[#FFE5A2]   p-[40px] xl:justify-center flex items-center flex-col  p-[40px]  hidden md:flex'>
        <div className='flex flex-col items-center  gap-[16px] justify-center w-[322px] xl:w-[1197.93px] '>
            <h1 className='text-[#101010] xl:w-[570px] font-[family-name:var(--font-baloo2)] font-bold  text-[30px] text-center font-bold font-[family-name:var(--font-baloo2)]'>Program Structure</h1>
            <div className=" grid grid-cols-2 grid-row-3 py-[40px]  gap-6  ">
  {LargeGapProgramme.map((item, index) => (
    <div
    style={{background: item.color}}
      key={index}
      className="w-[322px]  pt-[24px] px-[24px] pb-[45px] bg-white rounded-xl  shadow flex flex-col items-start justify-start"
    >
      <img
        src={item.icon}
        alt={item.title}
        className="w-[48.46px] h-[48.46px] rounded-full bg-white p-[10px] object-cover "
      />
      <h3 style={{color:item.textcolor}} className="text-[22.28px]  font-bold mt-4">{item.title}</h3>
      <p style={{color:item.textcolor}} className=" text-[14.85px] ">{item.paragraph}</p>
      <p style={{color:item.textcolor}} className=" text-[14.85px] ">{item.subParagraph}</p>
     <div>
         <ul >
        <li>{item.list}</li>
        </ul>
     </div>
    </div>
     ))}
     </div>
        </div>
    </section>
    </>
  )
}

export default ProgramStructure
