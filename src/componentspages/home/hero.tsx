import React from 'react'
import {  Baloo_2 } from 'next/font/google'
import { RightarrowSvg } from '../../../public/svg/constants'


const baloo2 = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-baloo',
})

const Hero = () => {

  return (
   <>
   <section className='flex flex-col md:flex-row w-full md:bg-gradient-to-r from-[#E1F5FE] md:h-100 to-[#FFF0CC]'id='home'>
     <div className={` hero-div flex flex-col space-y-5  justify-center items-center
    
     w-full md:items-start md:px-[30px] lg:px-[110px] ${baloo2.variable} `}>
      
        <h1 className='classic font-baloo  pl-1 font-bold text-black max-w-90  '  >
        Building <span className='text-[#009147] md:text-black'>strong minds</span> and <span className='text-[#009147] md:text-black'>bright futures</span> for African children.
      </h1>
      <p className='px-3 pl-1 text-start max-w-90  '> 
        Earlybrite helps young people discover who they are, 
        explore what they love, and prepare for the future with confidence.
      </p>
      <div className='flex items-center space-x-3 w-full justify-center whitespace-nowrap md:justify-start' >
        <button className='bg-[#F9BB1E]  button ' >Explore Program</button>
      <button className='bg-[#1A94D2] button text-white '>Talk to Us </button>
      </div>
      
     
    </div>
     <div className='flex items-center mt-5 md:mt:0 h-100 md:hidden justify-center max-w-full  '>
         <RightarrowSvg/>
       
      </div>
   </section>
   </>
  )
}

export default Hero
