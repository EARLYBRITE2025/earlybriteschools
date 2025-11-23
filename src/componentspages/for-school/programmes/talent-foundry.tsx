import React from 'react'
import { Check,WhiteRightarrowSvg } from '../../../../public/svg/constants'
import Image from 'next/image'

const TalentFoundry= () => {
  return (
<>
<main className='bg-[#F2F2F2] p-[40px] flex flex-col items-center justify-center gap-[16px] md:hidden'>
  <div className='bg-white rounded-xl xl:items-center xl: xl:flex  xl:w-[1200px] xl:p-[45px] gap-[40px] w-[350px] p-[24px]'>
    <div className='flex flex-col xl:flex-row  xl:items-center w-full  xl:justify-between  gap-[24px]  justify-start'>
       <div className='flex flex-col items-center justfiy-center xl:w-[433px]  gap-[24px]'>
         <h1 className='text-[24px]  font-[family-name:var(--font-baloo2)]  w-[302px]  font-bold w-[302px] text-[#000000] xl:text-[40px] xl:w-[433px] '>Talent Foundry</h1>
        <p className='text-[#666666]  w-[302px]   xl:w-[433px]'>Talent Foundry brings innovation directly into schools. It equips students with practical tech, creative, and business skills such as coding,
             animation, gaming, design, and entrepreneurship.</p>
       <ul className='flex flex-col  w-[352px]  xl:w-[433px] px-[10px] text-[#666666] gap-[18px] items-start justify-start text-[18px] xl:items-start xl:justify-centerr '>
                      <li className='flex   items-start justify-start w-[302px] xl:w-[433px]  '>
          <Check/>       <p  className='text-[18px] w-[256px] xl:w-[387px]' > Introduce students to tech and creativity in a structured, exciting way.</p>
                      </li>
                     <li className='flex items-start justify-start w-[302px] xl:w-[433px] '>
             <Check/>       <p  className='text-[18px] w-[256px] xl:w-[387px]' > Build your reputation as a future-ready institution.</p>
                      </li>
                      <li className='flex  items-start justify-start w-[302px] xl:w-[433px] '>
             <Check/>       <p  className='text-[18px] w-[256px] xl:w-[387px]' >Access facilitators and resources for in-school or after-school delivery.</p>
                      </li>
                      <li className='flex  items-start justify-start w-[302px] xl:w-[433px]'>
             <Check/>          <p  className='text-[18px] w-[256px] xl:w-[387px]' >Create real-world learning moments that link directly to classroom goals</p>
                      </li>
                  </ul>
             <div className='flex items-center space-x-3 w-full md:justify-center justify-start whitespace-nowrap md:justify-start' >
                      <button className='bg-[#1A94D2] w-[212px]  reuseable-button px-5 '  ><span className='flex px-3 items-center group justify-center text-white '>Talk to US <WhiteRightarrowSvg/></span></button>        
             </div>
       </div>
              <div>
<Image
src="/for-school/Image_fx - 2025-11-10T124341.725 1.png"
width={302}
height={302}
alt=''
className='rounded-xl md:hidden'
/>
<Image
src="/for-school/Image_fx - 2025-11-10T124341.725 1(1).png"
width={575}
height={535}
alt=''
className='rounded-xl hidden md:flex'
/>
  </div>
    </div>  
  </div>
   </main>
   {/*lg screens*/}
   <main className='bg-[#F2F2F2] p-[40px] flex flex-col items-center justify-center gap-[16px] hidden md:flex'>
  <div className='bg-white rounded-xl xl:items-center xl: xl:flex  xl:w-[1200px] xl:p-[45px] gap-[40px] w-[350px] p-[24px]'>
    <div className='flex flex-col xl:flex-row  xl:items-center w-full  xl:justify-between  gap-[24px]  justify-start'>
       <div className='flex flex-col items-center justfiy-center xl:w-[433px]  gap-[24px]'>
         <h1 className='text-[24px]  font-[family-name:var(--font-baloo2)]  w-[302px]  font-bold w-[302px] text-[#000000] xl:text-[40px] xl:w-[433px] '>Talent Foundry</h1>
        <p className='text-[#666666]  w-[302px]   xl:w-[433px]'>Talent Foundry brings innovation directly into schools. It equips students with practical tech, creative, and business skills such as coding,
             animation, gaming, design, and entrepreneurship.</p>
       <ul className='flex flex-col     xl:w-[433px]  text-[#666666] gap-[18px] items-start justify-start text-[18px]'>
                      <li className='flex gap-[22px]  items-start justify-start w-[302px]  xl:w-[433px]  '>
        <Image  src="/svg/check.svg"
                           alt=''
                           width={24}
                           height={24}                                
                          />        <p  className='text-[18px] w-[256px] xl:w-[387px]' > Introduce students to tech and creativity in a structured, exciting way.</p>
                      </li>
                     <li className='flex gap-[22px]  items-start justify-start w-[302px]  xl:w-[433px] '>
            <Image  src="/svg/check.svg"
                               alt=''
                               width={24}
                               height={24}                                
                              />       <p  className='text-[18px] w-[256px] xl:w-[387px]' > Build your reputation as a future-ready institution.</p>
                      </li>
                      <li className='flex gap-[22px]  items-start justify-start w-[302px]  xl:w-[433px]'>
            <Image  src="/svg/check.svg"
                               alt=''
                               width={24}
                               height={24}                                
                              />       <p  className='text-[18px] w-[256px] xl:w-[387px]' >Access facilitators and resources for in-school or after-school delivery.</p>
                      </li>
                      <li className='flex gap-[22px]  items-start justify-start w-[302px]  xl:w-[433px]'>
             <Image  src="/svg/check.svg"
                                alt=''
                                width={24}
                                height={24}                                
                               />         <p  className='text-[18px] w-[256px] xl:w-[387px]' >Create real-world learning moments that link directly to classroom goals</p>
                      </li>
                  </ul>
             <div className='flex items-center space-x-3 w-full md:justify-center justify-start whitespace-nowrap md:justify-start' >
                      <button className='bg-[#1A94D2] w-[212px]  reuseable-button px-5 '  ><span className='flex px-3 items-center group justify-center text-white '>Talk to US <WhiteRightarrowSvg/></span></button>        
             </div>
       </div>
              <div>
<Image
src="/for-school/Image_fx - 2025-11-10T124341.725 1.png"
width={302}
height={302}
alt=''
className='rounded-xl md:hidden'
/>
<Image
src="/for-school/Image_fx - 2025-11-10T124341.725 1(1).png"
width={575}
height={535}
alt=''
className='rounded-xl hidden md:flex'
/>
  </div>
    </div>  
  </div>
   </main>
</>
  )
}

export default TalentFoundry
