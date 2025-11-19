import React from 'react'
import Image from 'next/image'
import { RightarrowSvg,WhiteRightarrowSvg } from '../../../public/svg/constants'
const Conclusion = () => {
  return (
    <>
    <section className='bg-[#0F151E] ] justify-center flex flex-col items-center justify-center md:hidden '>
       <div className='p-[40px] flex flex-col items-center justify-center'>
         <div className='w-[322px] text-[#FFFFFF] flex items-center gap-[16px] flex-col justify-center  font-bold'>
            <h1 className='text-[36px] '>Give your child an edge before university</h1>
            <p className='text-[18px]'>Many students enter higher education unsure of their purpose or direction. The Earlybrite Gap Year Program helps bridge that gap by equipping them with maturity, exposure, and clarity.</p>
        <p>Learners who complete the program often step into university life more confident, independent, and ready to lead.</p>
     
        </div>
       </div>
         <div>
            <Image
     src="/gap-page/Image_fx - 2025-11-10T055310.431 1.png"
     alt=''
     width={524}
     height={524}
     />
        </div>
    </section>

     <section className='bg-[#0F151E]  justify-center flex h-[554px] items-center justify-center hidden md:flex'>
          <div className=' flex  justify-between w-[1200px] '>
          <div className='relative h-[554px]'>

            <Image  
            src="/gap-page/Layer 1ds 1(4).png"
            width={603.83}
            height={462.643}
            alt=''
            className='h-full'
            />
                   <Image
     src="/gap-page/Image_fx - 2025-11-10T055310.431 1(1).png"
     alt=''
     width={590}
     height={590}
     className='top-[-548px] left-[70px] relative '
     />
        </div>
     
         <div className=' text-[#FFFFFF]  w-[539px] flex items-center gap-[16px] flex-col justify-center  '>
            <h1 className='text-[48px] font-bold font-[family-name:var(--font-baloo2)]  '>Give your child an edge before university</h1>
            <p className='text-[18px] text-[#FFFFFFCC]'>Many students enter higher education unsure of their purpose or direction. The Earlybrite Gap Year Program helps bridge that gap by equipping them with maturity, exposure, and clarity.</p>
        <p className='text-[18px] text-[#FFFFFFCC]'>Learners who complete the program often step into university life more confident, independent, and ready to lead.</p>
     <div className='flex items-center space-x-3 w-full justify-start whitespace-nowrap r' >
                       <button className='bg-[#1A94D2] reuseable-button   text-white '><span className='flex items-center justify-center gap-2'> Apply for Gap<WhiteRightarrowSvg/></span></button>
                               
                        <button className='bg-[#F9BB1E] reuseable-button text-black'><span className='flex items-center justify-center gap-2'> Talk to Us<RightarrowSvg/></span></button>
                    </div>
        </div>
       </div>
       
    </section>
    </>
  )
}

export default Conclusion
 