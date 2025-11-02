import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SectionHeader = ({ title, mediaType, category }) => {
  const navigate = useNavigate();

  const handleViewAllButton = () => {
    navigate(`/explore/${mediaType}/${category}`);
  }

  return (
    <div className="flex items-center justify-between mb-5">
      <h3 className="uppercase tracking-wide  text-2xl font-semibold">{title}</h3>
      <p className="flex items-center gap-2 text-sm font-medium tracking-wide text-gray cursor-pointer hover:text-white hover-animation" onClick={handleViewAllButton}>
        View all
        <ArrowRight className="w-5 h-5" />
      </p>
    </div>
  );
};

export default SectionHeader;
