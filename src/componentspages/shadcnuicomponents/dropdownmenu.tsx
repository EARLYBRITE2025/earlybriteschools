'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const Dropdownmenu = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
      <DropdownMenu open={open} onOpenChange={setOpen}>
  <DropdownMenuTrigger className='flex items-center gap-2 hover:text-blue-300 transition' 
    onMouseEnter={() => setOpen(true)}
 onMouseLeave={() => setOpen(false)}>Programs
  <Image 
  src="/images/arrow-down-01.svg"
  alt='down svg'
  width={20}
  height={20}
  
  /></DropdownMenuTrigger>
  <DropdownMenuContent 
   onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}
    
     align="start" 
      className="bg-white border border-gray-200 shadow-md rounded-md"
    >
    <DropdownMenuItem 
    className="hover:text-blue-700 cursor-pointer"
    >The Elite Mentorship Programme[TEMP]
    </DropdownMenuItem>

    <DropdownMenuItem className="hover:text-blue-500 cursor-pointer">
        Global Innovation Trek [GIT]</DropdownMenuItem>
    <DropdownMenuItem className="hover:text-blue-500 cursor-pointer">
        Immaginarium</DropdownMenuItem>
    <DropdownMenuItem className="hover:text-blue-500 cursor-pointer">
        Summer School</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
    </div>
  )
}

export default Dropdownmenu
 