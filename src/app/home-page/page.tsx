import React from "react";
import Hero from "@/componentspages/home/hero";
import Brands from "@/componentspages/home/brands";
import Features from "@/componentspages/home/features";
import Programmes from "@/componentspages/home/programmes";
import About from "@/componentspages/home/about";
import Socialproofpage from "@/componentspages/home/social proof/socialproofpage";
import HomeFAQ from "@/componentspages/home/faq";
import Contact from "@/componentspages/home/Contact-us";
const Homepage = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <Features />
      <Programmes />
      <About />
      <Socialproofpage bg="bg-[#F9BB1E]" />
      <HomeFAQ />
      <Contact />
    </div>
  );
};

export default Homepage;
