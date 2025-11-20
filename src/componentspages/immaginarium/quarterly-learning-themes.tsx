import React from 'react'
import Image from 'next/image'

const QuarterlyLearningThemes = () => {
  const quarterIncludes = [
    "3 Monthly Themes: Progressive and interconnected",
    "Core Learning Goals: Cognitive, social, emotional, creative",
    "Global Inspirations: Proven learning models from around the world",
    "Experiential Highlights: Hands-on discovery and creation",
    "Showcase and Reflection Events"
  ]

  const quarter1Inspirations = [
    "Reggio Emilia (Italy): Art and material expression",
    "Kodomo-no-Kuni (Japan): Hands-on craft villages",
    "Scandinavian Outdoor Learning (Sweden & Denmark): Learning by doing",
    "STEAM Labs (USA & Finland): Early integration of art and science"
  ]

  const month1Highlights = [
    "Mini Makers Studio – Costumes, clay models, recycled art",
    "Material World – Fabric, paper, paint, found objects",
    "Creative Collaboration – Group murals and art projects",
    "Art Talk – Children describe their work"
  ]

  const month2Highlights = [
    "Body in Motion – Obstacle courses and movement games",
    "Team Spirit – Cooperative relays and partner challenges",
    "Healthy Me – Nutrition and body awareness"
  ]

  const month3Highlights = [
    "Little Scientists Lab – Volcano, magnet, water cycle experiments",
    "Inventor's Corner – Build tools from recycled materials",
    "STEM Stories – Turn discoveries into stories"
  ]

  return (
    <section className='w-full bg-[#FFE5A2] py-16 flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className=''>
        {/* Header section */}
        <div className='flex flex-col xl:flex-row justify-between gap-8 mb-12'>
          {/* Left content */}
          <div className='xl:w-[40%]'>
            <h2 className='text-[32px] xl:text-[40px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-4'>
              Quarterly Learning Themes
            </h2>
            <p className='text-[#101010E5] text-[14px] mb-4'>
              Designed for holistic development
            </p>
            <p className='text-[#101010E5] text-[14px] mb-6'>
              Each quarter in Immaginarium follows a themed journey that nurtures curiosity, creativity, and confidence. Every session is inspired by international early learning models and real-world exploration.
            </p>
            <p className='text-[#1A94D2] text-[14px] font-semibold mb-4'>
              Our framework aligns with:
            </p>
            <ul className='space-y-2'>
              <li className='flex items-start gap-2'>
                <Image src="/images/checkmark-circle-01.svg" width={16} height={16} alt='check' className='mt-1' />
                <span className='text-[14px] text-[#101010E5]'>IB Primary Years Programme (PYP) inquiry model</span>
              </li>
              <li className='flex items-start gap-2'>
                <Image src="/images/checkmark-circle-01.svg" width={16} height={16} alt='check' className='mt-1' />
                <span className='text-[14px] text-[#101010E5]'>OECD Learning Compass 2030</span>
              </li>
              <li className='flex items-start gap-2'>
                <Image src="/images/checkmark-circle-01.svg" width={16} height={16} alt='check' className='mt-1' />
                <span className='text-[14px] text-[#101010E5]'>UNESCO Early Childhood Development Standards</span>
              </li>
            </ul>
          </div>

          {/* Right images grid */}
          <div className='xl:w-[55%]'>
            <Image
              src="/images/immaginerium-quarterly.png"
              width={600}
              height={400}
              alt='Children learning activities'
              className='rounded-xl object-cover w-full'
            />
          </div>
        </div>

        {/* Every quarter includes */}
        <div className='mb-12'>
          <h3 className='text-[28px] xl:text-[32px] font-[family-name:var(--font-baloo2)] font-bold text-black text-center mb-8'>
            Every quarter includes:
          </h3>
          <div className='flex flex-col xl:flex-row gap-6'>
            {/* Left list */}
            <div className='xl:w-[40%] space-y-3'>
              {quarterIncludes.map((item, index) => (
                <div key={index} className='bg-[#202D60] rounded-lg p-4 flex items-start gap-3'>
                  <Image src="/images/checkmark-circle-01.svg" width={16} height={16} alt='check' className='mt-1' />
                  <span className='text-white text-[14px]'>{item}</span>
                </div>
              ))}
            </div>
            {/* Right image */}
            <div className='xl:w-[55%] relative'>
              <Image
                src="/images/immaginerium-quaterly-includes.png"
                fill
                alt='Children with flags'
                className='rounded-xl object-cover'
              />
            </div>
          </div>
        </div>

        {/* Quarter 1: Creativity and Discovery */}
        <div className='mb-12'>
          <div className='flex flex-col xl:flex-row items-stretch gap-8 mb-8'>
            {/* Left content */}
            <div className='xl:w-[40%]'>
              <h3 className='text-[28px] xl:text-[32px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-4'>
                Quarter 1: Creativity and Discovery
              </h3>
              <p className='text-[#101010E5] text-[14px] mb-2'>
                Focus: Arts and Crafts | Sports and Wellness | Science and Discovery
              </p>
              <p className='text-[#101010E5] text-[14px] mb-4'>
                This quarter sets the tone with curiosity, exploration, and joyful experimentation. Children express creativity, build coordination, and discover the power of questioning and doing.
              </p>
              <p className='text-[#1A94D2] text-[14px] font-semibold mb-4'>
                Global Inspirations:
              </p>
              <ul className='space-y-2'>
                {quarter1Inspirations.map((item, index) => (
                  <li key={index} className='flex items-start gap-2'>
                    <Image src="/images/checkmark-circle-01.svg" width={16} height={16} alt='check' className='mt-1' />
                    <span className='text-[14px] text-[#101010E5]'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right image */}
            <div className='xl:w-[55%] relative min-h-[300px]'>
              <Image
                src="/images/immaginerium-discocery.png"
                fill
                alt='Children doing discovery activities'
                className='rounded-xl object-cover'
              />
            </div>
          </div>

          {/* Month 1: Arts and Crafts */}
          <div className='flex flex-col xl:flex-row items-stretch justify-between mb-8'>
            <div className='xl:w-[45%] relative min-h-[250px]'>
              <Image
                src="/images/immaginerium-arts-craft.png"
                fill
                alt='Children doing arts and crafts'
                className='rounded-xl object-cover'
              />
            </div>
            <div className='xl:w-[50%]'>
              <h4 className='text-[24px] font-bold text-black mb-2'>
                Month 1: Arts and Crafts (6 weeks)
              </h4>
              <p className='text-[#101010E5] text-[14px] mb-2'>
                <span className='text-[#1A94D2] font-semibold'>Goal:</span> Explore creativity through hands-on crafts.
              </p>
              <p className='text-[#101010E5] text-[14px] mb-4'>
                Focus: Fine motor skills, imagination, color and texture, creative problem-solving.
              </p>
              <p className='text-[#1A94D2] text-[14px] font-semibold mb-3'>
                Experiential Highlights:
              </p>
              <ul className='space-y-2'>
                {month1Highlights.map((item, index) => (
                  <li key={index} className='flex items-start gap-2'>
                    <Image src="/images/checkmark-circle-01.svg" width={16} height={16} alt='check' className='mt-1' />
                    <span className='text-[14px] text-[#101010E5]'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Month 2: Sports and Wellness */}
          <div className='flex flex-col xl:flex-row-reverse items-stretch justify-between mb-8'>
            <div className='xl:w-[45%] relative min-h-[250px]'>
              <Image
                src="/images/immaginerium-sports.png"
                fill
                alt='Children doing sports'
                className='rounded-xl object-cover'
              />
            </div>
            <div className='xl:w-[50%]'>
              <h4 className='text-[24px] font-bold text-black mb-2'>
                Month 2: Sports and Wellness (4 weeks)
              </h4>
              <p className='text-[#101010E5] text-[14px] mb-2'>
                <span className='text-[#1A94D2] font-semibold'>Goal:</span> Develop teamwork, discipline, and body confidence.
              </p>
              <p className='text-[#101010E5] text-[14px] mb-4'>
                Focus: Coordination, emotional regulation, cooperation, sportsmanship.
              </p>
              <p className='text-[#101010E5] text-[14px] mb-4'>
                <span className='text-[#1A94D2] font-semibold'>Global Inspirations:</span> Finland&apos;s Fun Fitness Curriculum, Anji Play (China), UK EYFS Physical Development strand.
              </p>
              <p className='text-[#1A94D2] text-[14px] font-semibold mb-3'>
                Experiential Highlights:
              </p>
              <ul className='space-y-2'>
                {month2Highlights.map((item, index) => (
                  <li key={index} className='flex items-start gap-2'>
                    <Image src="/images/checkmark-circle-01.svg" width={16} height={16} alt='check' className='mt-1' />
                    <span className='text-[14px] text-[#101010E5]'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Month 3: Science and Discovery */}
          <div className='flex flex-col xl:flex-row items-stretch justify-between'>
            <div className='xl:w-[45%] relative min-h-[250px]'>
              <Image
                src="/images/immaginerium-science.png"
                fill
                alt='Children doing science experiments'
                className='rounded-xl object-cover'
              />
            </div>
            <div className='xl:w-[50%]'>
              <h4 className='text-[24px] font-bold text-black mb-2'>
                Month 3: Science and Discovery (4 weeks)
              </h4>
              <p className='text-[#101010E5] text-[14px] mb-2'>
                <span className='text-[#1A94D2] font-semibold'>Goal:</span> Spark curiosity through observation and experimentation
              </p>
              <p className='text-[#101010E5] text-[14px] mb-4'>
                Focus: Inquiry skills, cause and effect, early STEM literacy.
                Global Inspirations: Children&apos;s Science Museums (Singapore & UK), HighScope (USA) Plan-Do-Review cycle.
              </p>
              <p className='text-[#1A94D2] text-[14px] font-semibold mb-3'>
                Experiential Highlights:
              </p>
              <ul className='space-y-2'>
                {month3Highlights.map((item, index) => (
                  <li key={index} className='flex items-start gap-2'>
                    <Image src="/images/checkmark-circle-01.svg" width={16} height={16} alt='check' className='mt-1' />
                    <span className='text-[14px] text-[#101010E5]'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Outcome for Parents */}
        <div className='text-center py-8'>
          <h3 className='text-[28px] xl:text-[32px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-4'>
            Outcome for Parents:
          </h3>
          <p className='text-[#101010E5] text-[16px] max-w-[700px] mx-auto mb-6'>
            Children explore talents in arts, sports, and science while developing creativity, teamwork, confidence, and curiosity about the world.
          </p>
          <button className='bg-[#F9BB1E] text-black px-6 py-3 rounded-full hover:bg-[#e5aa1a] transition-all duration-300'>
            Enroll Your Child
          </button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default QuarterlyLearningThemes
