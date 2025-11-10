'use client'
import React from 'react'
import Image from 'next/image'
import Dropdownmenu from '../shadcnuicomponents/dropdownmenu'
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
    <header>
        <nav className='flex items-center justify-between h-20    w-full'>
           <div className='pl-[24px]'>
             <Image 
            src="/images/early-logo.svg"
            alt='hero image'
            width={100}
            height={100}
            />
           </div>
           {/*this is for the center nav items*/}

            <div className='hidden md:flex '>
               <div className='flex items-center '>
                 <h3 className=''>
                    Schools
                    
                </h3>
                <Image
                 src="/images/star.svg"
            alt='hero image'
            width={50}
            height={50}
                />
               </div>
               <div>
                <span>Home</span>
                <span>About Us</span>
                <Dropdownmenu/>
               </div>
            </div>
            {/*this is for the mobile hamburger*/}
            <div className="sm:hidden pr-[24px]  " >
           
          <button className="flex flex-col justify-center items-center w-8 h-8 space-y-1 relative  z-[9999] sm:hidden" onClick={clicker} >
            <span className={`block w-5 h-0.5 bg-black  z-100 transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} ></span>
  <span className={`block w-5 h-0.5 bg-black  transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
  <span className={`block w-5 h-0.5 bg-black  transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
     </button>
        </div>


        </nav>
    </header>
  )
}

export default Navbar
