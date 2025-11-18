import React from 'react'
import Image from 'next/image'
const ChildGain = () => {
  return (
    <section className='bg-gradient-to-r from-[#E1F5FE] to-[#FFF0CC] font-[family-name:var(--font-baloo2)] flex p-[40px] flex-col items-center justify-center'>
        <div className='flex flex-col xl:flex-row items-center justify-center gap-[40px] xl:w-[1200px] xl:justify-between xl:items-center  '>
          <div className='items-center flex flex-col justify-center gap-[40px]'>
              <h1 className='text-[#000000] xl:w-[442px] xl:text-[44.56px] text-[36px] w-[322px] font-bold '>What Your Child Gains</h1>
       
        <ul className='space-y-3 w-[322px]  xl:w-[442px] text-[#FFFFFF] flex t flex-col '>
            <li className='h-[30px] bg-[#1A94D2] xl:rounded-lg xl:h-[70px] xl:w-[442px] xl:p-[24px] justify-center flex items-center'> Global confidence and independence</li>
            <li className='h-[58px] bg-[#1A94D2]  xl:rounded-lg xl:h-[70px] xl:w-[442px] xl:p-[24px]  justify-center flex items-center '><div className='w-[252px] '>Real-world problem-solving and innovation skills</div></li>
            <li className='h-[30px] bg-[#1A94D2]  xl:rounded-lg xl:h-[70px] xl:w-[442px] xl:p-[24px]  justify-center flex items-center'><div className='w-[252px]' >Cultural awareness and empathy</div></li>
            <li className='h-[30px] bg-[#1A94D2]  xl:rounded-lg xl:h-[70px] xl:w-[442px] xl:p-[24px]  justify-center flex items-center'>Global confidence and independence</li>
            <li className='h-[30px] bg-[#1A94D2]  xl:rounded-lg xl:h-[70px] xl:w-[442px] xl:p-[24px]  justify-center flex items-center'>Global confidence and independence</li>
        </ul>
          </div>
        <Image
        src="/images/gains-mobile.png"
        width={322}
        height={254.85}
        alt=''
        className=' md:hidden'
        />
         <Image
        src="/images/gains.png"
        width={657}
        height={473}
        alt=''
        className='hidden md:flex rounded-2xl'
        />

 </div>
    </section>
  )
}

export default ChildGain
