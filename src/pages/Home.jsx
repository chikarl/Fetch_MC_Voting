import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import CampaignsSection from "../components/CampaignsSections";
import HowItWorks from "../components/HowItWorksSection";

function Home() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <h2 style={{ textAlign: "center" }}>Ongoing Campaigns</h2>
      <CampaignsSection />
      <HowItWorks />
      {/* <Header /> */}
    </>
  );
}

export default Home;
