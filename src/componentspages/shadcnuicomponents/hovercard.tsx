'use client'
import React from 'react'
import { DownarrowSvg } from '../../../public/svg/constants'
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card"

const HoverDropdown = () => {
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      {/* Add group so children can react to hover */}
      <HoverCardTrigger className="group flex items-center gap-2 hover:text-[#1A94D2] transition">
        Programs
        {/* Rotate the icon when parent is hovered */}
        <span className="transition-transform duration-300 group-hover:rotate-180 hover:text-[#1A94D2]">
          <DownarrowSvg />
        </span>
      </HoverCardTrigger>
      <HoverCardContent 
        align="start"
        className="bg-white border border-gray-200 shadow-md rounded-md p-2"
      >
        <div className="flex flex-col gap-2">
          <span className="hover:text-[#1A94D2] cursor-pointer">
            The Elite Mentorship Programme [TEMP]
          </span>
          <span className="hover:text-[#1A94D2] cursor-pointer">
            Global Innovation Trek [GIT]
          </span>
          <span className="hover:text-[#1A94D2] cursor-pointer">
            Immaginarium
          </span>
          <span className="hover:text-[#1A94D2] cursor-pointer">
            Summer School
          </span>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default HoverDropdown
