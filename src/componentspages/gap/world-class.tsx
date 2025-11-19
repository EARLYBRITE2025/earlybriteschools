import React from 'react'
import { WhiteRightarrowSvg } from '../../../public/svg/constants'
import Image from 'next/image'
import { GapFEat } from '../layouts/constants/constants'
const WorldClass = () => {
  return (
   <>
   <section className='flex flex-col justify-center items-center  p-[40px] gap-[40px] md:hidden'>
    <div className='w-[354px] flex flex-col items-center justify-center gap-[40px]'>
        <h1 className='text-[30px] font-[family-name:var(--font-baloo2)] font-bold font-bold'>A Program Built on World-Class Learning Standards</h1>
        <p className='text-[#666666] semi-bold '>Our curriculum draws inspiration from some of the world's most respected education models, ensuring that every learner is prepared for life, not just school. </p>
            <div className='flex items-center space-x-3 w-full justify-start whitespace-nowrap md:justify-center' >
                     <button className='bg-[#1A94D2] reuseable-button   text-white '>
                        <span className='flex gap-4 items-center group justify-center text-white'>Talk to Us
                            <WhiteRightarrowSvg /> 
                          </span>
                       </button>
                      </div>
                    <div>
                    <Image
                    src="/gap-page/Image_fx - 2025-10-22T140529.383 3.png"
                    height={588}
                    alt=''
                    width={354}
                    className='rounded-2xl '
               />
          </div>
             <section className="flex flex-col gap-[40px] xl:gap-[24px] xl:flex-row  ">
                                {GapFEat.map((activity, index) => (
                                  <div
                                     key={index}
                                      style={{background:activity.color}}
                                        className=" bg-[#00914780] py-[20.67px] px-[41.34px] flex-col w-[353.9px]  flex items-center justify-center xl:w-[383px]
                                           rounded-[24px] text-start "
                                            >
                                            <h3 className="font-bold text-[#101010] w-[258px] text-[24px]">{activity.title}</h3>
                
                                    <p className="text-black/70 w-[258px] xl:w-[320px] leading-relaxed mt-2">
                                      {activity.paragraph}
                                    </p>
                                 </div>
                            ))}
                </section>
           </div>
 </section>
    <section className='flex flex-col justify-center items-center hidden md:flex p-[40px] gap-[40px]'>
    <div className='w-[1200px] flex flex-col items-center justify-center gap-[40px]'>

       <div className='flex items-center gap-[300px] '>
           <h1 className='text-[30px] text-[48px] font-[family-name:var(--font-baloo2)] font-bold  font-bold w-[469px]'>A Program Built on World-Class Learning Standards</h1>
       <div className='w-[418px] flex flex-col items-start justify-center gap-[25px]'>
        <p className='text-[#666666] semi-bold text-[18px] '>Our curriculum draws inspiration from some of the world's most respected education models, ensuring that every learner is prepared for life, not just school. </p>
            <div className='flex items-center space-x-3 w-full justify-start ' >
                     <button className='bg-[#1A94D2] reuseable-button   text-white '>
                        <span className='flex gap-4 items-center group justify-center text-white'>Talk to Us
                            <WhiteRightarrowSvg /> 
                          </span>
                       </button>
                      </div>
       </div>
           </div>
                    <div>
                   
                <Image
                    src="/gap-page/Image_fx - 2025-10-22T140529.383 3(1).png"
                    height={588}
                    alt=''
                    width={1200}
                    className='rounded-2xl hidden md:flex'
               />
          </div>
             <section className="grid grid-cols-2 grid-row-2 gap-[40px] relative p-[120px] rounded-[24px] top-[-145px] bg-white xl:gap-[24px] xl:flex-row  ">
                                {GapFEat.map((activity, index) => (
                                  <div
                                    key={index}
                                    style={{background:activity.color}}
                                    className=" bg-[#00914780] py-[20.67px] px-[41.34px] flex-col w-[353.9px]  flex items-center justify-center xl:w-[383px]
                                     rounded-[24px] text-start "
                                  >
                                    <h3 className="font-bold text-[#101010] w-[258px] text-[24px]">{activity.title}</h3>
                
                                    <p className="text-black/70 w-[258px] xl:w-[320px] leading-relaxed mt-2">
                                      {activity.paragraph}
                                    </p>
                                  </div>
                                ))}
                              </section>
    </div>
 </section>
   </>
  )
}

export default WorldClass
