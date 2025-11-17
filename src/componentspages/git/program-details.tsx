import React from 'react'
import { programDetails } from '../layouts/constants/constants'
const ProgramDetails = () => {
  return (
    <section className='bg-white flex flex-col'>
        <h1 className='text-black '>Program Details</h1>
        <div>
            {programDetails.map((item, index) => (
  <div key={index} className="p-4 border rounded-xl bg-white">
    <h3 className="font-semibold text-lg">{item.title}</h3>

    {Array.isArray(item.value) ? (
      <ul className="mt-2 space-y-1">
        {item.value.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    ) : (
      <p className="mt-2">{item.value}</p>
    )}
  </div>
))}
        </div>
    </section>
  )
}

export default ProgramDetails

