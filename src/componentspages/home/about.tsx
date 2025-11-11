import React from 'react'
import Image from 'next/image'
import { learningHighlights } from '../layouts/constants/constants'
const About = () => {
  return (
    <div className='bg-[#FFFFFF] about-style flex-col md:h-[732px] pb-20 lg:gap-30 lg:flex-row lg:justify-between 
     items-start pt-10 md:px-20 md:justify-start flex justify-center w-full px-5 pt-20 h-[1219px] space-y-10'>
      <div className='space-y-5 w-full '>

        <h1 className='second-headers md:w-[624px] md:text-[48px]'>
            What makes Earlybrite different?
        </h1>
        <p className='text-[#666666] w-[322px] font-medium  md:w-[624px] '>
            We blend mentorship, technology, and creativity to deliver learning that matters.
             Our approach connects students to real opportunities, global standards, and practical 
             experience that lasts a lifetime.
        </p>
        {learningHighlights.map((item) => (
        <div key={item.id} className="flex items-center justify-center md:pl-4  gap-4">
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
      <section className='flex flex-col items-center md:items-start justify-center space-y-8 w-full'>
        <section className='space-y-8 md:space-y-0 md:flex-row md:space-x-8 md:flex md:items-center md:justify-center'> 
            <div className='flex flex-col items-start justify-center gap-1 '>
            <span className='text-[#101010] text-center font-bold text-[36px] w-[148px]'>10,000+</span>
            <span className='text-[#666666] font-semibold text-center w-[148px]'>Children Trained</span>
        </div>
        <div className='flex flex-col items-start justify-center gap-1 '>
           <span className='text-[#101010] text-center font-bold text-[36px] w-[148px]'> 97%</span>
            <span className='text-[#666666] font-semibold text-center w-[148px]'>Satisfaction</span>
        </div>
        </section>
        <div className='w-full flex md:items-start items-center justify-center md:justify-start'>
            <button className='button bg-[#1A94D2]'>Talk to Us</button>
        </div>
        
      </section>
      </div>
<section className="relative flex flex-col items-center justify-center w-full">
  {/* Main Image */}
  <Image
    src="/images/Pictures(1).png"
    width={274}
    height={342}
    alt="about image"
    className="md:hidden "
  />
  <Image
    src="/images/Pictures(1).png"
    width={481}
    height={600}
    alt="about image"
    className="hidden md:flex "
  />

  {/* Small image - Left */}
  <div className="absolute md:left-[-70px] md:top-[10%] left-[30px] top-[45%]">
    <Image
      src="/images/Pictures.png"
      width={93}
      height={114}
      alt="left small image"
      className="md:hidden"
    />
    <Image
      src="/images/Pictures.png"
      width={186}
      height={228}
      alt="left small image"
      className="hidden md:flex"
    />
  </div>

  {/* Small image - Right */}
  <div className="absolute md:right-[50px] md:top-[40%]  z-50">
  
    <Image
      src="/images/aboutimage-3.png"
      width={186}
      height={228}
      alt="right small image"
      className="hidden md:flex rounded-2xl "
    />
  </div>
</section>

    </div>
  )
}

export default About
