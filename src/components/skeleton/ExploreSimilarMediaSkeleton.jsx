import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import PosterCardSkeleton from "@/components/skeleton/PosterCardSkeleton";

const ExploreSimilarMediaSkeleton = () => {
  return (
    <div className="mt-15">
      {/* Heading */}
      <Skeleton className="h-7 w-48 mb-4 rounded-md" />

      {/* Carousel-like row */}
      <div className="flex gap-4 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/8">
            <PosterCardSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSimilarMediaSkeleton;
