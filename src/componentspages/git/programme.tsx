import React from 'react'
import Image from 'next/image'
const Programme = () => {
  return (
   <section className='bg-[#0F151E] flex items-center gap-[120px]'>
     <div className='text-white flex items-center h-auto w-[402] justify-start justify-center flex-col p-[40px] gap-[30px]
      xl:w-[1440px]  xl:w-[583px] xl:h-[577px]
     '>
      <h1 className='text-[36px]  xl:w-[583px] text-start font-[family-name:var(--font-baloo2)] font-bold '>Program Overview</h1>
      <p className='w-[322px] text-start  text-[18px] xl:w-[583px]'>The Global Innovation Trek is an exclusive summer 
        experience for young people who want more than classroom learning. You will spend three weeks
       exploring Lisbon, Barcelona, and Paris, with each city offering something unique to learn and experience.
    </p>

<p className='w-[322px] text-start text-[18px] xl:w-[583px]'>
You will visit startups,develop your own business ideas, explore cultural landmarks, and learn how technology,
 art, and leadership connect. Along the way, you will meet new friends, share ideas that matter, and discover a deeper sense of purpose.
After the trip, your journey continues with the Elite Mentorship Program (TEMP). For 30 months, you will build digital fluency, global awareness, and the skills to turn your ideas into action.
Your passport takes you there.Your purpose keeps you growing.
</p>

<div className='flex items-center w-[322px]  xl:w-[583px]  space-x-3 xl:items-start justify-start whitespace-nowrap md:items-center' >
 <button className='bg-[#F9BB1E] reuseable-button'>Apply For GIT</button>
  </div>
   <div className='md:hidden '>
        <Image
        src="/images/programme-map.png"
        width={514}
        alt='programme.map'
        height={270}
        />
         <Image
        src="/images/mobile-programme.png"
        width={514}
        alt='programme.map'
        height={270}
        className='md:hidden'
        
        />
         <Image
        src="/images/programme-large.png"
        width={721}
        alt='programme.map'
        height={637}
        className='hidden md:flex object-cover'

        />
    </div>
    </div>
    <div className='md:hidden '>
        <Image
        src="/images/programme-map.png"
        width={514}
        alt='programme.map'
        height={270}
        />
         <Image
        src="/images/mobile-programme.png"
        width={514}
        alt='programme.map'
        height={270}
        className='md:hidden'
        
        />
         <Image
        src="/images/programme-large.png"
        width={721}
        alt='programme.map'
        height={637}
        className='hidden md:flex object-cover'

        />
    </div>
    <div className=' '>
        <Image
        src="/images/programme-map.png"
        width={514}
        alt='programme.map'
        height={270}
        />
       
         <Image
        src="/images/programme-large.png"
        width={721}
        alt='programme.map'
        height={637}
        className='hidden md:flex object-cover'

        />
    </div>
   
   </section>
  )
}

export default Programme
