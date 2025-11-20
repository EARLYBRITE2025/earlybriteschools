const AboutUs = () => {
  return (
    <section className='w-full py-16 flex justify-center'>
      <div className='w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0'>
        <div className='text-center flex flex-col items-center justify-center gap-6'>
        <h1 className="text-[30px] xl:text-[48px] font-bold font-[family-name:var(--font-baloo2)] max-w-[660px]">
          Trusted by Parents. Recognized Around the World.
        </h1>
        <p className="text-[#666666] xl:text-[18px] max-w-[660px]">
          Earlybrite&apos;s Gap Year Program is built on internationally recognized learning models and delivered by experienced mentors who&apos;ve guided students across Africa, Europe, and beyond.
        </p>
        <p className="text-[#666666] xl:text-[18px] max-w-[660px]">
          Our approach is backed by partnerships and global education frameworks that ensure every learner&apos;s journey meets world-class standards.
        </p>
        <button className='bg-[#F9BB1E] reuseable-button text-black'>Apply for Git</button>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
