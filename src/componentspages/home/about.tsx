import React from 'react'
import Image from 'next/image'
import { WhiteRightarrowSvg } from '../../../public/svg/constants'
import { learningHighlights } from '../layouts/constants/constants'
const About = () => {
  return (
    <div className='bg-[#FFFFFF] about-style flex-col md:h-[732px] pb-20 lg:gap-10 lg:flex-row lg:justify-center xl:justify-center
     items-start pt-10 md:px-20 md:justify-center
     flex justify-center w-full px-5 pt-20 h-[1200px] 
     space-y-10' id='about'>

   <div className='xl:flex xl:items-center justify-center xl:gap-[50px] '>
       <div className='space-y-5 xl:w-[639px] w-[322px] '>
        <h1 className='second-headers md:w-[624px] pl-5 xl:pl-0 md:text-[48px]'>
            What makes Earlybrite different?
        </h1>
        <p className='text-[#666666] xl:text-[18px] w-[322px] pl-5 xl:pl-0 font-medium  md:w-[624px] '>
            We blend mentorship, technology, and creativity to deliver learning that matters.
             Our approach connects students to real opportunities, global standards, and practical 
             experience that lasts a lifetime.
        </p>
        {learningHighlights.map((item) => (
        <div key={item.id} className="flex items-center pl-5 xl:pl-0 xl:items-start justify-center  gap-4">
          <img
            src={item.icon}
            alt={item.title}
            className="w-[24px] h-[24px] object-contain"
          />
          <div className='w-full'>
            <h3 className="text-[#666666] font-semibold w-[276px] md:w-[578px]  md:text-[20px] ">{item.title}</h3>
            
          </div>
        </div>
      ))}
      <section className='flex flex-col items-center md:items-start justify-center pb-15  space-y-8 w-full'>
        <section className='space-y-8 md:space-y-0 md:flex-row md:space-x-8 md:flex md:items-center md:justify-center'> 
            <div className='flex flex-col items-start justify-center gap-1 '>
            <span className='text-[#101010] text-center font-bold text-[36px] w-[148px]'>10,000+</span>
            <span className='text-[#666666] font-semibold text-center w-[148px]'>Children Trained</span>
        </div>
        <div className='flex flex-col items-start justify-center gap-1 '>
           <span className='text-[#101010] text-center  font-bold text-[36px] w-[148px]'> 97%</span>
            <span className='text-[#666666] font-semibold text-center w-[148px]'>Satisfaction</span>
        </div>
        </section>
        <div className='w-full flex md:items-start items-center justify-center md:justify-start'>
            <button className='button bg-[#1A94D2]'><span className='flex gap-4 items-center group justify-center text-white'>
              Talk to Us  <WhiteRightarrowSvg /> 
              </span></button>
        </div>
        
      </section>
      </div>
<section className="relative px-[40px] flex flex-col items-center justify-center w-full">
  {/* Main Image */}
  <Image
    src="/images/Pictures(1).png"
    width={274}
    height={342}
    alt="about image"
    className="md:hidden "
  />
  <Image
    src="/images/mainabout.png"
    width={441}
    height={552}
    alt="about image"
    className="hidden md:flex rounded-xl"
  />

  {/* Small image - Left */}
  <div className="absolute md:left-[-4%] md:top-[8%] left-[10px] top-[30%]">
    <Image
      src="/images/Pictures.png"
      width={93}
      height={114}
      alt="left small image"
      className="md:hidden"
    />
    <Image
      src="/images/Pictures.png"
      width={139.5}
      height={171}
      alt="left small image"
      className="hidden md:flex"
    />
  </div>

  {/* Small image - Right */}
  <div className="absolute md:right-[0%] md:top-[65%]  z-50">
  
    <Image
      src="/images/aboutimage-3.png"
      width={139.5}
      height={171}
      alt="right small image"
      className="hidden md:flex rounded-2xl "
    />
  </div>
</section>

   </div>
    </div>
  )
}

export default About
