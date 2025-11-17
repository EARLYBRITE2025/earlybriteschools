import React from 'react'
import GitHero from '@/componentspages/git/hero'
import Vision from '@/componentspages/git/vision'
import GitNavbar from '@/componentspages/git/navbar'
import About from '@/componentspages/git/about'
import Programme from '@/componentspages/git/programme'
import Spain from '@/componentspages/git/countries/spain'
import Portugal from '@/componentspages/git/countries/portugal'
import Paris from '@/componentspages/git/countries/paris'
import SideAttraction from '@/componentspages/git/side-attractions'
import BeyondTip from '@/componentspages/git/beyont-tip'
import GitSocialproofpage from '@/componentspages/git/social-proof'
import ProgramDetails from '@/componentspages/git/program-details'
const Gitpage = () => {
  return (
    <div>
      <GitNavbar/>
      <GitHero/>
      <Vision/>
      <About/>
      <Programme/>
      <Portugal/>
      <Spain/>
      <Paris/>
      <SideAttraction/>
      <BeyondTip/>
      <GitSocialproofpage/>
      <ProgramDetails/>
    </div>
  )
}

export default Gitpage
