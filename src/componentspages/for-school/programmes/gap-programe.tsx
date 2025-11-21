'use client'
import React from 'react'
import { Check,WhiteRightarrowSvg } from '../../../../public/svg/constants'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const GapYear = () => {
    const router = useRouter()
  return (
<main className='bg-[#F2F2F2] p-[40px] flex flex-col items-center justify-center gap-[16px]'>
  <div className='bg-white rounded-xl xl:items-center xl: xl:flex  xl:w-[1200px] xl:p-[45px] gap-[40px] w-[350px] p-[24px]'>
    <div className='flex flex-col xl:flex-row  xl:items-center w-full  xl:justify-between  gap-[24px]  justify-start'>
       <div className='flex flex-col items-center justfiy-center xl:w-[433px]  gap-[24px]'>
         <h1 className='text-[24px]  font-[family-name:var(--font-baloo2)]   w-[302px]  font-bold w-[302px] text-[#000000] xl:text-[40px] xl:w-[433px] '>The Gap Year Program</h1>
        <p className='text-[#666666]  w-[302px]   xl:w-[433px]'>Designed for children aged 2-10, Immaginarium is a play-based, hands-on learning program that blends creativity, exploration, and problem-solving. 
            It transforms classrooms and weekends into spaces of imagination and discovery.</p>
       <ul className='flex flex-col  w-[352px]  xl:w-[433px] px-[10px] text-[#666666] gap-[18px] items-start justify-start text-[18px] xl:items-start xl:justify-center  '>
                      <li className='flex   items-start justify-start w-[302px] xl:w-[433px] '>
             <Check/>     <p className='text-[18px] w-[256px] xl:w-[387px]'>   Offer a next-step solution for your graduates and parents.</p>
                      </li>
                      <li className='flex   items-start justify-start w-[302px] xl:w-[433px] '>
                <Check/>     <p className='text-[18px] w-[256px] xl:w-[387px]'> Strengthen alumni engagement through continuous mentorship.</p>
                      </li>
                      <li className='flex  items-start justify-center xl:w-[302px] xl:w-[433px]'>
               <Check/>     <p className='text-[18px] w-[256px] xl:w-[387px]'> Position your school as one that supports holistic student growth.</p>
                      </li>
                      <li className='flex  items-start justify-center xl:w-[302px] xl:w-[433px]'>
               <Check/>       <p className='text-[18px] w-[256px] xl:w-[387px]'> Partner with Earlybrite to co-brand certificates and portfolio showcases.</p>
                      </li>
                  </ul>
             <div className='flex items-center space-x-3 w-full md:justify-center justify-start whitespace-nowrap md:justify-start' >
                      <button onClick={()=> router.push("/gap")}  className='bg-[#1A94D2] w-[212px]  reuseable-button px-5 '  ><span className='flex px-3 items-center group justify-center text-white '>Talk to US <WhiteRightarrowSvg/></span></button>        
             </div>
       </div>
              <div>
<Image
src="/for-school/Image_fx - 2025-11-10T124122.979 1.png"
width={302}
height={302}
alt=''
className='rounded-xl md:hidden'
/>
<Image
src="/for-school/Image_fx - 2025-11-10T124122.979 1(1).png"
width={575}
height={535}
alt=''
className='rounded-xl hidden md:flex'
/>
  </div>
    </div>  
  </div>
   </main>
  )
}

export default GapYear
