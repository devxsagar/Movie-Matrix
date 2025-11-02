import useSectionFetch from "@/hooks/useSectionFetch";
import React from "react";
import SectionHeader from "@/components/SectionHeader";
import SectionCarousel from "@/components/SectionCarousel";
import { Skeleton } from "@/components/ui/skeleton";
import MediaSectionSkeleton from "@/components/skeleton/MediaSectionSkeleton";

const MediaSection = ({ title, category, mediaType, page = 1 }) => {
  // Fetch  data
  const data = useSectionFetch({ category, mediaType, page });

  return !data ? (
    <MediaSectionSkeleton />
  ) : (
    <div className="pt-10 mb-10">
      {/* Header */}
      <SectionHeader title={title} category={category} mediaType={mediaType} />

      {/* Carousel */}
      <SectionCarousel data={data} />
    </div>
  );
};

export default MediaSection;
