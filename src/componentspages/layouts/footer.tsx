import React from 'react'
import { LogoSvg, LocationSvg,MailSvg } from '../../../public/svg/constants'
const Footer = () => {
  return (
    <>
    <footer className='bg-gradient-to-r from-[#E1F5FE] py-[40px] px-[24px] w-full to-[#FFF0CC] flex items-center justify-center flex-col  '>
        <div className='h-[954px] bg-[#FFFFFF80] xl:w-[1200px] xl:h-[304px] w-[358px] rounded-2xl py-[40px] px-[47px] gap-[90px] flex flex-col xl:flex-row'>
            <div className='flex flex-col items-start justify-center gap-[32px] w-[264px] '>
                <LogoSvg/>
                <p className='w-[255px] text-left xl:w-[486px]'>
                    At Earlybrite, we help young learners build confidence, creativity, and the skills to thrive in a changing world.
                     Our programs combine curiosity-driven learning with practical knowledge that prepares every child for what's ahead.
                </p>
            </div>
            <section className='flex flex-col items-start justify-start gap-[20px] w-full w-[313px]  xl:flex-row xl:w-full xl:justify-end xl:gap-[90px]'>
                <nav className=''>
                    <ul className='text-[#101010CC] flex flex-col gap-[24px] '>
                        <span className='text-[#000000] text-[18px] font-bold'>Navigation</span>
                       <div className='flex flex-col gap-[16px]' >
                         <li >Home</li>
                        <li>Programs</li>
                        <li>About </li> 
                        <li>Contact Us</li>
                       </div>
                    </ul>
                </nav>
                <nav>
                    <ul className='text-[#101010CC] flex flex-col gap-[24px] '>
                        <span className='text-[#000000] text-[18px] font-bold'>Get In Touch</span>
                        <div className='flex flex-col gap-[16px]'>
                            <li className='flex items-center'> <LocationSvg/> Lekki, Lagos, Nigeria.</li>
                        <li className='flex items-center'> <MailSvg/>hello@earlybrite.com</li>
                        </div>
                        
                    </ul>
                </nav>
                <nav>
                    <ul className='text-[#101010CC] flex flex-col gap-[24px] '>
                        <span className='text-[#000000] text-[18px] font-bold'>Follow Us</span>
                       <div className='flex flex-col gap-[16px]' >
                         <li>LinkedIn</li>
                        <li>Instagram</li>
                        <li>FaceBook</li>
                        <li>YouTube</li>
                       </div>
                    </ul>
                </nav>
                <span className='md:hidden'>© 2025 Earlybrite. All rights reserved.</span>
            </section>

        </div>
    </footer>
    </>
  )
}

export default Footer
