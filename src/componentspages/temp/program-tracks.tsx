import React from 'react'
import Image from 'next/image'

const ProgramTracks = () => {
  const tracks = [
    {
      title: 'Tech Track:',
      subtitle: 'Build the Future',
      color: '#1A94D2',
      image: '/images/temp-tech.png',
      description: [
        "The world runs on technology but it&apos;s built by creators, not consumers.",
        "In the Tech Track, learners don&apos;t just use technology; they design, build, and solve real problems with it.",
        "They learn to code, think critically, and apply creativity to innovation, preparing for opportunities in a digital-first world."
      ],
      learningTitle: 'In the Tech Track, your child will learn:',
      learnings: [
        'Coding, app and web design',
        'Artificial intelligence and robotics',
        'Data for problem-solving',
        'Product thinking and digital communication'
      ],
      imagePosition: 'left'
    },
    {
      title: 'Creative Track:',
      subtitle: 'Express and Transform',
      color: '#ED6E23',
      image: '/images/temp-creative.png',
      description: [
        'Your creativity is a voice. It has to be heard.',
        'This track helps you discover that voice and use it to tell stories that move people, build brands, and shape industries.',
        'Learners dive into music, storytelling, design, and content creation, gaining both artistic mastery and entrepreneurial skill.'
      ],
      learningTitle: "You'll learn:",
      learnings: [
        'Storytelling and performance arts',
        'Visual design and digital content',
        'Creative branding and portfolio building',
        'How to turn creativity into opportunity'
      ],
      imagePosition: 'right'
    },
    {
      title: 'Football:',
      subtitle: 'Train with Purpose',
      color: '#059669',
      image: '/images/temp-football.png',
      description: [
        'The Football Track develops skill and discipline while teaching leadership, teamwork, and personal growth both on and off the pitch.',
        'Learners build the habits, strategy, and discipline that set true athletes apart, guided by professional coaches and sports psychologists.'
      ],
      learningTitle: "You'll learn:",
      learnings: [
        'Technical and tactical skills',
        'Fitness, nutrition, and mental strength',
        'Teamwork and leadership',
        'Branding and career management for athletes'
      ],
      imagePosition: 'left'
    },
    {
      title: 'Leadership & Enterprise Track:',
      subtitle: 'Lead & Create Impact',
      color: '#F9BB1E',
      image: '/images/temp-leadership.png',
      description: [
        'Every great change begins with someone who decides to lead.',
        'This track helps learners find the leader within them and make them ever ready to create value wherever they go.',
        'Through projects and mentorship, participants learn how to communicate, innovate, and make meaningful contributions in their schools, communities, and beyond.'
      ],
      learningTitle: "You'll learn:",
      learnings: [
        'Entrepreneurship and innovation',
        'Public speaking and emotional intelligence',
        'Financial literacy and project leadership',
        'Civic engagement and social impact'
      ],
      imagePosition: 'right'
    },
    {
      title: 'Innovation & Sustainability Track:',
      subtitle: 'Design the Future',
      color: '#1A94D2',
      image: '/images/temp-innovation.png',
      description: [
        'Tomorrow belongs to problem solvers.',
        'In this track, learners use science, creativity, and systems thinking to design real solutions for their communities and the planet.',
        'They learn to turn ideas into prototypes, explore green innovation, and apply STEM skills in ways that truly matter.'
      ],
      learningTitle: "You'll learn:",
      learnings: [
        'Design thinking and systems innovation',
        'Maker projects and STEM/STEAM challenges',
        'Green innovation and climate action',
        'Smart cities and sustainable living'
      ],
      imagePosition: 'left'
    },
    {
      title: 'Global Languages & Culture Track:',
      subtitle: 'Speak the World',
      color: '#ED6E23',
      image: '/images/temp-language.png',
      description: [
        'In a global world, language is power.',
        'This track helps learners develop the confidence to connect, collaborate, and lead across cultures.',
        "It's more than just learning French or Mandarin, it's about understanding people, perspectives, and possibilities."
      ],
      learningTitle: "You'll learn:",
      learnings: [
        'French, Spanish, German, Portuguese, or Mandarin',
        'Cross-cultural communication and etiquette',
        'Global diplomacy and international exchange preparation',
        'Confidence to lead in global environments'
      ],
      imagePosition: 'right'
    }
  ]

  return (
    <section className='w-full bg-white'>
      <div className='py-16 flex justify-center'>
        <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
          <div className='max-w-[1200px] mx-auto'>
        {/* Header */}
        <div className='text-center mb-10'>
          <h2 className='text-[36px] xl:text-[48px] font-[family-name:var(--font-baloo2)] font-bold text-black mb-4'>
            TEMP Program Tracks
          </h2>
          <p className='text-[16px] xl:text-[18px] text-[#666666] max-w-[900px] mx-auto'>
            Every young person carries a spark, a quiet potential waiting for the right guidance, the right environment, and the right challenge.
            At TEMP, we&apos;ve designed six powerful tracks that turn that spark into skill, creativity, and confidence.
            Each one is led by mentors who&apos;ve walked the path and aligned with global standards that prepare our learners for the world ahead.
          </p>
        </div>

        {/* Tracks */}
        <div className='flex flex-col gap-16'>
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                track.imagePosition === 'left' ? 'xl:flex-row' : 'xl:flex-row-reverse'
              } gap-8 items-center xl:justify-between`}
            >
              {/* Image */}
              <div className='w-full xl:flex-1'>
                <div className='relative w-full h-[300px] xl:h-[500px] rounded-[24px] overflow-hidden'>
                  <Image
                    src={track.image}
                    fill
                    alt={track.title}
                    className='object-cover'
                  />
                </div>
              </div>

              {/* Content */}
              <div className='flex-1'>
                <h3 className='text-[28px] xl:text-[36px] font-[family-name:var(--font-baloo2)] font-bold mb-2'>
                  <span style={{ color: track.color }}>{track.title}</span>{' '}
                  <span className='text-black'>{track.subtitle}</span>
                </h3>

                {/* Description paragraphs */}
                <div className='space-y-3 mb-6'>
                  {track.description.map((para, i) => (
                    <p key={i} className='text-[15px] xl:text-[16px] text-[#666666] leading-relaxed'>
                      {para}
                    </p>
                  ))}
                </div>

                {/* Learning section */}
                <div className='mb-6'>
                  <p className='text-[16px] xl:text-[18px] font-bold text-black mb-3'>
                    {track.learningTitle}
                  </p>
                  <ul className='space-y-2'>
                    {track.learnings.map((learning, i) => (
                      <li key={i} className='text-[15px] xl:text-[16px] text-black flex items-start'>
                        <span className='mr-2'>•</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <button
                  style={{ backgroundColor: track.color }}
                  className='text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2'
                >
                  Talk to Us
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

          </div>
        </div>
      </div>

      {/* Footer CTA - Full width with background */}
      <div className='w-full bg-[#F2F2F2] py-10 flex justify-center'>
        <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className='text-center max-w-[1200px] mx-auto'>
          <p className='text-[18px] xl:text-[20px] italic text-[#666666] mb-2'>
            At TEMP, learning isn&apos;t about ticking boxes.
          </p>
          <p className='text-[16px] xl:text-[18px] text-[#666666] mb-8 max-w-[800px] mx-auto'>
            It&apos;s about becoming the kind of person who can walk into any room, any country, any challenge, and know you belong there.
          </p>
          <div className='flex items-center justify-center gap-4'>
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
        </div>
      </div>
    </section>
  )
}

export default ProgramTracks
