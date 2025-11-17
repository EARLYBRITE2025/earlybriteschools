import React from 'react'
import { WhiteRightarrowSvg } from '../../../public/svg/constants'

const Vision = () => {
  return (
    <div className="flex flex-col items-center justify-center 
        p-[24px] md:p-[40px] gap-[16px] md:gap-[24px] xl:gap-[32px]">

      {/* TITLE */}
      <h1 className="text-[28px] md:text-[36px] xl:text-[42px] font-bold text-center">
        The Vision
      </h1>

      {/* PARAGRAPH */}
      <p className="text-[16px] md:text-[18px] text-[#666666] 
         w-[320px] md:w-[600px] xl:w-[900px] text-center leading-[1.6]">
        The world is changing fast, and you deserve to see it for yourself.
        The Global Innovation Trek is a 20-day summer experience designed for
        ambitious teenagers who want to see the world differently.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col md:flex-row items-center justify-center 
          gap-[12px] md:gap-[20px] w-full">

        <button className="bg-[#F9BB1E] reuseable-button">
          Apply For GIT
        </button>

        <button className="bg-[#1A94D2] reuseable-button text-white">
          <span className="flex gap-4 items-center group justify-center text-white">
            Talk to Us <WhiteRightarrowSvg />
          </span>
        </button>

      </div>
    </div>
  )
}

export default Vision
