import React from 'react'
import { Check,WhiteRightarrowSvg } from '../../../../public/svg/constants'
import Image from 'next/image'

const EarlyBriteSummer = () => {
  return (
<main className='bg-[#F2F2F2] p-[40px] flex flex-col items-center justify-center gap-[16px]'>
  <div className='bg-white rounded-xl xl:items-center xl:justify-between xl:flex  xl:w-[1200px] xl:p-[45px] gap-[40px] w-[350px] p-[24px]'>
       <div>
<Image
src="/for-school/Image_fx - 2025-11-10T124513.278 1(1).png"
width={302}
height={302}
alt=''
className='rounded-xl md:hidden'
/>
<Image
src="/for-school/Image_fx - 2025-11-10T124513.278 1(2).png"
width={575}
height={535}
alt=''
className='rounded-xl hidden md:flex'
/>
  </div>

    <div className='flex flex-col xl:flex-row  xl:mt-[50px] items-center  gap-[16px] justify-start'>
       <div className='flex flex-col items-center justfiy-center xl:w-[433px] gap-[16px] w-full'>
         <h1 className='text-[24px]  font-[family-name:var(--font-baloo2)]  font-bold w-[302px] pt-4 text-[#000000] xl:text-[40px] xl:w-[433px] '>Earlybrite Summer School</h1>
        <p className='text-[#666666]  w-[302px]   xl:w-[433px]'>Earlybrite Summer School helps students learn by doing. It connects knowledge to real life through mentorship, projects, teamwork,
             and exposure. Schools can co-host or nominate students for participation.</p>
       <ul className=' flex flex-col  w-[352px]  xl:w-[433px] px-[10px] text-[#666666] gap-[18px] items-start justify-start text-[18px] xl:items-start xl:justify-center '>
                      <li className='flex   items-start justify-start w-[302px] xl:w-[433px]  '>
               <Check/>      <p className='text-[18px] w-[256px] xl:w-[387px]'> Keep your students engaged and productive during the holiday.</p>
                      </li>
                      <li className='flex   items-start justify-start w-[302px] xl:w-[433px] '>
                <Check/>        <p className='text-[18px] w-[256px] xl:w-[387px]'>Offer added value to parents through structured summer learning.</p>
                      </li>
                      <li className='flex   items-start justify-start w-[302px] xl:w-[433px] '>
                <Check/>      <p className='text-[18px] w-[256px] xl:w-[387px]'> Strengthen your community presence and reputation for excellence.</p>
                      </li>
                      <li className='flex   items-start justify-start w-[302px] xl:w-[433px] '>
              <Check/>     <p className='text-[18px] w-[256px] xl:w-[387px]'> Enjoy access to mentorship, workshops, and festival events for your students.</p>
                      </li>
                  </ul>
             <div className='flex items-center space-x-3 w-full md:justify-center justify-start whitespace-nowrap md:justify-start' >
                      <button className='bg-[#1A94D2] w-[212px]  reuseable-button px-5 '  ><span className='flex px-3 items-center group justify-center text-white '>Talk to US <WhiteRightarrowSvg/></span></button>        
             </div>
       </div>


    </div>
  
  </div>
   </main>
  )
}

export default EarlyBriteSummer
