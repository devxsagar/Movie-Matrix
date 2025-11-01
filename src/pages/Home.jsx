import Hero from "@/components/Hero";
import { API_OPTIONS } from "@/utils/constant";
import React, { useEffect, useState } from "react";
import Details from "./Details";
import MediaSection from "@/sections/MediaSection";
import useSectionFetch from "@/hooks/useSectionFetch";


const Home = () => {
  const trendingData = useSectionFetch({ category: "trending", mediaType: "all" });

  return (
    <div>
      <Hero data={trendingData} />
      <MediaSection title="trending movies" category="trending" mediaType="movie" />
      <MediaSection title="popular movies" category="popular" mediaType="movie" />
      <MediaSection title="trending tv series" category="trending" mediaType="tv" />
    </div>
  );
};

export default Home;
