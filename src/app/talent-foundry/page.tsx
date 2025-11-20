import React from "react";
import TalentFoundryHero from "@/componentspages/talent-foundry/hero";
import WhyTalentFoundry from "@/componentspages/talent-foundry/why-talent-foundry";
import ProgramsForGrowth from "@/componentspages/talent-foundry/programs-for-growth";
import HowItWorks from "@/componentspages/talent-foundry/how-it-works";
import Socialproofpage from "@/componentspages/home/social proof/socialproofpage";
import Faq from "@/componentspages/git/faq";

function TalentFoundry() {
  return (
    <div>
      <TalentFoundryHero />
      <WhyTalentFoundry />
      <ProgramsForGrowth />
      <HowItWorks />
      <Socialproofpage />
      <Faq />
    </div>
  );
}

export default TalentFoundry;
