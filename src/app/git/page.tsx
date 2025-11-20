import React from "react";
import GitHero from "@/componentspages/git/hero";
import Vision from "@/componentspages/git/vision";
import About from "@/componentspages/git/about";
import Programme from "@/componentspages/git/programme";
import Spain from "@/componentspages/git/countries/spain";
import Portugal from "@/componentspages/git/countries/portugal";
import Paris from "@/componentspages/git/countries/paris";
import SideAttraction from "@/componentspages/git/side-attractions";
import BeyondTip from "@/componentspages/git/beyont-tip";
import ProgramDetails from "@/componentspages/git/program-details";
import ChildGain from "@/componentspages/git/child-gaim";
import Faq from "@/componentspages/git/faq";
import ContactUs from "@/componentspages/git/contact-us";
import Socialproofpage from "@/componentspages/home/social proof/socialproofpage";
const Gitpage = () => {
  return (
    <div className="overflow-x-hidden">
      <GitHero />
      <Vision />
      <About />
      <Programme />
      <div className="lg:bg-[#F2F2F2] px-5 lg:px-16  ">
        {" "}
        <Portugal />
      </div>
      <Spain />{" "}
      <div className="lg:bg-[#F2F2F2] px-5 lg:px-16  ">
        <Paris />{" "}
      </div>
      <SideAttraction />
      <BeyondTip />
      <Socialproofpage />
      <ProgramDetails />
      <ChildGain />
      <Faq />
      <ContactUs />
    </div>
  );
};

export default Gitpage;
