import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ExploreMediaImagesSkeleton = () => {
  return (
    <div className="mt-15">
      {/* Title */}
      <Skeleton className="h-7 w-28 rounded-md" />

      {/* Images Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <Skeleton key={i} className="h-40 w-full rounded-md" />
        ))}
      </div>

      {/* Show More Button Placeholder */}
      <div className="flex items-center justify-center mt-3">
        <Skeleton className="h-4 w-24 rounded" />
      </div>
    </div>
  );
};

export default ExploreMediaImagesSkeleton;
