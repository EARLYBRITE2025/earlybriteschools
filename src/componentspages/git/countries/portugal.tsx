import React from 'react'
import Image from 'next/image'
import { WhiteRightarrowSvg } from '../../../../public/svg/constants'
const Portugal = () => {
  return (
    <>
   
    
   <main className='xl:bg-[#F2F2F2] xl:flex xl:items-start xl:justify-center xl:px-[120px] xl:pt-[30px] '>
        <section className='bg-[#FFFFFF] flex items-center  xl:w-[1200px] p-5 xl:p-[45px] xl:gap-[45px] xl:rounded-xl gap-[120px] xl:h-[690px]'>
         <div className=' flex items-start  h-auto w-[402]   justify-start  flex-col gap-[30px]
          xl:w-[1440px]  xl:w-[583px] xl:h-[577px]
         '>
          <h1 className='text-[36px] font-[family-name:var(--font-baloo2)]  xl:w-[583px] text-start text-black font-bold'><span className='text-[#009147] font-bold'>Portugal:</span> The Spirit of Discovery</h1>
          <p className='w-[322px] text-start text-black font-bold  text-[18px] xl:w-[583px]'>
            Lisbon  Entrepreneurship and Financial Literacy
        </p>
    <p className='w-[322px] text-start text-[18px] text-black xl:w-[583px]'>
  Your journey begins in Lisbon, one of Europe&apos;s most vibrant startup hubs. Here, 
  you will experience what it feels like to turn ideas into real ventures
    </p>
    <div className='flex flex-col text-start text-black gap-[18px] w-[322px] '>
        <span className='flex gap-[22px]'>Visit local innovation labs and meet young founders who are solving real-world problems.</span>
        <span className='flex item-center gap-[22px] '>Take part in a mini business challenge where you and your team will pitch your own startup idea.</span>
        <span className='flex justify-center gap-[22px]'>Join hands-on sessions that teach you how to budget, save, and understand the basics of investing.</span>
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
   </main>
    
    
    </>
  )
}

export default Portugal
