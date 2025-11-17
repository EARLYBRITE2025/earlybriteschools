import React from 'react'
import Image from 'next/image'
import { activities } from '../layouts/constants/constants'
const SideAttraction = () => {
  return (
   <>
   <main className='flex items-center justify-center xl:py-[60px]'> 
    <div className='flex items-center text-center justify-center flex-col w-[322px] gap-[40px] '>
     <div className='flex flex-col gap-[16px]'>
           <h1 className='text-[#101010] text-[36px] xl:text-[48px] font-[family-name:var(--font-baloo2)] font-bold'>Side Attractions</h1>
        <p className='text-[#666666] text-[18px] xl:w-[764px]'>The Global Innovation Trek isn't only about learning in workshops or classrooms. It's a well-rounded experience that builds character,
             curiosity, and cultural appreciation through guided activities designed for safety and joy.</p>
     </div>
 <button className='bg-[#F9BB1E] reuseable-button'>Apply For GIT</button>
 <div>
     <Image
  src="/images/image.png"
  width={513.2271118164062}
  height={513.2271118164062}
  alt=''
  className='rounded-xl'
  />
 </div>
  <div>
    <section className="w-full flex flex-col  gap-6">
      {activities.map((activity, index) => (
        <div
          key={index}
          className="bg-[#C9EDFF] p-6 rounded-xl text-start shadow-sm"
        >
          <h3 className="font-bold font-[family-name:var(--font-baloo2)] ">{activity.title}</h3>

          <p className="text-black/70 leading-relaxed mt-2">
            {activity.description}
          </p>
        </div>
      ))}
    </section>
  </div>
    </div>

   </main>
   </>
  )
}

export default SideAttraction
