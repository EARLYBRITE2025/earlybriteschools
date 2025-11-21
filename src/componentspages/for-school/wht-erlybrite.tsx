import React from 'react'
import { WhiteRightarrowSvg } from '../../../public/svg/constants'
import Image from 'next/image'
import { forSchool } from '../layouts/constants/constants'
const WorldClassSchool = () => {
  return (
   <>
   <section className='flex flex-col justify-center items-center  p-[40px] gap-[40px] '>
    <div className='w-[354px] flex flex-col items-center justify-center gap-[40px]'>
        <h1 className='text-[30px]  text-center font-[family-name:var(--font-baloo2)] xl:text-[48px] xl:w-[820px] font-bold'>Why Schools Partner with Earlybrite</h1>
        <p className='text-[#666666] semi-bold  text-center xl:w-[820px]'>Earlybrite makes it easy for schools to bring innovation and creativity into the classroom. Our programs help students think critically, solve problems, and lead with confidence. </p>
            
                    
             <section className="flex flex-col gap-[40px] xl:gap-[16px] xl:flex-row  ">
                                {forSchool.map((activity, index) => (
                                  <div
                                     key={index}
                                      style={{background:activity.color}}
                                        className=" bg-[#00914780] py-[24px] h-[169px] flex-col w-[353.9px] flex items-start px-[24px] justify-center xl:w-[282px]
                                           rounded-[16px] text-start "
                                            >
                                            <h3 className="font-bold text-[#101010]  w-[234px]  font-[family-name:var(--font-baloo2)] xl:w-[234px] text-[32px]">{activity.title}</h3>
                
                                    <p className="text-[#000000] text-[18px]  w-[234px]  leading-relaxed ">
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

export default WorldClassSchool
