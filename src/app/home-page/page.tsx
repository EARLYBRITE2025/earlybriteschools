import React from 'react'
import Footer from '@/componentspages/layouts/footer'
import Navbar from '@/componentspages/layouts/Navbar'
import Hero from '@/componentspages/home/hero'
import Features from '@/componentspages/home/features'
import Programmes from '@/componentspages/home/programmes'
import About from '@/componentspages/home/about'
import Socialproofpage from '@/componentspages/home/social proof/socialproofpage'
import Contact from '@/componentspages/home/Contact-us'
const Homepage = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Features/>
    <Programmes/>
    <About/>
    <Socialproofpage/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Homepage
