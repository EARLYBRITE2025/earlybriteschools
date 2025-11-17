import React from 'react'
import Image from 'next/image'
import { Check } from '../../../public/svg/constants'
const BeyondTip = () => {
  return (
   <>
   <section className='bg-[#1A94D2] items-center flex justify-center flex-col p-[40px] gap-[40px] md:hidden' >
    <div className='flex flex-col text-[#FFFFFF] w-[322px] gap-[16px]'>
        <h1 className='text-[36px] font-bold font-[family-name:var(--font-baloo2)] '>Beyond the Trip</h1>
        <p className='text-[18px]'>Every GIT participant continues their development through Earlybrite's Elite Mentorship Program (TEMP),
             a structured 30-month roadmap that ensures their global learning becomes lifelong growth.</p>
             <div className='flex items-center w-[322px]  xl:w-[583px]  space-x-3 xl:items-start justify-start whitespace-nowrap md:items-center' >
 <button className='bg-[#F9BB1E] reuseable-button'>Apply For GIT</button>
  </div>
    </div>

    <div className='w-[322px] bg-[#FFE5A2] rounded-2xl flex flex-col py-[57px] items-center  justify-start gap-[40px] h-[600px]' >
        <h1 className='text-[#000000] pl-5 w-[220px] text-[36px] font-bold font-[family-name:var(--font-baloo2)] '>What this includes</h1>
        <div className='w-[220px] flex flex-col  items-start  justify-start '>
            <ul className='flex flex-col font-bold text-[#000000] gap-[18px]  text-[20px] items-center justify-center '>
                <li className='flex    '>
                <span><Check/></span>   Digital Skills & AI Fluency Training
                </li>
                <li className='flex'>
               <span> <Check/>  </span> Global Language Mastery
                </li>
                <li className='flex'>
               <span> <Check/>  </span>  Internship & Job Placement Support
                </li>
                <li className='flex'>
               <span> <Check/>  </span>  Peer Workshop Alumni Workshop
                </li>
            </ul>
        </div>

    </div>
    <div>
        <Image
        src="/images/side-attraction-mobile.png"
        width={656}
        height={319}
        alt=''
        />
        
    </div>

   </section>

    <section className='bg-[#1A94D2] items-center flex h-[943px] justify-center flex-col p-[40px] gap-[40px] hidden md:flex' >
  <div className='flex justify-between w-[1200px]'>
      <div className='flex flex-col text-[#FFFFFF] w-[322px] gap-[16px]'>
        <h1 className='text-[40px] font-bold font-[family-name:var(--font-baloo2)] '>Beyond the Trip</h1>
        <p className='text-[18px] w-[454px]'>Every GIT participant continues their development through Earlybrite's Elite Mentorship Program (TEMP),
             a structured 30-month roadmap that ensures their global learning becomes lifelong growth.</p>
             <div className='flex items-center w-[322px]  xl:w-[583px]  space-x-3 xl:items-start justify-start whitespace-nowrap md:items-center' >
 <button className='bg-[#202D60] w-[212px] text-white reuseable-button'>Speak With An Advisor</button>
  </div>
    </div>

    <div className='w-[322px] bg-[#FFE5A2]  rounded-2xl  w-[675px] flex flex-col py-[57px] px-[51px] items-start  justify-center gap-[40px] h-[394px]' >
        <h1 className='text-[#000000] pl-5 w-[331px] text-[40px] font-bold font-[family-name:var(--font-baloo2)] '>What this includes</h1>
        <div className='w-[573px] flex flex-col   items-start  justify-start '>
            <ul className='flex flex-col items-start font-bold text-[#000000] gap-[18px]  text-[20px] items-center justify-center '>
                <li className='flex   '>
                 <span><Check /></span>  
                  Digital Skills & AI Fluency Training
                </li>
                <li className='flex '>
                    <span><Check /></span>  
                     Global Language Mastery
                </li>
                <li className='flex'>
               <span> <Check/>  </span>  Internship & Job Placement Support
                </li>
                <li className='flex'>
               <span> <Check/>  </span>  Exam prep and Studying Guidiance
                </li>
                <li className='flex'>
               <span> <Check/>  </span>  Career Workshop Alumni Workshop
                </li>
            </ul>
        </div>

    </div>
  </div>
    <div className='hidden'>
        <Image
        src="/images/side-attraction.png"
        width={1460}
        height={709}
        alt=''
        className=''
        />
        
    </div>

   </section>
   </>
  )
}

export default BeyondTip
