import React from "react";

const ExploreMediaAdditionalInfo = ({ mediaDetails, directors, cast, mediaType }) => {
  return (
    <div className="space-y-2 lg:space-y-1 ">
      {/* Genres */}
      <div className="flex max-lg:flex-col lg:items-center gap-x-1">
        <p>Genres: </p>
        <p className="text-gray">{mediaDetails?.genres?.map((genre) => genre?.name).join(", ")}</p>
      </div>

      {/* Production Companies */}
      <div className="flex max-lg:flex-col lg:items-center gap-x-1">
        <p className="whitespace-nowrap">Production Companies: </p>
        <p className="text-gray">
          {mediaDetails?.production_companies
            ?.slice(0, 2)
            ?.map((company) => company?.name)
            .join(", ") || "N/A"}
        </p>
      </div>

      {/* Director */}
      <div className="flex max-lg:flex-col lg:items-center gap-x-1">
        <p className="whitespace-nowrap">Director: </p>
        <p className="text-gray">{directors[0]?.name || "N/A"}</p>
      </div>

      {/* Cast */}
      <div className="flex max-lg:flex-col lg:items-center gap-x-1">
        <p className="whitespace-nowrap">Cast: </p>
        <p className="text-gray">
          {cast.length > 0
            ? cast
                .slice(0, 4)
                .map((actor) => actor?.name)
                .join(", ")
            : "N/A"}
        </p>
      </div>

      {mediaType === "tv" && (
        <div>
          <div className="flex max-lg:flex-col lg:items-center gap-x-1">
            <p className="whitespace-nowrap">No of Seasons: </p>
            <p className="text-gray">{mediaDetails?.number_of_seasons || "N/A"}</p>
          </div>

          <div className="flex max-lg:flex-col lg:items-center gap-x-1">
            <p className="whitespace-nowrap">Total Episodes: </p>
            <p className="text-gray">{mediaDetails?.number_of_episodes || "N/A"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreMediaAdditionalInfo;
