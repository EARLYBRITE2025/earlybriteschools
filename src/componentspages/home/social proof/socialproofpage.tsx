import React from 'react'
import Image from 'next/image'
const Socialproofpage = () => {
  return (
    <main className='bg-[#00914721] w-full py-10 flex items-center justify-center '>
        <section className='bg-[#F9BB1E]  h-[688px] md:h-[918px]  md:w-[1200px] flex-col rounded-2xl flex items-center w-[322px]'>
            <div className='text-[#000000]  space-y-5 flex items-center justify-center pt-10 flex-col '>
                <h1 className='w-[282px] md:w-[504.99px] text-[33.42px] font-bold text-center text-[#000000] '>
                    What Our Students & Parents Say
                </h1>
                <p className='text-[14.85px] font-semibold w-[282px] text-center '>
                    See how Earlybrite has helped young people build skills, 
                    confidence, and a sense of purpose.
                </p>
                <div>
                    <div className='bg-white p-[8px] items-center  rounded-full gap-[14px] flex w-[192px] '>
                        <div className='bg-[#009147] flex justify-center items-center text-[#FFFFFF]
                        px-[18px] py-[8px] text-[20px] w-[99px] rounded-full'>
                            Videos
                        </div>
                        <div className='text-[#999999] text-[20px]'>
                            Text
                        </div>
                    </div>
                </div>
                <div className="relative inline-block w-full  ">
  {/* Background image */}
  <Image
    src="/images/socialcenter-1.png"
    width={282}
    height={276}
    alt="socialcenter.image"
    className="rounded-2xl md:hidden"
  />
  <Image
    src="/images/Company Intro Video.png"
    width={1080}
    height={491}
    alt="socialcenter.image"
    className="rounded-2xl md:flex hidden  object-fit"
  />
  {/* Centered YouTube icon */}
  <Image
    src="/images/Youtube.svg"
    width={60}
    height={60}
    alt="youtube.logo"
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
  />
</div>


        
        </div>
        </section>

    </main>
  )
}

export default Socialproofpage
