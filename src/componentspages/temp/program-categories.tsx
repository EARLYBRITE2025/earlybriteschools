import React from 'react'

const ProgramCategories = () => {
  const categories = [
    {
      title: 'TEMP Start (Ages 11–14)',
      subtitle: 'Discover · Grow · Create',
      description: 'At this stage, curiosity meets guidance. Learners explore creativity, collaboration, and problem-solving through fun digital and social learning experiences that build early leadership traits.',
      outcomeTitle: 'Outcome:',
      outcome: 'Confidence, curiosity, and the courage to express ideas.',
      buttonText: 'Join TEMP Start',
      bgColor: '#BAE6FC',
      buttonColor: '#1A94D2'
    },
    {
      title: 'TEMP Accelerate (Ages 15–19)',
      subtitle: 'Focus · Build · Lead',
      description: 'Here, direction becomes clarity. Learners refine their skills, explore career pathways, and develop leadership abilities for university, entrepreneurship, or professional life.',
      outcomeTitle: 'Outcome:',
      outcome: 'Career clarity, project experience, and readiness for higher education.',
      buttonText: 'Join TEMP Accelerate',
      bgColor: '#7FB685',
      buttonColor: '#059669'
    },
    {
      title: 'TEMP Diaspora (Ages 12–24)',
      subtitle: 'Connect · Evolve · Belong',
      description: 'TEMP Diaspora is designed for African youth living abroad or in multicultural environments. Learners strengthen identity, communication, and adaptability while staying rooted in their African heritage.',
      outcomeTitle: 'Outcome:',
      outcome: 'A balanced sense of self, global fluency, and belonging.',
      buttonText: 'Join TEMP Diaspora',
      bgColor: '#FFE5A2',
      buttonColor: '#F9BB1E'
    }
  ]

  return (
    <section className='w-full py-16 bg-[#F2F2F2] flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className='max-w-[1200px] mx-auto'>
        <div className='text-center mb-10'>
          <h2 className='text-[36px] xl:text-[48px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-4'>
            TEMP Program Categories
          </h2>
          <p className='text-[16px] xl:text-[18px] text-[#666666] max-w-[800px] mx-auto'>
            TEMP offers three unique learning journeys tailored to different stages of growth. Each category is designed to build confidence, expand capacity, and connect learners with global opportunities
          </p>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
          {categories.map((category, index) => (
            <div
              key={index}
              style={{ backgroundColor: category.bgColor }}
              className={`p-8 flex flex-col rounded-[24px] xl:rounded-none ${
                index === 0 ? 'xl:rounded-l-[24px]' :
                index === 2 ? 'xl:rounded-r-[24px]' :
                ''
              }`}
            >
              {/* Title */}
              <h3 className='text-[24px] xl:text-[28px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-2'>
                {category.title}
              </h3>

              {/* Subtitle */}
              <p className='text-[16px] font-semibold text-[#666666] mb-6'>
                {category.subtitle}
              </p>

              {/* Description */}
              <p className='text-[15px] text-black leading-relaxed mb-6 flex-1'>
                {category.description}
              </p>

              {/* Outcome */}
              <div className='mb-6'>
                <p className='text-[15px] font-bold text-black mb-1'>
                  {category.outcomeTitle}
                </p>
                <p className='text-[15px] text-black leading-relaxed'>
                  {category.outcome}
                </p>
              </div>

              {/* Button */}
              <button
                style={{ backgroundColor: category.buttonColor }}
                className='w-full text-white py-3 rounded-full font-semibold'
              >
                {category.buttonText}
              </button>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramCategories
