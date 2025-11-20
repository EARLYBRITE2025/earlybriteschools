import React from 'react'
import Image from 'next/image'
import { GapProgramme, LargeGapProgramme } from '../layouts/constants/constants'

const ProgramStructure = () => {
  return (
    <section className='w-full py-16 bg-[#FFE5A2] flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className='text-center mb-10'>
        <h1 className='text-[#101010] text-[30px] xl:text-[48px] font-[family-name:var(--font-baloo2)] font-bold'>
          Program Structure
        </h1>
      </div>

      {/* Mobile */}
      <div className='flex flex-col gap-6 md:hidden'>
        {GapProgramme.map((item, index) => (
          <div
            key={index}
            style={{ background: item.color }}
            className='p-6 rounded-xl shadow flex flex-col items-start'
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full bg-white p-2 object-cover"
            />
            <h3 style={{ color: item.textcolor }} className="text-[22px] font-bold mt-4">{item.title}</h3>
            <p style={{ color: item.textcolor }} className="text-[15px] mt-2">{item.paragraph}</p>
            <p style={{ color: item.textcolor }} className="text-[15px]">{item.subParagraph}</p>
            {item.list && (
              <ul className='mt-2'>
                <li style={{ color: item.textcolor }}>{item.list}</li>
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className='hidden md:grid grid-cols-2 gap-6'>
        {LargeGapProgramme.map((item, index) => (
          <div
            key={index}
            style={{ background: item.color }}
            className='p-6 rounded-xl shadow flex flex-col items-start'
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full bg-white p-2 object-cover"
            />
            <h3 style={{ color: item.textcolor }} className="text-[22px] font-bold mt-4">{item.title}</h3>
            <p style={{ color: item.textcolor }} className="text-[15px] mt-2">{item.paragraph}</p>
            <p style={{ color: item.textcolor }} className="text-[15px]">{item.subParagraph}</p>
            {item.list && (
              <ul className='mt-2'>
                <li style={{ color: item.textcolor }}>{item.list}</li>
              </ul>
            )}
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramStructure
