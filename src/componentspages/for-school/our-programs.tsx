import React from 'react'
import { Check, WhiteRightarrowSvg } from '../../../public/svg/constants'
import Image from 'next/image'

const OurProgramme = () => {
  return (
<main className='bg-[#F2F2F2] p-[40px] flex flex-col items-center justify-center gap-[16px]'>
   
     <div className='text-center flex flex-col items-center jutify-center gap-[16px]'>
        <h1 className='text-[30px]  font-[family-name:var(--font-baloo2)]  font-bold text-black  xl:text-[48px] '>Our Programs</h1>
        <p className='w-[354px] text-[#000000CC] xl:w-[820px] '>Each Earlybrite program is designed to complement your school's learning goals. They can run as clubs, electives, or enrichment programs during or after school hours.</p>
    </div>

    <section className='bg-white rounded-xl xl:w-[1200px] xl:p-[45px] w-[350px] p-[24px] '>
    <div className='flex flex-col xl:flex-row items-center xl:justify-between  gap-[16px] justify-start'>
       <div className='flex flex-col items-center justfiy-center  gap-[16px]'>
         <h1 className='text-[24px] font-bold xl:w-[px] text-[#000000] font-[family-name:var(--font-baloo2)] font-bold'>The Elite Mentorship Program (TEMP)</h1>
        <p className='text-[#666666] xl:w-[433px] mb-3 '>TEMP is a transformative youth mentorship and development program that helps schools guide students toward discovering their potential and building 21st-century skills.</p>
       <ul className='flex flex-col  xl:w-[433px] text-[#666666] gap-[18px]  items-center justify-center '>
                      <li className='flex  gap-[16px]  '>
                   <Check/>    Enrich your student development strategy with global mentorship experiences.
                      </li>
                      <li className='flex gap-[16px]  '>
                    <Check/>     Strengthen leadership, creativity, and digital fluency among your students.
                      </li>
                      <li className='flex gap-[16px]'>
                    <Check/>   Build global exposure for your school through participation in international learning networks.
                      </li>
                      <li className='flex gap-[16px]'>
                      <Check/>  Access a structured program that aligns with OECD and UNESCO standards.
                      </li>
                  </ul>
                  <div className='flex items-center mt-[16px] w-full md:justify-center justify-start whitespace-nowrap md:justify-start' >
                                     <button className='bg-[#1A94D2] w-[212px]  reuseable-button px-5 '  ><span className='flex px-3 items-center group justify-center text-white '>Talk to US <WhiteRightarrowSvg/></span></button>        
                                   </div>
       </div>
  <div>
<Image
src="/for-school/Image_fx - 2025-11-10T122523.111 1.png"
width={302}
height={302}
alt=''
className='rounded-xl md:hidden'
/>
<Image
src="/for-school/Image_fx - 2025-11-10T122523.111 1(1).png"
width={575}
height={535}
alt=''
className='rounded-xl hidden md:flex'
/>
  </div>

    </div>
   </section>
   </main>
  )
}

export default OurProgramme
