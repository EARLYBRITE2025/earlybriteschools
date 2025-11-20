import React from 'react'

const ProgramHighlights = () => {
  const highlights = [
    "3 week immersive experience",
    "Projects that build real skills",
    "Opportunities for group presentations",
    "Dedicated Tech Zone, Business Zone and Sports Arena",
    "Mega Festival Showcase. A celebration of learning and teamwork",
    "Certification of Completion included."
  ]

  return (
    <section className='w-full bg-[#BAE6FC] py-16 flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className='text-center max-w-[800px] mx-auto'>
        <h2 className='text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-4'>
          Program Highlights
        </h2>
        <p className='text-[#101010E5] text-[16px] mb-8'>
          Three weeks that make a real difference
        </p>

        {/* Highlights grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
          {highlights.map((highlight, index) => (
            <div key={index} className='bg-white rounded-lg p-4 flex items-start gap-3'>
              <div className='w-6 h-6 rounded-full bg-[#1A94D2] flex items-center justify-center flex-shrink-0 mt-0.5'>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 6H9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M6 3V9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <p className='text-black text-[14px] text-left'>{highlight}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramHighlights
