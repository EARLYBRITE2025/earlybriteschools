import React from 'react'
import GitHero from '@/componentspages/git/hero'
import Vision from '@/componentspages/git/vision'
import GitNavbar from '@/componentspages/git/navbar'
import About from '@/componentspages/git/about'
import Programme from '@/componentspages/git/programme'
import { ABeeZee } from 'next/font/google'
const Gitpage = () => {
  return (
    <div>
        <GitNavbar/>
      <GitHero/>
      <Vision/>
      <About/>
      <Programme/>
    </div>
  )
}

export default Gitpage
