import React from 'react'
import SchoolNavbar from '@/componentspages/for-school/header'
import SchoolHero from '@/componentspages/for-school/hero'
import Transfer from '@/componentspages/for-school/transfor'
import WorldClassSchool from '@/componentspages/for-school/wht-erlybrite'
import OurProgramme from '@/componentspages/for-school/our-programs'
import GlobalInnovation from '@/componentspages/for-school/programmes/git-programme'
import GapYear from '@/componentspages/for-school/programmes/gap-programe'
import Immagerium from '@/componentspages/for-school/programmes/imagerium'
import TalentFoundry from '@/componentspages/for-school/programmes/talent-foundry'
import EarlyBriteSummer from '@/componentspages/for-school/programmes/early-brite-summer'
import Partnership from '@/componentspages/for-school/partnership'
import ForSchoolPage from '@/componentspages/for-school/about-us'
import SchoolFAQ from '@/componentspages/for-school/faq'
import BringToSchool from '@/componentspages/for-school/bring-to-school'
import Footer from '@/componentspages/layouts/footer'
const ForSchool = () => {
  return (
    <div>
      
      <SchoolHero/>
      <Transfer/>
      <WorldClassSchool/>
      <OurProgramme/>
      <GlobalInnovation/>
      <GapYear/>
      <Immagerium/>
      <TalentFoundry/>
      <EarlyBriteSummer/>
      <Partnership/>
      <ForSchoolPage/>
      <SchoolFAQ/>
      <BringToSchool/>
    </div>
  )
}

export default ForSchool
