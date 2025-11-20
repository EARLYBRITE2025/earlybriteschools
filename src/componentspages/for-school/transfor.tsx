import React from 'react'
import { RightarrowSvg } from '../../../public/svg/constants'
import Image from 'next/image'
const Transfer = () => {
  return (
    <section className='flex flex-col items-center justify-center p-[40px]'>
        <div className='bg-[#009147] w-[350px] md:w-[90%] xl:w-[1200px] xl:p-[45px] xl:flex-row xl:justify-between
        
        text-white py-[40px] px-[24px] rounded-[24px] flex flex-col xl:gap-[64px] gap-[24px]'>
          <div className='gap-[40px] flex flex-col '>
              <h1 className='w-[350px]  font-[family-name:var(--font-baloo2)]   text-[29px] font-bold'>Transform Learning Beyond the Classroom</h1>
            <p className='xl:w-[545px]'> Education is changing fast. Schools that stay ahead are those that give their students more than grades, they give them experience, confidence, and vision.</p>
             <p className='xl:w-[545px]'>Earlybrite helps schools do just that. We bring world-class programs, expert mentors, and engaging experiences that make learning come alive. </p>
             <p className='xl:w-[545px]'>Partnering with us helps your students become future-ready while strengthening your school's reputation for excellence.</p>
         <div className='flex items-center space-x-3 w-full justify-start whitespace-nowrap md:items-center' >
                       <button className='bg-[#F9BB1E] reuseable-button px-5 ' ><span className='flex px-3  items-center group justify-between text-black '>Talk to US <RightarrowSvg/></span></button>        
         </div>
          </div>
              <div>
            <Image
            src="/for-school/Rectangle 22.png"
            width={302}
            height={241}
            alt=''
            className='md:hidden'

            />
             <Image
            src="/for-school/Rectangle 22(1).png"
            width={464}
            height={444}
            alt=''
            className='hidden md:flex'
            />
        </div>
        </div>
       
    </section>
  )
}

export default Transfer




