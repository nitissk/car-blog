import React from "react";
import Home from "./home/page";
// import Top from "../components/blogTop";
import NewTechnologyPage from "./home/NewTechnologyPage";
import {
  categoryCards,
  ExploreCategories,
} from "@/components/ExploreCategories";
import TestimonialSection from "./home/TestimonialSection";
import HeroSection from "../components/HeroSection";

const page = () => {
  return (
    <div>
      {/* <Top /> */}
      <HeroSection/>
      <Home />
      <NewTechnologyPage />
      <ExploreCategories categoryCards={categoryCards} />
      <TestimonialSection />
      <NewTechnologyPage />
    </div>
  );
};

export default page;
