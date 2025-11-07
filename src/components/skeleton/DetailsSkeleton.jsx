import React from "react";
import { Skeleton } from "../ui/skeleton";
import ExploreMediaInfoSkeleton from "./ExploreMediaInfoSkeleton";
import ExploreCastSkeleton from "./ExploreCastSkeleton";
import ExploreMediaImagesSkeleton from "./ExploreMediaImagesSkeleton";
import PosterCardSkeleton from "./PosterCardSkeleton";
import ExploreSimilarMediaSkeleton from "./ExploreSimilarMediaSkeleton";
import ExploreRecommendationSkeleton from "./ExploreRecommendationSkeleton";

const DetailsSkeleton = () => {
  return (
    <div className="pt-10 pb-20">
      <div className="flex max-lg:flex-col max-lg:items-center max-lg:gap-y-10 lg:gap-x-5 xl:gap-x-15  ">
        <div className="w-[70%] md:w-[50%] lg:w-[50%]">
          <Skeleton className="min-h-[35rem] max-h-[35rem] object-cover rounded-lg" />
        </div>

        <ExploreMediaInfoSkeleton />
      </div>

      <ExploreCastSkeleton />

      <ExploreMediaImagesSkeleton />

      <ExploreSimilarMediaSkeleton />

      <ExploreRecommendationSkeleton />
      
    </div>
  );
};

export default DetailsSkeleton;
