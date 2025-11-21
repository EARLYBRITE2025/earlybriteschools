import React from 'react'
import { WhiteRightarrowSvg } from '../../../public/svg/constants'
import Image from 'next/image'
const BringToSchool = () => {
  return (
    <div className='flex flex-col items-center justfy-center mb-10 ' id='contact'>
    <div className='bg-[#1A94D2] rounded-[24px] w-[351px] xl:flex xl:items-center xl:justify-center md:w-[90%] xl:w-[1200px]'>
          <section className='flex flex-col items-center   px-[24px] py-[40px] justify-center gap-[40px]  '>
        <h1 className='text-[30px] text-white font-bold  font-[family-name:var(--font-baloo2)]  xl:w-[467px] xl:text-[40px]'> Bring Earlybrite to Your School</h1>
      <div className='flex flex-col text-white items-center justify-center gap-[16px]'>
          <p className='xl:w-[467px]'>Join forward-thinking schools redefining education through experiential learning. Together, 
            we can prepare students for the world that's already here and the one that's coming.</p>
     <div className='flex items-center space-x-3 w-full md:justify-center justify-start whitespace-nowrap md:justify-start' >
                        <button className='bg-[#009147] reuseable-button px-5 w-[212px]'  ><span className='flex px-8  text-white  items-center group justify-between  '>Talk to US <WhiteRightarrowSvg/></span></button>        
                      </div>
      </div>
    

      </section>
       <div className='relative  flex items-center justify-center flex-col'>
          <Image
      src="/for-school/Layer 1ds 1(5).png"
      width={524.9759452156853}
      height={402.22036211997994}
      alt=''
      className='absolute top-[-90px] md:hidden'
      /> 
      <Image
      src="/for-school/Image_fx - 2025-11-10T130726.823 1.png"
      width={524.9759452156853}
      height={402.22036211997994}
      alt=''
      className='z-[20] md:hidden'

      />
     <Image
      src="/for-school/Image_fx - 2025-11-10T130726.823 1(1).png"
      width={527}
      height={527}
      alt=''
      className='z-[20] hidden md:flex'

      />

           <Image
      src="/for-school/Layer 1ds 1(6).png"
      width={603.8}
      height={462.6}
      alt=''
      className='absolute left-[80px] hidden md:flex top-[-1px] '
      />
     </div>
    </div>
    </div>
  )
}

export default BringToSchool
