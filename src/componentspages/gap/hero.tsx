import React from 'react'
import Image from 'next/image'
import { WhiteRightarrowSvg } from '../../../public/svg/constants'
const GapHero = () => {
  return (
   <>
     <section className='hero bg-white'id='home'>
       <div className=' bg-[#F9BB1E] md:w-[90%]  rounded-[24px] xl:flex flex-col xl:h-[793px] items-center justify-center  xl:w-[1200px] w-[354px]'>
        <div className='flex flex-col '>
            <div className={` hero-div flex flex-col space-y-5 p-[40px]  justify-center items-center
        w-full   `}>
         
                <h1 className='classic text-[36px] md:w-[879px] text-center  xl:text-[60px] w-[300px]  font-[family-name:var(--font-baloo2)] font-bold text-black  '  >
         Turn waiting time into a season of purpose and growth
         </h1>
         <p className=' text-center  text-[#101010E5] text-[18px] md:w-[879px] w-[313px] '  > 
         The Earlybrite Gap Year Program helps young adults transform their transition year into a life-changing experience. Through internships, mentorship, and global learning, your 
         child gains clarity, confidence, and the skills to thrive in university and beyond.
         </p>
         <div className='flex items-center space-x-3 w-full justify-center whitespace-nowrap md:justify-center' >
           <button className='bg-[#202D60] reuseable-button text-[white]'> Apply for Git  </button>
         <button className='bg-[#1A94D2] reuseable-button   text-white '><span className='flex gap-4 items-center group justify-center text-white'>Talk to Us <WhiteRightarrowSvg /> </span></button>
         </div>
        
       </div>
        <div className='relative flex flex-col h-[228px] items-center justify-center md:hidden '>
         <Image src="/gap-page/gap-spark.svg"
          width={230}
          height={228}
          alt='hero.spark'
           className='relative top-[330px] '
          />
          <Image src="/images/gap-hero-pic.png"
          width={396.75}
          height={396.75}
          alt='hero.pic   '
          className='relative top-[-36.5px] rounded-xl'
        />
        </div>
        
        </div>
       <div className='relative flex flex-col h-[228px] items-center justify-center  '>
        
       <div className='relative flex items-center justify-center'>
         <Image src="/gap-page/gap-hero-large.png"
          width={775}
          height={975}
          alt='hero.pic z-[50] absolute '
          className='hidden relative top-[-115px] md:flex'
        />
       </div>
         </div>

       </div>
   
      </section>
   </>
  )
}

export default GapHero
