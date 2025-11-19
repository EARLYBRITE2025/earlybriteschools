'use client'
import React from 'react'
import Image from 'next/image'
import { RightarrowSvg} from '../../../public/svg/constants'
import HoverDropdown from '../shadcnuicomponents/hovercard'
import { LogoSvg } from '../../../public/svg/constants'
import Link from 'next/link'
const Navbar = () => {
const[isOpen, setIsOpen] =React.useState(false)

  function clicker(){
    setIsOpen(prev=>!prev)
}
    React.useEffect(()=>{
if(isOpen) {
  document.body.classList.add("no-scroll")
}else{
  document.body.classList.remove("no-scroll")
}
return()=>{
  document.body.classList.remove("no-scroll")
}
  },[isOpen])
  return (
   <header className="xl:bg-gradient-to-r from-[#E1F5FE] h-[84px] to-[#FFF0CC]">
  <div className="xl:flex xl:items-center xl:justify-center">
    {/* Inner fixed-width container */}
    <nav className="w-full xl:w-[1202px] flex items-center justify-between px-5 xl:px-0 ">
      
      {/* Logo */}
      <div>
        <LogoSvg />
      </div>

      {/* Center nav items */}
      <div className="hidden md:flex gap-10 lg:gap-5 md:gap-5">
        <button className="flex items-center gap-3 bg-[#202D60] rounded-full text-white py-[12px] px-[24px] md:px-[20px] md:py-[10px] hover:bg-[#4A5DFF] transition-all duration-300">
          <h3>For Schools</h3>
          <Image
            src="/images/star.svg"
            alt="hero image"
            width={20}
            height={20}
            className="rotate"
          />
        </button>
        <div className="flex items-center gap-5 lg:gap-15">
          <Link href="#home" className="hover:text-[#1A94D2] transition-all duration-100">Home</Link>
          <Link href="#about" className="hover:text-[#1A94D2] transition-all duration-100">About Us</Link>
          <HoverDropdown />
        </div>
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <button
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1 relative z-[9999]"
          onClick={clicker}
        >
          <span className={`block w-5 h-0.5 bg-black transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-5 h-0.5 bg-black transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-black transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Contact */}
      <div className="contact">
        <Link href="#contact">
          <span className="flex gap-2 ">
            Contact Us <RightarrowSvg />
          </span>
        </Link>
      </div>
    </nav>
  </div>

  {/* Mobile menu */}
  {isOpen && (
    <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-[9998] pt-20 px-5">
      <div className="flex flex-col gap-6">
        <button className="flex items-center justify-center gap-3 bg-[#202D60] rounded-full text-white py-[12px] px-[24px] hover:bg-[#4A5DFF] transition-all duration-300">
          <h3>For Schools</h3>
          <Image
            src="/images/star.svg"
            alt="hero image"
            width={20}
            height={20}
            className="rotate"
          />
        </button>
        <Link href="#home" className="text-lg hover:text-[#1A94D2] transition-all duration-100" onClick={clicker}>Home</Link>
        <Link href="#about" className="text-lg hover:text-[#1A94D2] transition-all duration-100" onClick={clicker}>About Us</Link>
        <HoverDropdown />
        <Link href="#contact" className="text-lg hover:text-[#1A94D2] transition-all duration-100" onClick={clicker}>
          <span className="flex gap-2">
            Contact Us <RightarrowSvg />
          </span>
        </Link>
      </div>
    </div>
  )}
</header>

  )
}

export default Navbar
