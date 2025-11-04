import React from "react";
import ExploreMediaRating from "./ExploreMediaRating";
import ExploreMediaAdditionalInfo from "./ExploreMediaAdditionalInfo";
import { Button } from "./ui/button";
import { Play, Plus } from "lucide-react";

const ExploreMediaInfo = ({ mediaDetails, directors, cast }) => {
  const releaseDate = mediaDetails?.release_date || mediaDetails?.first_air_date;

  return (
    <div>
      <h2 className="text-5xl font-semibold tracking-tight">
        {mediaDetails?.title || mediaDetails?.name}
      </h2>
      <div className="flex items-center gap-5 mt-2">
        <p className="text-gray">{mediaDetails?.origin_country?.[0] || "N/A"}</p>
        <span className="text-gray">•</span>

        <p className="text-gray">{releaseDate?.split("-")?.[0] || "N/A"}</p>

        <span className="text-gray">•</span>

        <p className="text-gray">
          {mediaDetails?.runtime || "N/A" || mediaDetails?.episode_run_time} min
        </p>

        <span className="text-gray">•</span>

        {/* Rating */}
        <ExploreMediaRating mediaDetails={mediaDetails} />
      </div>

      {/* Description */}
      <p className="mt-5 leading-relaxed max-w-3xl line-clamp-5 text-base lg:text-lg">
        {mediaDetails?.overview}
      </p>

      <div className="mt-5 text-base lg:text-lg">
        <ExploreMediaAdditionalInfo mediaDetails={mediaDetails} directors={directors} cast={cast} />
      </div>

      <div className="mt-15 space-x-5">
        <Button className="font-semibold px-5 py-8 text-white text-base lg:text-lg bg-red hover:bg-red/80 cursor-pointer" variant="secondary">
          <Play className="mr-1" />
          Watch Trailer
        </Button>
        <Button className="font-semibold px-5 py-8 text-base lg:text-lg cursor-pointer" variant="secondary">
          <Plus className="mr-1"  />
          Watchlist
        </Button>
      </div>
    </div>
  );
};

export default ExploreMediaInfo;
