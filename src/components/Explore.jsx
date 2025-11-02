import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumbNavigation from "./BreadCrumbNavigation";

const Explore = () => {
  const { mediaType, category } = useParams();

  return (
    <section className="border px-4 py-10">
      {/* Breadcrumb */}
      <BreadCrumbNavigation mediaType={mediaType} category={category} />

      {/* Content */}
      <div>
        
      </div>
    </section>
  );
};

export default Explore;
