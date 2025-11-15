import React from 'react'
import Image from 'next/image'
import { WhiteRightarrowSvg } from '../../../public/svg/constants'
const GapHero = () => {
  return (
   <>
     <section className='hero bg-white'id='home'>
       <div className='hero-first-div bg-[#F9BB1E] md:w-[90%] rounded-xl w-[354] h-[822px]'>
          <div className={` hero-div flex flex-col space-y-5   justify-center items-center
        w-full md:items-start  `}>
         
                <h1 className='classic text-[36px]  text-center  xl:text-[60px] w-[300px]  font-[family-name:var(--font-baloo2)] font-bold text-black xl:w-[530px] '  >
         Turn waiting time into a season of purpose and growth
         </h1>
         <p className=' text-center  text-black text-[18px]   w-[313px] '  > 
         The Earlybrite Gap Year Program helps young adults transform their transition year into a life-changing experience. Through internships, mentorship, and global learning, your 
         child gains clarity, confidence, and the skills to thrive in university and beyond.
         </p>
         <div className='flex items-center space-x-3 w-full justify-center whitespace-nowrap md:justify-start' >
           <button className='bg-[#202D60] reuseable-button  '  >Explore Program  </button>
         <button className='bg-[#1A94D2] reuseable-button   text-white '><span className='flex gap-4 items-center group justify-center text-white'>Talk to Us  <WhiteRightarrowSvg /> </span></button>
         </div>
       </div>
       <div className='bg-red-300'>
          <Image src="/images/gap-hero-pic.png"
          width={529}
          height={0}
          alt='hero.pic'
          
          >
          

          </Image>
         </div>

       </div>
   
      </section>
   </>
  )
}

export default GapHero
