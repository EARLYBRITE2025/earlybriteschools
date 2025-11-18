import React from 'react'
import { Faqs } from '../shadcnuicomponents/accordion'
const Faq = () => {
  return (
  <section className='flex items-center flex-col justify-center'>
      <div className='flex flex-col items-center gap-[40px] xl:w-[1130px] justify-center p-[40px]'>
        <div className='w-[322px] flex flex-col gap-[16px] items-center justify-center xl:w-[720px] text-center '> 
            <h1 className='font-bold text-[36px] font-[family-name:var(--font-baloo2)] xl:w-[full]'>Frequently Asked Questions</h1>
            <span className='text-[#666666]'>Quick answers to help your team unlock full collaboration.</span>
        </div>
      <Faqs/>
    </div>
  </section>
  )
}

export default Faq