import React from 'react'
import { GapSponsors } from '../layouts/constants/constants'
const Sponsors = () => {
  return (
    <>
    <section className='bg-[#00914780]   h-[207px] flex items-center justify-center hidden '>
        <h1 className='text-[#101010CC]'>Brands who trust us</h1>
        {GapSponsors.map((item, index) => (
            <div
              key={index}
              className="flex items-center  justify-center"
            >
              <img
                src={item?.logo}
                alt={item?.value}
                className="w-[48.46px] h-[48.46px] rounded-full bg-white p-[10px] object-cover "
              />
              <h3  className="text-[22.28px]  font-bold mt-4">{item?.value}</h3>
              
        
            </div>
             ))}

    </section>
    </>
  )
}

export default Sponsors
