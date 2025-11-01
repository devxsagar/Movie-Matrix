import { IMAGE_URL } from "@/utils/constant";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Info, Play, Star } from "lucide-react";
import { Button } from "./ui/button";

const Hero = ({ trendingData }) => {
  // State to manage overview text expansion
  const [overviewClicked, setOverviewClicked] = useState(false);

  // Handle case when trendingData is not yet available
  if (!trendingData || trendingData.length === 0) {
    return <div>Loading...</div>;
  }

  console.log(trendingData);

  return (
    <div className="fixed left-0 top-0 ">
      <Carousel className="relative">
        {/* Carousel Content */}
        <CarouselContent>
          {/* Map through trendingData to create CarouselItems */}
          {trendingData.map((item, index) => {
            return (
              <CarouselItem key={index}>
                {/* Hero Image */}
                <div className="w-full h-[70vh] lg:h-screen relative">
                  <img
                    src={IMAGE_URL + item.backdrop_path}
                    alt="backdrop"
                    className="h-full w-full object-cover object-center lg:object-top"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 z-80 w-full h-full bg-black/40" />

                  {/* Text Content */}
                  <div className="max-w-4xl absolute  left-0 bottom-4 md:left-25 md:bottom-20 xl:left-40 xl:top-1/2 xl:-translate-y-1/2 z-90 p-5">
                    <h3 className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tight">
                      {item.title || item.name}
                    </h3>
                    <p
                      className={`mt-3 max-w-xs md:max-w-lg  text-sm md:text-lg  leading-4 md:leading-6 text-gray ${overviewClicked ? "line-clamp-none" : "line-clamp-4"}`}
                      onClick={() => setOverviewClicked((prev) => !prev)}
                    >
                      {item.overview}
                    </p>

                    <div className="mt-4 md:mt-6 flex items-center gap-x-4 md:gap-x-6 lg:gap-x-8">
                      <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, idx) => {
                          // Calculate number of filled stars based on vote_average
                          const filledStars = Math.floor(item.vote_average / 2);
                          return (
                            <Star
                              key={idx}
                              fill={idx < filledStars ? "#facc15" : "none"}
                              color="#facc15"
                              className="w-5 md:w-6 lg:w-7 h-5 md:h-6 lg:h-7"
                            />
                          );
                        })}
                      </div>
                      <div>
                        <span className="text-sm md:text-lg font-light text-white tracking-widest uppercase">
                          {item.vote_average.toFixed(1)} Rating
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-6 md:mt-8">
                      <Button className=" bg-red text-white w-30 md:w-36 lg:w-48 py-5 md:py-6 lg:py-8 rounded-md text-xs md:text-sm lg:text-lg font-medium">
                        <Play />
                        Watch Trailer
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-white text-black w-30 md:w-36 lg:w-48 py-5 md:py-6 lg:py-8 rounded-md text-xs md:text-sm lg:text-lg font-medium"
                      >
                        <Info />
                        Info
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Carousel Navigation Buttons */}
        <CarouselPrevious className="absolute left-5 bg-transparent" />
        <CarouselNext className="absolute right-5 bg-transparent" />
      </Carousel>
    </div>
  );
};

export default Hero;
