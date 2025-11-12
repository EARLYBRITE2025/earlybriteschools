import React from 'react'
import Image from 'next/image'
const Contact = () => {
  return (
    <section className='flex items-center justify-center lg:py-[60px] lg:px-[120px] md:bg-gradient-to-r from-[#E1F5FE] to-[#FFF0CC]'>
      <div className='bg-[#0F151E] h-[820px] lg:p-[40px] p-[40px] flex flex-col md:w-[1201px] md:h-[452px] gap-[40px] md:gap-[100px]  md:p-[60px] rounded-2xl md:flex-row md:justify-between'>
   <div className=' gap-[40px] pl-[40px] flex flex-col '>
      <h1 className='w-[322px] text-[36px] font-bold text-[#FFFFFF] md:text-[56.62px] md:w-[454px]' >
        Let's build the <strong className='text-[#009147] '>future</strong> together.
     </h1>
     <p className='w-[322px] h-[57px] text-[16px] text-[#FFFFFF] md:w-[454px] md:text-[18.87px]'>
        Whether you're a parent, student, or
         educator, there's a place for you at Earlybrite.
     </p>
     
     <div className='gap-[20.69px] flex '>
      <button className='button bg-[#F9BB1E]'>
        Talk to Us
     </button>
     <button className='button bg-[#1A94D2]hidden lg:flex '>
       Partner with Us
     </button>
     </div>
   </div>
     
  <div className="relative flex w-full  flex-col">
  {/* Background image (slightly moved down) */}
  <Image
    src="/images/anyrgb.com (11) 1.png"
    width={506.39}
    height={846.92}
    alt="background contact image"
    className=" relative top-[78.34px] md:hidden"
  />

  {/* Centered overlay image */}
  <Image
    src="/images/student-contact.png"
    width={304.22}
    height={804.22}
    alt="student contact image"
    className="relative top-[40.96px] md:max-w-804.22 z-[2] hidden xl:flex"
  />
    <Image
    src="/images/student-contact.png"
    width={804.22}
    height={804.22}
    alt="student contact image"
    className="relative top-[-410.96px]  z-[2] sm:hidden "
  />
   <Image
    src="/images/layer.svg"
    width={430.34}
    height={329.71}
    alt="student contact image"
    className="relative top-[-412.96px] z-[1] md:hidden xl:flex hidden "
  />
  
</div>
    </div>
    </section>
  )
}

export default Contact
