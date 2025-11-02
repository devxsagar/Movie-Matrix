import React from "react";
import { Skeleton } from "../ui/skeleton";

const PosterCardSkeleton = () => {
  return (
    <div className="flex flex-col items-center">
      <Skeleton className="h-50 w-30" />
      <Skeleton className="w-20 h-5 mt-2" />
    </div>
  );
};

export default PosterCardSkeleton;
