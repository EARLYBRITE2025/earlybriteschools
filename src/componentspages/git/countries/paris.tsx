import React from 'react'
import Image from 'next/image'
import { WhiteRightarrowSvg } from '../../../../public/svg/constants'
const Paris = () => {
  return (
    <>
    <main className='xl:bg-[#F2F2F2] xl:flex xl:items-center xl:justify-center xl:px-[120px] xl:pt-[60px] md:hidden'>
            <section className='bg-[#FFFFFF] flex items-center xl:w-[1200px] p-5 xl:p-[45px] xl:gap-[45px]  md:hidden xl:rounded-xl gap-[120px] xl:h-[690px]'>
             <div className=' flex items-start  h-auto w-[402]   justify-start  flex-col gap-[30px]
              xl:w-[1440px]  xl:w-[583px] xl:h-[577px]
             '>
              <h1 className='text-[36px] font-[family-name:var(--font-baloo2)]  xl:w-[583px] text-start text-black font-bold'>
                <span className='text-[#009147] font-bold'>Paris:</span>Innovation, Branding, and Leadership</h1>
              <p className='w-[322px] text-start text-black font-bold  text-[18px] xl:w-[583px]'>
               Your final stop is Paris, a city that celebrates creativity, culture, and big ideas
            </p>
        <p className='w-[322px] text-start text-[18px] text-black xl:w-[583px]'>
     
Here, you&apos;ll learn how innovation meets imagination and how the power of creativity can shape businesses, brands, and futures.
You will
        </p>
        <div className='flex flex-col text-start text-black gap-[18px] w-[322px] '>
            <span className='flex gap-[22px]'>Join a Branding and Marketing Workshop led by industry experts, where you&apos;ll learn how global brands like those in fashion and luxury use storytelling and design to make an impact.</span>
            <span className='flex item-center gap-[22px] '>Work with your group to create and present an innovative product or service, applying everything you&apos;ve learned throughout the trek</span>
            <span className='flex justify-center gap-[22px]'>Visit a Technology and Science Museum to explore France&apos;s legacy of invention and discovery.</span>
        </div>
        
             <div className='flex items-center w-[322px]  xl:w-[583px]  space-x-3 xl:items-start justify-start whitespace-nowrap md:items-center' >
                <button className='bg-[#1A94D2] reuseable-button text-white '><span className='flex gap-4 items-center group justify-center text-white'>Talk to Us <WhiteRightarrowSvg /> </span></button>
                </div>
                  <div className='md:hidden '>
                <Image
                src="/images/paris-mobile.png"
                alt=''
                height={428.130156}
                width={428.1361389160156}
                className='rounded-xl'
                />
            </div>
            </div>
    
             <div className=' h-full w-full hidden xl:flex '>
                <Image
                src="/images/Pictures(3).png"
                alt=''
                height={684}
                width={684}
                className='object-cover w-full h-full rounded-xl'
                />
                
               
            </div>
          
           </section>
           {/*lg screens*/}
       </main>
      <main className="xl:bg-[#F2F2F2] hidden md:flex items-center justify-center pb-10">
  <section className="bg-white flex flex-col md:flex-row items-start xl:w-[1200px] px-5 md:px-[45px] pt-[65px] pb-[95px] gap-[45px] xl:rounded-xl xl:h-[750px]">
    {/* IMAGE */}
    <div className="w-full md:w-[50%] flex justify-center xl:justify-start">
      <Image
        src="/images/paris-git.png"
        width={615}
        height={600}
        alt="Visit Paris"
        className="rounded-3xl w-full max-w-[615px] h-auto object-cover"
      />
    </div>

    {/* TEXT */}
    <div className="w-full md:w-[50%] xl:w-[583px] flex flex-col gap-[32px] text-black">
      {/* Heading + intro */}
      <div className="flex flex-col gap-[16px] items-start">
        <h1 className="text-[40px] font-[family-name:var(--font-baloo2)] font-bold leading-tight text-left">
          <span className="text-[#009147] font-bold">Paris:</span> Innovation, Branding, and Leadership
        </h1>

        <div className="flex flex-col gap-[12px] text-[18px]">
          <p className="font-bold text-left">
            Your final stop is Paris, a city that celebrates creativity, culture, and big ideas
          </p>
          <p className="leading-relaxed text-left">
            Here, you&apos;ll learn how innovation meets imagination and how the power of creativity can shape businesses, brands, and futures. You will
          </p>
        </div>
      </div>

      {/* Bulleted checks */}
      <div className="flex flex-col gap-[14px] text-[18px] text-[#666666]">
        
          <ul className='flex flex-col gap-[16px]'>
            <li className='flex gap-[22px]'>Join a Branding and Marketing Workshop led by industry experts, where you&apos;ll learn how global brands like those in fashion and luxury use storytelling and design to make an impact. </li>
             <li className='flex gap-[22px]'>Work with your group to create and present an innovative product or service, applying everything you&apos;ve learned throughout the trek</li>
              <li className='flex gap-[22px]'>Visit a Technology and Science Museum to explore France&apos;s legacy of invention and discovery.</li>
          </ul>
           
        
      </div>

      {/* CTA */}
      <div className="flex">
        <button className="bg-[#1A94D2] reuseable-button w-[212px] text-white">
          <span className="flex gap-4 items-center justify-center text-white">
            Talk to Us <WhiteRightarrowSvg />
          </span>
        </button>
      </div>
    </div>
  </section>
</main>

        
    </>
  )
}

export default Paris
