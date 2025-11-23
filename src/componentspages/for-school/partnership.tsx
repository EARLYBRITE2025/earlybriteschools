import React from 'react'
import { partnershipsforSchool } from '../layouts/constants/constants'
import Image from 'next/image'
const Partnership = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center p-[40px] md:hidden'>
      <section className='flex text-center gap-[16px] w-[354px] items-center justify-center flex-col'> 
        <h1 className='text-[30px]  font-[family-name:var(--font-baloo2)] font-bold '>How Our Partnership Works</h1>
        <p className='w-[334px] text-center'>We make collaboration straightforward. Whether you are a nursery, secondary, or
             international school, Earlybrite adapts each program to fit your structure and timetable.</p>
             <section className='flex flex-col items-start justify-center w-full gap-[40px] z-[20]'>
                {partnershipsforSchool.map((activity, index) => (
                                  <section key={activity.id} style={activity.style} className=' w-full gap-[16px]'> 
                                          <div
                                          key={index}
                                          style={{background:activity.color}}
                                          className=" bg-[#00914780]  p-[24px] gap-[16px]  items-start justify-center flex flex-col  xl:w-[383px] rounded-[24px]  "
                                        >
                
                                   <h3 style={{color:activity.textColor}} className="font-bold text-[#101010] text-start w-[234px] text-[24px]">{activity.title}</h3>
                                   <h3 className='text-start text-[24px] 'style={{color:activity.textColor}}>{activity.description} </h3>
                      
                                 <p style={{color:activity.subText, }} className="text-black/70 w-[234px] text-start xl:w-[320px] leading-relaxed mt-2">
                                     {activity.paragraph}
                             </p>
                          </div>
                                  </section>
                ))}
 <div className='relative w-full flex items-center justify-center z-[-5] md:hidden'>   
                 <Image
                src="/for-school/Vector 5.png"
                width={155}
                height={190}
                alt=''
                className='absolute top-[-880px]'
                />
            </div>
             </section>
           
      </section>
    </div>
  

    <div className='flex flex-col items-center justify-center p-[40px] hidden md:flex '>
      <section className='flex text-center gap-[16px] w-[354px] items-center justify-center flex-col'> 
        <h1 className='text-[30px] w-[820px]  font-[family-name:var(--font-baloo2)]  font-bold xl:text-[48px] '>How Our Partnership Works</h1>
        <p className='w-[820px] text-[18px]  text-center'>We make collaboration straightforward. Whether you are a nursery, secondary, or
             international school, Earlybrite adapts each program to fit your structure and timetable.</p>
             <section className='flex items-start justify-center w-full gap-[40px] z-[20]'>
                {partnershipsforSchool.map((activity, index) => (
                                  <section key={activity.id}  className=' w-full gap-[16px]'> 
                                          <div
                                          key={index}
                                          style={{background:activity.color}}
                                          className=" bg-[#00914780]  p-[24px] gap-[16px] h-[214px] items-start justify-center flex-flex-col  xl:w-[282px] rounded-[24px]  "
                                        >
                
                                   <h3 style={{color:activity.textColor}} className="font-bold text-[#101010] text-start w-[234px] text-[24px]">{activity.title}</h3>
                                   <h3 className='text-start text-[24px] 'style={{color:activity.textColor}}>{activity.description} </h3>
                      
                                 <p style={{color:activity.subText, }} className="text-black/70 w-[234px] text-start xl:w-[234px] leading-relaxed mt-2">
                                     {activity.paragraph}
                             </p>
                          </div>
                                  </section>
                ))}
 <div className='relative w-full flex items-center justify-center z-[-5]'>   
                 <Image
                src="/for-school/Vector 5(1).png"
                width={142}
                height={190}
                alt=''
                className='relative top-[0px] '
                />
            </div>
             </section>
           
      </section>
    </div>
    </>
  )
}

export default Partnership
 