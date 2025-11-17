import React from 'react'
import Image from 'next/image'
import { Check } from '../../../public/svg/constants'
import { WhiteRightarrowSvg } from '../../../public/svg/constants'
const Paris = () => {
  return (
    <>
    <main className='xl:bg-[#F2F2F2] xl:flex xl:items-center xl:justify-center xl:px-[120px] xl:pt-[60px] md:hidden'>
            <section className='bg-[#FFFFFF] flex items-center xl:w-[1200px] p-[45px] xl:gap-[45px]  md:hidden xl:rounded-xl gap-[120px] xl:h-[690px]'>
             <div className=' flex items-start  h-auto w-[402]   justify-start  flex-col gap-[30px]
              xl:w-[1440px]  xl:w-[583px] xl:h-[577px]
             '>
              <h1 className='text-[36px] font-[family-name:var(--font-baloo2)]  xl:w-[583px] text-start text-black font-bold'>
                <span className='text-[#009147] font-bold'>Paris:</span>Innovation, Branding, and Leadership</h1>
              <p className='w-[322px] text-start text-black font-bold  text-[18px] xl:w-[583px]'>
               Your final stop is Paris, a city that celebrates creativity, culture, and big ideas
            </p>
        <p className='w-[322px] text-start text-[18px] text-black xl:w-[583px]'>
     
Here, you'll learn how innovation meets imagination and how the power of creativity can shape businesses, brands, and futures.
You will
        </p>
        <div className='flex flex-col text-start text-black gap-[18px] w-[322px] '>
            <span className='flex gap-[22px]'>Join a Branding and Marketing Workshop led by industry experts, where you'll learn how global brands like those in fashion and luxury use storytelling and design to make an impact.</span>
            <span className='flex item-center gap-[22px] '>Work with your group to create and present an innovative product or service, applying everything you've learned throughout the trek</span>
            <span className='flex justify-center gap-[22px]'>Visit a Technology and Science Museum to explore France's legacy of invention and discovery.</span>
        </div>
        
             <div className='flex items-center w-[322px]  xl:w-[583px]  space-x-3 xl:items-start justify-start whitespace-nowrap md:items-center' >
                <button className='bg-[#1A94D2] reuseable-button text-white '><span className='flex gap-4 items-center group justify-center text-white'>Talk to Us <WhiteRightarrowSvg /> </span></button>
                </div>
                  <div className='md:hidden '>
                <Image
                src="/images/Pictures(2).png"
                alt=''
                height={428.130156}
                width={428.1361389160156}
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
       <main className="xl:bg-[#F2F2F2] hidden md:flex items-center justify-center  pb-10 ">
     
       <section className="bg-[#ffffff] flex flex-col md:flex-row items-center 
                           xl:w-[1200px] px-[45px] pt-[65px]  pb-[95px] gap-[45px] xl:gap-[45px] hidden md:flex
                           xl:rounded-xl xl:h-[750px]">
     
         {/* IMAGE - always first on md & xl */}
         <div className="w-full h-full md:w-1/2   flex justify-center">
           <Image
             src="/images/paris-git.png"
             alt=""
             height={600}
             width={684}
             className="object-cover w-full h-full rounded-xl"
           />
         </div>
     
         {/* TEXT - always second on md & xl */}
         <div className="flex flex-col gap-[40px] text-black 
                         w-[322px] h-[626px] md:w-[400px] xl:w-[583px]">
     
          <div className='flex flex-col justify-center gap-[18px] h-[288px] items-start'>
             <h1 className="text-[40px] w-[455px] font-[family-name:var(--font-baloo2)] font-bold">
             <span className="text-[#009147] font-bold ">Paris:</span> Innovation, Branding, and Leadership
           </h1>
     
          <div className='h-[176px] gap-[18px] flex flex-col'>
             <p className="text-[18px] w-[465px] font-bold">
              Your final stop is Paris, a city that celebrates creativity, culture, and big ideas
           </p>
     
           <p className="text-[18px] leading-relaxed w-[465px]">
            Here, you'll learn how innovation meets imagination and how the power of creativity can shape businesses, brands, and futures.
You will
           </p>
          </div>
     
          </div>
           <div className="flex flex-col gap-[18px] w-[465px] h-[234px]  items-start  justify-start text-[18px] text-[#666666] text-[18px]">
             <span className="flex items-start justify-start gap-[10px]">
               <Check />Join a Branding and Marketing Workshop led by industry experts, where you'll learn how global brands like those in fashion and luxury 
               use storytelling and design to make an impact.
             </span>
     
             <span className="flex items-start justify-start gap-[10px]">
               <Check />Work with your group to create and present an innovative product or service, applying everything you've learned throughout the trek
             </span>
     
             <span className="flex items-start justify-start ">
               <Check />Visit a Technology and Science Museum to explore France's legacy of invention and discovery.
             </span>
           </div>
     
           <div className="flex mt-3 items-start">
             <button className="bg-[#1A94D2] reuseable-button w-[212px] text-white">
               <span className="flex gap-4 items-center group justify-center text-white">
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
