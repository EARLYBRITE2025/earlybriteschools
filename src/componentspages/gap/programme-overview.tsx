import React from 'react'
import Image from 'next/image'
const ProgrammeOverview = () => {
  return (
   <>
   <main className='flex flex-col items-center xl:h-[985px] gap-[40px] justiy-center p-[40px] bg-[#F2F2F2]'>
    <div className='flex items-center justify-center text-center '>
        <h1 className='text-black text-[30px] xl:w-[454px] xl:text-[48px] font-[family-name:var(--font-baloo2)] font-bold'>Program Overview</h1>
    </div>
   <div className='flex flex-col items-center justify-center gap-[16px] xl:gap-[24px] xl:flex-row'>
       <div className='bg-[#1A94D2] text-white w-[322px] xl:w-[381px] rounded-xl flex items-center h-[162px] justify-center p-[24px] '>
        <p >The Earlybrite Gap Year Program is a 6-12 month bridge designed for secondary school
             and high school graduates preparing for university or professional life.</p>
    </div>
    <div className='bg-[#1A94D2] text-white w-[322px] xl:w-[381px]  rounded-xl flex items-center h-[162px] justify-center p-[24px] '>
        <p className='w-[274px]'>Instead of waiting passively, participants spend this period gaining practical experience, building essential life skills,
         and discovering their direction under guided mentorship.</p>
    </div>
     <div className='bg-[#1A94D2] text-white w-[322px] xl:w-[381px]  rounded-xl flex items-center h-[162px] justify-center p-[24px] '>
   <p className='w-[274px]'> Each learner joins a supportive community that values curiosity,
     discipline, and purpose, helping them move into adulthood with confidence.</p>
   </div>
   </div>
   <div>
    <Image 
    src="/gap-page/gap-programme.png"
    width={322}
    height={440}
    alt=''
    className='rounded-xl md:hidden'
    />
    <Image 
    src="/gap-page/gaplarge.png"
    width={1200}
    height={648}
    alt=''
    className='rounded-t-xl hidden md:flex'
    />

   </div>
  
   </main>
   </>
  )
}

export default ProgrammeOverview
 