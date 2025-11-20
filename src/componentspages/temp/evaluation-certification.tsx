import React from 'react'

const EvaluationCertification = () => {
  const dimensions = [
    'Digital Fluency and Collaboration',
    'Creativity and Innovation',
    'Leadership and Adaptability',
    'Social and Emotional Growth',
    'Global Citizenship Mindset'
  ]

  return (
    <section className='w-full py-16 bg-white flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className='max-w-[1200px] mx-auto bg-[#0F151E] rounded-[24px] p-8 xl:p-12'>
        <div className='flex flex-col xl:flex-row gap-10 items-center'>
          {/* Left - Text Content */}
          <div className='flex-1 text-white'>
            <h2 className='text-[36px] xl:text-[48px] font-[family-name:var(--font-baloo2)] font-bold mb-6'>
              Evaluation & Certification
            </h2>

            <p className='text-[16px] xl:text-[18px] mb-4 text-gray-300'>
              Every TEMP learner is guided and assessed using global standards that measure real growth and not just academic results.
            </p>

            <p className='text-[16px] xl:text-[18px] mb-6 text-gray-300'>
              Throughout the program, learners are evaluated based on five key dimensions:
            </p>

            <ul className='space-y-3 mb-8'>
              {dimensions.map((dimension, index) => (
                <li key={index} className='flex items-start text-[16px] xl:text-[18px]'>
                  <span className='mr-3 text-[#F9BB1E]'>•</span>
                  <span>{dimension}</span>
                </li>
              ))}
            </ul>

            <p className='text-[16px] xl:text-[18px] mb-8 text-gray-300'>
              Graduates receive the TEMP Certificate of Excellence, endorsed by mentors and partner institutions, recognized globally.
            </p>

            <div className='flex items-center gap-4 flex-wrap'>
              <button className='bg-[#F9BB1E] text-black px-8 py-3 rounded-full font-semibold'>
                Join TEMP
              </button>
              <button className='bg-[#1A94D2] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2'>
                Speak With Advisor
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right - Icon Grid (placeholders) */}
          <div className='flex-shrink-0'>
            <div className='grid grid-cols-2 gap-4'>
              {/* Row 1 */}
              <div className='w-[120px] h-[120px] bg-gray-300 rounded-[20px]'></div>
              <div className='w-[120px] h-[120px] bg-gray-300 rounded-[20px]'></div>

              {/* Row 2 */}
              <div className='w-[120px] h-[120px] bg-gray-300 rounded-[20px]'></div>
              <div className='w-[120px] h-[120px] bg-gray-300 rounded-[20px]'></div>

              {/* Row 3 - Centered single item */}
              <div className='col-span-2 flex justify-center'>
                <div className='w-[120px] h-[120px] bg-gray-300 rounded-[20px]'></div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default EvaluationCertification
