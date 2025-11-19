import React from 'react'
import { Targets } from '../layouts/constants/constants'
const Target = () => {
  return (
   <section>
     <div className='p-[40px] bg-white items-center flex justify-center flex-col gap-[24px] '>
      <h1 className='text-[30px]  xl:text-[#000000] xl:text-[48px] xl:w-[260px] font-[family-name:var(--font-baloo2)] font-bold'>Who it is for</h1>
       <section className="flex flex-col gap-[40px] xl:gap-[24px] xl:flex-row  ">
                      {Targets.map((activity, index) => (
                        <div
                          key={index}
                          style={{background:activity.color}}
                          className=" bg-[#00914780] p-[32px] flex-flex-col items-start  space-y-[40px] xl:w-[383px] rounded-[24px] text-start "
                        >
                            <img src={activity.icon} alt="" className='p-5 bg-white rounded-full' />

                          <h3 className="font-bold text-[#101010] w-[258px] text-[24px]">{activity.title}</h3>
      
                          <p className="text-black/70 w-[258px] xl:w-[320px] leading-relaxed mt-2">
                            {activity.paragraph}
                          </p>
                        </div>
                      ))}
                    </section>
    </div>
   </section>
  )
}

export default Target
