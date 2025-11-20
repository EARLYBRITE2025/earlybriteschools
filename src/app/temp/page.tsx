import React from "react";
import TempHero from "@/componentspages/temp/hero";
import WhatIsTemp from "@/componentspages/temp/what-is-temp";
import WhyParentsChoose from "@/componentspages/temp/why-parents-choose";
import ProgramCategories from "@/componentspages/temp/program-categories";
import ProgramTracks from "@/componentspages/temp/program-tracks";
import HowTempWorks from "@/componentspages/temp/how-temp-works";
import EvaluationCertification from "@/componentspages/temp/evaluation-certification";
import Socialproofpage from "@/componentspages/home/social proof/socialproofpage";
import Faq from "@/componentspages/git/faq";

function TEMP() {
  return (
    <div>
      <TempHero />
      <WhatIsTemp />
      <WhyParentsChoose />
      <ProgramCategories />
      <ProgramTracks />
      <HowTempWorks />
      <EvaluationCertification />
      <Socialproofpage />
      <Faq />
    </div>
  );
}

export default TEMP;
