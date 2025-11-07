import React from "react";
import { IMAGE_URL } from "@/utils/constant";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PosterCard = ({ posterPath, movieTitle, movieName, mediaType, id }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/details/${mediaType}/${movieName || movieTitle}/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div className="flex flex-col items-center cursor-pointer" onClick={handleNavigation}
    initial={{ scale: 1 }}
    whileHover={{ scale: 0.95 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <img
        src={IMAGE_URL + posterPath}
        alt={movieTitle || movieName}
        loading="lazy"
        className="h-50 rounded-lg"
      />
      <p className="text-sm text-center tracking-wide leading-5 px-0.5 mt-2">
        {movieTitle || movieName}
      </p>
    </motion.div>
  );
};

export default PosterCard;
