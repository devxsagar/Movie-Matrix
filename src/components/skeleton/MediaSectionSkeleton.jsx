import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "../ui/skeleton";
import PosterCardSkeleton from "./PosterCardSkeleton";

const MediaSectionSkeleton = () => {
  return (
    <div className="pt-10 mb-10">
      <div className="flex justify-between mb-5">
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-20" />
      </div>

      <div>
        <Carousel opts={{ slidesToScroll: screen > 1024 ? 4 : 2, dragFree: true }}>
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/8 "
                >
                  <PosterCardSkeleton />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="bg-transparent max-lg:hidden" />
          <CarouselNext className="bg-transparent max-lg:hidden" />
        </Carousel>
      </div>
    </div>
  );
};

export default MediaSectionSkeleton;
