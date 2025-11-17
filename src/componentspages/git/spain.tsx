import React from 'react'
import Image from 'next/image'
    import { Check } from '../../../public/svg/constants'
    import { WhiteRightarrowSvg } from '../../../public/svg/constants'
const Spain = () => {
  return (
    <>
   
       
        
       <main className='xl:bg-[#F2F2F2] xl:flex xl:items-center xl:justify-center xl:px-[120px] xl:py-[60px] '>
            <section className='bg-[#FFE5A2] flex items-center xl:w-[1200px] p-[45px] xl:gap-[45px] xl:rounded-xl gap-[120px] md:hidden xl:h-[690px]'>
             <div className=' flex items-start  h-auto w-[402]   justify-start  flex-col gap-[30px]
              xl:w-[1440px]  xl:w-[583px] xl:h-[577px]
             '>
              <h1 className='text-[36px] font-[family-name:var(--font-baloo2)]  xl:w-[583px] text-start text-black font-bold'>
                <span className='text-[#009147] font-bold'>Spain:</span>The Fusion of Technology</h1>
              <p className='w-[322px] text-start text-black font-bold  text-[18px] xl:w-[583px]'>
                Barcelona - Innovation and Design Thinking
            </p>
        <p className='w-[322px] text-start text-[18px] text-black xl:w-[583px]'>
     
           Next, you arrive in Barcelona, a city that blends creativity with cutting-edge technology.
          This is where you will learn how ideas become real solutions.
        </p>
        <div className='flex flex-col text-start text-black gap-[18px] w-[322px] '>
            <span className='flex gap-[22px]'><Check/>Take part in a Design Thinking workshop that teaches you how to solve problems with creativity and collaboration.</span>
            <span className='flex item-center gap-[22px] '><Check/>Visit a sports tech center and see how technology shapes modern football, from player performance to fan experience.</span>
            <span className='flex justify-center gap-[22px]'><Check/>Discover Spain's role in global innovation, from renewable energy to fashion technology.</span>
        </div>
        
             <div className='flex items-center w-[322px]  xl:w-[583px]  space-x-3 xl:items-start justify-start whitespace-nowrap md:items-center' >
                <button className='bg-[#1A94D2] reuseable-button text-white '><span className='flex gap-4 items-center group justify-center text-white'>Talk to Us <WhiteRightarrowSvg /> </span></button>
                </div>
                  <div className='md:hidden  '>
                <Image
                src="/images/spain-small.png"
                alt=''
                height={428.130156}
                width={428.1361389160156}
                className='rounded-xl'
                />
                
               
            </div>
            </div>
    
             <div className=' h-full w-full hidden xl:flex '>
                <Image
                src="/images/spain-large.png"
                alt=''
                height={684}
                width={684}
                className='object-cover w-full h-full rounded-xl'
                />

            </div>
           </section>
       </main>
       {/*for xl screens*/}
        
   <main className="xl:bg-[#F2F2F2] hidden md:flex items-center justify-center xl:px-[120px] ">

  <section className="bg-[#FFE5A2] flex flex-col md:flex-row items-center 
                      xl:w-[1200px] p-[45px] gap-[45px] xl:gap-[45px] hidden md:flex
                      xl:rounded-xl xl:h-[690px]">

    {/* IMAGE - always first on md & xl */}
    <div className="w-full md:w-1/2 flex justify-center">
      <Image
        src="/images/spain-large.png"
        alt=""
        height={684}
        width={684}
        className="object-cover w-full h-full rounded-xl"
      />
    </div>

    {/* TEXT - always second on md & xl */}
    <div className="flex flex-col gap-[30px] text-black 
                    w-[322px] md:w-[400px] xl:w-[583px]">

      <h1 className="text-[36px] font-[family-name:var(--font-baloo2)] font-bold">
        <span className="text-[#009147] font-bold">Spain:</span> The Fusion of Technology
      </h1>

      <p className="text-[18px] font-bold">
        Barcelona - Innovation and Design Thinking
      </p>

      <p className="text-[18px] leading-relaxed">
        Next, you arrive in Barcelona, a city that blends creativity with 
        cutting-edge technology. This is where you will learn how ideas become 
        real solutions.
      </p>

      <div className="flex flex-col items-start  justify-start  gap-[18px] text-[18px]">
        <span className="flex items-start justify-start gap-[10px]">
           Take part in a Design Thinking workshop that teaches you how to solve 
          problems with creativity and collaboration.
        </span>

        <span className="flex items-start justify-start gap-[10px]">
           Visit a sports tech center and see how technology shapes modern 
          football, from player performance to fan experience.
        </span>

        <span className="flex items-start justify-start ">
           Discover Spain's role in global innovation, from renewable energy 
          to fashion technology.
        </span>
      </div>

      <div className="flex items-start">
        <button className="bg-[#1A94D2] reuseable-button text-white">
          <span className="flex gap-4 items-center group justify-center text-white">
            Talk to Us <WhiteRightarrowSvg />
          </span>
        </button>
      </div>

    </div>

  </section>
</main>

        </>
    
  )
}

export default Spain
