import React from 'react'
import Image from 'next/image'
import { WhiteRightarrowSvg } from '../../../public/svg/constants'
import { learningHighlights } from '../layouts/constants/constants'
const About = () => {
  return (
    <div className='bg-[#FFFFFF] about-style flex-col md:h-auto lg:h-auto pb-20 lg:gap-10 lg:flex-row lg:justify-center xl:justify-center items-start pt-10 md:px-10 lg:px-20 md:justify-center flex justify-center w-full px-5 pt-20 space-y-10' id='about'>

   <div className='xl:flex xl:items-center justify-center xl:gap-[50px] w-full max-w-[1450px]'>
       <div className='space-y-5 w-full md:w-full lg:w-[90%] xl:w-[639px]'>
        <h1 className='second-headers text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] xl:text-[48px] w-full md:w-full lg:w-[90%] font-bold font-[family-name:var(--font-baloo2)]'>
            What makes Earlybrite different?
        </h1>
        <p className='text-[#666666] text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] w-full font-medium'>
            We blend mentorship, technology, and creativity to deliver learning that matters.
             Our approach connects students to real opportunities, global standards, and practical
             experience that lasts a lifetime.
        </p>
        {learningHighlights.map((item) => (
        <div key={item.id} className="flex items-start gap-4 w-full">
          <Image
            src={item.icon}
            alt={item.title}
            width={24}
            height={24}
            className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] object-contain flex-shrink-0 mt-1"
          />
          <div className='w-full'>
            <h3 className="text-[#666666] font-semibold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">{item.title}</h3>
          </div>
        </div>
      ))}
      <section className='flex flex-col items-center md:items-start justify-center space-y-8 w-full pt-5'>
        <section className='space-y-8 md:space-y-0 md:flex-row md:gap-8 lg:gap-12 md:flex md:items-center md:justify-start w-full'>
            <div className='flex flex-col items-center md:items-start justify-center gap-1'>
            <span className='text-[#101010] font-bold text-[32px] md:text-[36px] lg:text-[40px]'>10,000+</span>
            <span className='text-[#666666] font-semibold text-[14px] md:text-[16px]'>Children Trained</span>
        </div>
        <div className='flex flex-col items-center md:items-start justify-center gap-1'>
           <span className='text-[#101010] font-bold text-[32px] md:text-[36px] lg:text-[40px]'>97%</span>
            <span className='text-[#666666] font-semibold text-[14px] md:text-[16px]'>Satisfaction</span>
        </div>
        </section>
        <div className='w-full flex md:items-start items-center justify-center md:justify-start'>
            <button className='button bg-[#1A94D2] text-[14px] sm:text-[16px]'><span className='flex gap-2 items-center group justify-center text-white'>
              Talk to Us <WhiteRightarrowSvg />
              </span></button>
        </div>
      </section>
      </div>
<section className="relative px-5 md:px-10 flex flex-col items-center justify-center w-full md:w-auto lg:flex-shrink-0">
  {/* Main Image */}
  <Image
    src="/images/Pictures(1).png"
    width={274}
    height={342}
    alt="about image"
    className="md:hidden w-full max-w-[300px] h-auto object-cover rounded-xl"
  />
  <Image
    src="/images/mainabout.png"
    width={441}
    height={552}
    alt="about image"
    className="hidden md:flex rounded-xl w-full max-w-[350px] lg:max-w-[400px] xl:max-w-[441px] h-auto object-cover"
  />

  {/* Small image - Left */}
  <div className="absolute left-[5px] top-[30%] md:left-[-2%] md:top-[8%] lg:left-[-3%]">
    <Image
      src="/images/Pictures.png"
      width={93}
      height={114}
      alt="left small image"
      className="md:hidden w-[70px] h-auto"
    />
    <Image
      src="/images/Pictures.png"
      width={139.5}
      height={171}
      alt="left small image"
      className="hidden md:flex w-[100px] lg:w-[120px] xl:w-[139.5px] h-auto"
    />
  </div>

  {/* Small image - Right */}
  <div className="absolute right-[5px] bottom-[10%] md:right-[0%] md:top-[65%] z-50">
    <Image
      src="/images/aboutimage-3.png"
      width={139.5}
      height={171}
      alt="right small image"
      className="hidden md:flex rounded-2xl w-[100px] lg:w-[120px] xl:w-[139.5px] h-auto"
    />
  </div>
</section>

   </div>
    </div>
  )
}

export default About
