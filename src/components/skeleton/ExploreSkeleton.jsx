import React from "react";
import PosterCardSkeleton from "./PosterCardSkeleton";
import { Skeleton } from "../ui/skeleton";

const ExploreSkeleton = () => {
  return (
    <div className="px-4 py-10">
      <Skeleton className="w-60 h-5" />
      <div className="mt-8 mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
          {Array.from({ length: 20 }).map((_, index) => {
            return <PosterCardSkeleton key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreSkeleton;
