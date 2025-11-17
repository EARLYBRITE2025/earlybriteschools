import React from 'react'
import GitHero from '@/componentspages/git/hero'
import Vision from '@/componentspages/git/vision'
import GitNavbar from '@/componentspages/git/navbar'
import About from '@/componentspages/git/about'
import Programme from '@/componentspages/git/programme'
import Spain from '@/componentspages/git/spain'
import Portugal from '@/componentspages/git/portugal'
import Paris from '@/componentspages/git/paris'
import SideAttraction from '@/componentspages/git/side-attractions'
import BeyondTip from '@/componentspages/git/beyont-tip'
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
    </div>
  )
}

export default Gitpage
