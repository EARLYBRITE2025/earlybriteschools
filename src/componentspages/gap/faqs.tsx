import React from 'react'
import { GapFaqs } from '../shadcnuicomponents/accordion-gap'

const Faqs = () => {
  return (
    <section className='w-full py-16 flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className='flex flex-col items-center gap-10'>
        <div className='text-center max-w-[720px]'>
          <h1 className='font-bold text-[30px] xl:text-[36px] font-[family-name:var(--font-baloo2)]'>
            Frequently Asked Questions
          </h1>
          <p className='text-[#666666] mt-4'>
            Get answers to how GAP builds your child&apos;s maturity, skills, and readiness for university.
          </p>
        </div>
        <div className='w-full max-w-[1130px]'>
          <GapFaqs />
        </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs
