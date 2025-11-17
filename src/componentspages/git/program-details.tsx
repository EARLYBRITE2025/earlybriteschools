import React from 'react'
import { programDetails } from '../layouts/constants/constants'
const ProgramDetails = () => {
  return (
    <section className='bg-white flex flex-col items-center p-[40px] justify-center'>
        <h1 className='text-black text-[36px] font-[family-name:var(--font-baloo2)] font-bold'>Program Details</h1>
        <div className=' xl:grid xl:grid-cols-3 xl:grid-rows-2 gap-4'>
            {programDetails.map((item, index) => (
  <div key={index} className="bg-[#F2F2F2] h-[134.82px] gap-[6.82px] xl:h-[204px] font-[family-name:var(--font-baloo2)] px-[24px]
   items-start justify-center flex flex-col mt-3 rounded-xl w-[322px]
  
   ">
    <h3 className="font-bold text-[24px] xl:text-[40px]">{item.title}</h3>

    {Array.isArray(item.value) ? (
      <ul className="">
        {item.value.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    ) : (
      <p className="text-[#666666] text-[18px]">{item.value}</p>
    )}
  </div>
))}
        </div>
    </section>
  )
}

export default ProgramDetails

