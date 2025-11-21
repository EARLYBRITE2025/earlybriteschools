import React from "react";
import GitHero from "@/componentspages/gap/hero";
import AboutUs from "@/componentspages/gap/about-us";
import ProgrammeOverview from "@/componentspages/gap/programme-overview";
import Sponsors from "@/componentspages/gap/spomsors";
import Target from "@/componentspages/gap/target";
import Trusted from "@/componentspages/gap/trusted";
import ProgramStructure from "@/componentspages/gap/program-structure";
import WorldClass from "@/componentspages/gap/world-class";
import Apply from "@/componentspages/gap/apply";
import Conclusion from "@/componentspages/gap/conclusion";
import About from "@/componentspages/git/about";
import ProgramDetails from "@/componentspages/git/program-details";
import GapFAQ from "@/componentspages/gap/faq";
import Footer from "@/componentspages/layouts/footer";
import Socialproofpage from "@/componentspages/home/social proof/socialproofpage";

function GAP() {
  return (
    <div>
      <GitHero />
      <AboutUs />
      <Sponsors />
      <ProgrammeOverview />
      <Target />
      <Trusted />
      <ProgramStructure />
      <WorldClass />
      <Apply />
      <Conclusion />
      <Socialproofpage />
      <ProgramDetails />

      <GapFAQ />
    </div>
  );
}

export default GAP;
