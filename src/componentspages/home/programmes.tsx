import React from 'react'
import { featureCards } from '../layouts/constants/constants'
const Programmes = () => {
  return (
   <>
    <section className='flex flex-col mt-10 gap-5 justify-center pt-20 pb-20 items-center space-y-3 w-full
     gradient md:hidden  md:px-10  '>
        <h1 className='text-[27.44px] font-bold '>
            Programs Overview
        </h1>
         <div className='md:space-x-10 md:flex md:items-center md:justify-center md:pl-200  space-y-5  '>
              {featureCards.map((card) => (
        <div
          key={card.id}
          className="bg-white  rounded-2xl h-[603px] shadow-md w-[353px] gap-[24px]   hover:shadow-lg transition"
        >
          <img src={card.image} alt={card.title} className="w-[418px] h-[275px] object-cover" />
         

          <div className="p-4 max-h-[189.79px]">
            <h3 className="text-[24px] font-bold mb-2 w-[303px]">{card.title}</h3>
             <p className='text-[#B1B1B1]'>{card.age}</p>

            <p className="text-gray-600 mb-4">{card.description}</p>
        
            <button className="button bg-[#1A94D2]">
              {card.buttonText}
            </button>
          </div>
        </div>
      ))}
         </div>

    </section>
    {/*for larger screens*/}
    <section>
          <section className=' hidden md:flex  flex-col  gap-5 justify-center pt-20 pb-20 items-center space-y-3 w-full
     md:bg-[#F2F2F2] md:overflow-x-auto md:px-10  '>
        <h1 className='text-[27.44px] font-bold '>
            Programs Overview
        </h1>
         <div className='md:space-x-10 md:flex md:items-center md:justify-center md:pl-200  space-y-5  '>
              {featureCards.map((card) => (
        <div
          key={card.id}
          className="bg-white  rounded-2xl h-[603px] shadow-md w-[353px] gap-[24px]   hover:shadow-lg transition"
        >
          <img src={card.image} alt={card.title} className="w-[418px] h-[275px] object-cover" />
         

          <div className="p-4 max-h-[189.79px]">
            <h3 className="text-[24px] font-bold mb-2 w-[303px]">{card.title}</h3>
             <p className='text-[#B1B1B1]'>{card.age}</p>

            <p className="text-gray-600 mb-4">{card.description}</p>
        
            <button className="button bg-[#1A94D2]">
              {card.buttonText}
            </button>
          </div>
        </div>
      ))}
         </div>

    </section>
    </section>
   </>
  )
}

export default Programmes
