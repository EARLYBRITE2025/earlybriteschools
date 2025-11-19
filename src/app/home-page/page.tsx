import React from "react";
import Footer from "@/componentspages/layouts/footer";
import Navbar from "@/componentspages/layouts/Navbar";
import Hero from "@/componentspages/home/hero";
import Brands from "@/componentspages/home/brands";
import Features from "@/componentspages/home/features";
import Programmes from "@/componentspages/home/programmes";
import About from "@/componentspages/home/about";
import Socialproofpage from "@/componentspages/home/social proof/socialproofpage";
import Contact from "@/componentspages/home/Contact-us";
const Homepage = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <Features />
      <Programmes />
      <About />
      <Socialproofpage />
      <Contact />
    </div>
  );
};

export default Homepage;
