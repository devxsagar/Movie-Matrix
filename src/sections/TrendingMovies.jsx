import useSectionFetch from "@/hooks/useSectionFetch";
import { ArrowRight } from "lucide-react";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IMAGE_URL } from "@/utils/constant";
import useScreenSize from "@/hooks/useScreenSize";

const TrendingMovies = () => {
  // Get screen size
  const screen = useScreenSize();

  // Fetch trending movies data
  const trendingMovies = useSectionFetch({ category: "trending", type: "movie" });

  if (!trendingMovies) {
    return;
  }


  return (
    <div className="pt-10 mb-40">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="uppercase tracking-wide  text-2xl font-semibold">trending movies</h3>
        <p className="flex items-center gap-2 text-sm font-medium tracking-wide text-gray cursor-pointer hover:text-white hover-animation">
          View all
          <ArrowRight className="w-5 h-5" />
        </p>
      </div>

      {/* Carousel */}
      <div >
        <Carousel opts={{ slidesToScroll: screen > 1024 ? 4 : 2 }}>
          <CarouselContent>
            {trendingMovies.map((movie) => {
              return (
                <CarouselItem
                  key={movie.id}
                  className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/8 "
                >
                  <div>
                    <img
                      src={IMAGE_URL + movie.poster_path}
                      alt={movie.title}
                      className="h-50 rounded-lg"
                    />
                    <p className="text-sm text-center tracking-wide leading-5 px-0.5 mt-2">
                      {movie.title}
                    </p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="bg-transparent" />
          <CarouselNext className="bg-transparent" />
        </Carousel>
      </div>
    </div>
  );
};

export default TrendingMovies;
