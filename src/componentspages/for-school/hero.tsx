import React from 'react'
import { RightarrowSvg } from '../../../public/svg/constants'
import Image from 'next/image'
const SchoolHero = () => {
  return (
    <>
    <section className='bg-[#FFE5A2] flex items-center justify-center flex-col gap-[40px] p-[24px] lg:hidden'>
        <div className='w-[354px] flex flex-col gap-[16px] items-center md:text-center justify-center '>
            <h1 className='w-[354px]   font-[family-name:var(--font-baloo2)]  text-[36px] font-bold md:text-center'>Prepare your <span className='text-[#009147]'> students for the future</span></h1>
            <p className='text-[#666666] md:text-center '>Empowering schools to deliver hands-on, globally aligned learning that builds skills, confidence, and real-world readiness.</p>
        <div className='flex items-center space-x-3 w-full justify-start whitespace-nowrap md:items-center' >
                   <button className='bg-[#F9BB1E] reuseable-button px-5 '  ><span className='flex px-3  items-center group justify-between text-black '>Talk to US <RightarrowSvg/></span></button>        
                 </div>
      
      </div>
      <div>
        <Image 
        src="/for-school/Image_fx - 2025-11-10T113056.348 1.png"
        width={378}
        height={346}
        alt=''
        className='rounded-lg'
        />
      </div>
    </section>
    {/*lg screens*/}

     <section className='bg-[#FFE5A2] flex items-center justify-center flex-col gap-[40px] p-[24px] hidden lg:flex' id='home'>
        <div className='w-[1200px] flex justify-start items-center text-start gap-[40px]   '>
            <h1 className='w-[702px]  text-[60px]  font-[family-name:var(--font-baloo2)]  font-bold '>Prepare your<span className='text-[#009147]'> students for the future</span></h1>
           <div className='flex flex-col items-center gap-[12px]'>
             <p className='text-[#666666] w-[439px] text-[20px] '>Empowering schools to deliver hands-on, globally aligned learning that builds skills, confidence, and real-world readiness.</p>
        <div className='flex items-center space-x-3 w-full justify-start whitespace-nowrap md:items-center' >
                   <button className='bg-[#F9BB1E] reuseable-button px-5 '  ><span className='flex px-3  items-center group justify-between text-black '>Talk to US <RightarrowSvg/></span></button>        
                 </div>
           </div>
      
      </div>
      <div>
        <Image 
        src="/for-school/Image_fx - 2025-11-10T113056.348 1(1).png"
        width={1181}
        height={346}
        alt=''
        className='rounded-lg'
        />
      </div>
    </section>
    </>
  )
}

export default SchoolHero
