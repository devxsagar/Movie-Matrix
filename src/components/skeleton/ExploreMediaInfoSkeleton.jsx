import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ExploreMediaInfoSkeleton = () => {
  return (
    <div className="w-full">
      {/* Title */}
      <Skeleton className="h-10 w-3/4 rounded-md" />

      {/* Meta Info (Country • Year • Runtime • Rating) */}
      <div className="flex items-center gap-5 mt-3">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-10" />
      </div>

      {/* Description */}
      <div className="mt-5 space-y-2 max-w-3xl">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-10/12" />
      </div>

      {/* Additional Info */}
      <div className="mt-5 space-y-3">
        <Skeleton className="h-4 w-64" />
        <Skeleton className="h-4 w-56" />
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-52" />
      </div>

      {/* Buttons */}
      <div className="mt-10 flex gap-5">
        <Skeleton className="h-12 w-40" />
        <Skeleton className="h-12 w-40" />
      </div>
    </div>
  );
};

export default ExploreMediaInfoSkeleton;
