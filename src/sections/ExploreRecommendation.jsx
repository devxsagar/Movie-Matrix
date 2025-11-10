import React from "react";
import SectionCarousel from "@/components/SectionCarousel";
import useRelatedMedia from "@/hooks/useRelatedMedia";
import { motion } from "framer-motion";

const ExploreRecommendation = ({ mediaType, id }) => {
  const { data } = useRelatedMedia(mediaType, id, "recommendations");
  return (
    data.length > 0 && (
      <div>
        <motion.div
          className="mt-15"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
        >
          <h2 className="text-2xl font-semibold tracking-tight mb-2">Recommendations</h2>
          <SectionCarousel data={data} mediaType={mediaType} />
        </motion.div>
      </div>
    )
  );
};

export default ExploreRecommendation;
