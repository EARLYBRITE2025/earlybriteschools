import React from 'react'
import { WhiteRightarrowSvg } from '../../../public/svg/constants'
import Image from 'next/image'
import { forSchool } from '../layouts/constants/constants'
const WorldClassSchool = () => {
  return (
   <>
   <section className='flex flex-col justify-center items-center  p-[40px] gap-[40px] '>
    <div className='w-[354px] flex flex-col items-center justify-center gap-[40px]'>
        <h1 className='text-[30px]  text-center font-[family-name:var(--font-baloo2)] xl:w-[820px] font-bold'>Why Schools Partner with Earlybrite</h1>
        <p className='text-[#666666] semi-bold  text-center xl:w-[820px]'>Earlybrite makes it easy for schools to bring innovation and creativity into the classroom. Our programs help students think critically, solve problems, and lead with confidence. </p>
            
                    
             <section className="flex flex-col gap-[40px] xl:gap-[16px] xl:flex-row  ">
                                {forSchool.map((activity, index) => (
                                  <div
                                     key={index}
                                      style={{background:activity.color}}
                                        className=" bg-[#00914780] py-[24px] h-[169px] flex-col w-[353.9px] p-[24px] flex items-center justify-center xl:w-[282px]
                                           rounded-[16px] text-start "
                                            >
                                            <h3 className="font-bold text-[#101010] w-[234px] xl:w-[234px] text-[24px]">{activity.title}</h3>
                
                                    <p className="text-black/70 w-[234px] xl:w-[234px] leading-relaxed ">
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
