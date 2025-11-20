import React from "react";
import SummerHero from "@/componentspages/summer/hero";
import WhySummerSchool from "@/componentspages/summer/why-summer-school";
import LearningBeyond from "@/componentspages/summer/learning-beyond";
import WhatMakesDifferent from "@/componentspages/summer/what-makes-different";
import ProgramHighlights from "@/componentspages/summer/program-highlights";
import ProgramStructure from "@/componentspages/summer/program-structure";
import WhatStudentsGain from "@/componentspages/summer/what-students-gain";
import WhatParentsGain from "@/componentspages/summer/what-parents-gain";
import Socialproofpage from "@/componentspages/home/social proof/socialproofpage";
import Faq from "@/componentspages/git/faq";

function Summer() {
  return (
    <div>
      <SummerHero />
      <WhySummerSchool />
      <LearningBeyond />
      <WhatMakesDifferent />
      <ProgramHighlights />
      <ProgramStructure />
      <WhatStudentsGain />
      <WhatParentsGain />
      <Socialproofpage />
      <Faq />
    </div>
  );
}

export default Summer;
