import { Skeleton } from "../ui/skeleton";

export default function MyListSkeleton() {
  return (
    <div className="pt-15 pb-15 min-h-screen">
      
      {/* Header */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-10 w-40 rounded-md" />
      </div>

      {/* Tabs */}
      <div className="mt-8 flex items-center justify-center gap-x-5">
        <Skeleton className="h-8 w-20 rounded-md" />
        <Skeleton className="h-8 w-24 rounded-md" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-15 place-items-center mt-10">
        
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-full flex flex-col items-center">
            
            {/* Poster Skeleton */}
            <Skeleton className="w-full h-60 sm:h-72 lg:h-80 rounded-xl" />

            {/* Remove Button Skeleton */}
            <Skeleton className="w-28 h-7 rounded-full mt-3" />
          </div>
        ))}

      </div>
    </div>
  );
}
