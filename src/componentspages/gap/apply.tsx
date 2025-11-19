import React from 'react'
import Image from 'next/image'
import { Check } from '../../../public/svg/constants'
import { RightarrowSvg } from '../../../public/svg/constants'
const Apply = () => {
  return (
    <>
   <section className='bg-[#009147] flex items-center justify-center p-[40px] md:hidden'>
    <div className='w-[322px] flex flex-col items-center justify-center gap-[40px]'>
        <h1 className='text-[#FFFFFF] font-[family-name:var(--font-baloo2)] font-bold'>Every part of the program is designed to make your child's experience relevant, future-ready, and globally recognized.</h1>
         <div className='flex items-center space-x-3 w-full justify-start whitespace-nowrap md:justify-center' >
                   <button className='bg-[#F9BB1E] reuseable-button text-black'><span className='flex items-center justify-center gap-2'> Apply for Git  <RightarrowSvg/></span></button>
               </div>
               <div>
                <Image
                src="/gap-page/Image_fx - 2025-11-11T163624.255 1.png"
                width={322}
                height={391}
                alt=''
                className='rounded-[24px]'
                />
               </div>
               <div className='flex flex-col items-center justify-center gap-[12px]'>
                <div className='bg-[#FFFFFF] flex rounded-[12px]  p-[24px]'> <Check/><h1 className=' w-[228px] '>Turn idle time into meaningful learning and real-world experience.</h1></div>
                <div className='bg-[#FFFFFF] flex rounded-[12px]  p-[24px]' ><Check/><h1 className=' w-[228px] '>Build 21st-century skills like communication, teamwork, and creativity</h1>.</div>
                <div className='bg-[#FFFFFF] flex rounded-[12px] p-[24px]'><Check/><h1 className=' w-[228px]'>Foster independence, adaptability, and self-leadership.</h1></div>
                <div className='bg-[#FFFFFF] flex rounded-[12px]  p-[24px]'><Check/><h1 className=' w-[228px] '>Provide guided career discovery and mentorship.</h1></div>
                <div className='bg-[#FFFFFF] flex rounded-[12px]  p-[24px]'><Check/><h1 className='w-[228px]  '>Connect learners to internship, community, and global networks.</h1></div>
               </div>
    </div>
   </section>

     <section className='bg-[#009147] flex items-center justify-center p-[40px] hidden md:flex'>
          <div className='w-[1200px] flex items-center gap-[220px]'>
              <section className='flex flex-col gap-[39px]'>
                 <div>
                <Image
                src="/gap-page/Image_fx - 2025-11-11T163624.255 1@2x.png"
                width={573}
                height={391}
                alt=''
                className='rounded-[24px]'
                />
               </div>
                <div className='w-[322px] flex flex-col items-center justify-center gap-[40px]'>
        <h1 className='text-[#FFFFFF] font-[family-name:var(--font-baloo2)] font-bold'>Every part of the program is designed to make your child's experience relevant, future-ready, and globally recognized.</h1>
         <div className='flex items-center space-x-3 w-full justify-start whitespace-nowrap r' >
                   <button className='bg-[#F9BB1E] reuseable-button text-black'><span className='flex items-center justify-center gap-2'> Apply for Git  <RightarrowSvg/></span></button>
               </div>
               </div>
            </section>

   
               <div className='w-[322px] flex flex-col items-center justify-center gap-[40px]'>
               <div className='flex flex-col items-center justify-center gap-[16px]'>
                <div className='bg-[#FFFFFF] flex rounded-[12px] w-[524px] p-[24px]'><Check/><h1 className=' w-[430px] '>Turn idle time into meaningful learning and real-world experience.</h1></div>
                <div className='bg-[#FFFFFF] flex rounded-[12px] w-[524px] p-[24px]'><Check/><h1 className=' w-[430px] '>Build 21st-century skills like communication, teamwork, and creativity</h1>.</div>
                <div className='bg-[#FFFFFF] flex rounded-[12px] w-[524px] p-[24px]'><Check/><h1 className=' w-[430px] '>Foster independence, adaptability, and self-leadership.</h1></div>
                <div className='bg-[#FFFFFF] flex rounded-[12px] w-[524px] p-[24px]'><Check/><h1 className=' w-[430px] '>Provide guided career discovery and mentorship.</h1></div>
                <div className='bg-[#FFFFFF] flex rounded-[12px] w-[524px] p-[24px]'><Check/><h1 className=' w-[430px] '>Connect learners to internship, community, and global networks.</h1></div>
               </div>
    </div>
          </div>
   </section>
   </>
  )
}

export default Apply
