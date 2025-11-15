import React from 'react'
import { features } from '../layouts/constants/constants'
import Image from 'next/image'
import { WhiteRightarrowSvg } from '../../../public/svg/constants'
const Vision = () => {
  return (
    <div className='flex flex-col items-center justify-center p-[40px] gap-[16px]'>
      <h1 className='text-[36px] font-bold'>The Vision</h1>
      <p className='text-[18px] text-[#666666] w-[323px] xl:w-[900px] text-center xl:gap-[24px]' >The world is changing fast, and you deserve to see it for yourself. The Global Innovation Trek is a 20-day summer 
         experience designed for ambitious teenagers who want to see the world differently.</p>
         <div className='flex items-center space-x-3 w-full justify-center whitespace-nowrap md:items-center' >
       <button className='bg-[#F9BB1E] reuseable-button'  >Apply For GIT </button>
      <button className='bg-[#1A94D2] reuseable-button text-white '><span className='flex gap-4 items-center group justify-center text-white'>Talk to Us <WhiteRightarrowSvg /> </span></button>
      </div>   
      
    </div>
  )
}
export default Vision
