import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ExploreCastSkeleton = () => {
  return (
    <div className="mt-15">
      {/* Title */}
      <Skeleton className="h-7 w-28 rounded-md" />

      {/* Cast Grid */}
      <div className="grid items-start grid-cols-3 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-9 gap-5 mt-4">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-2">
            {/* Avatar */}
            <Skeleton className="w-15 md:w-20 h-15 md:h-20 rounded-full" />

            {/* Name */}
            <Skeleton className="h-3 w-16 rounded" />

            {/* Character */}
            <Skeleton className="h-3 w-14 rounded" />
          </div>
        ))}
      </div>

      {/* Show More Button Placeholder */}
      <div className="flex items-center justify-center mt-3">
        <Skeleton className="h-4 w-20 rounded" />
      </div>
    </div>
  );
};

export default ExploreCastSkeleton;
