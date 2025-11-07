import { API_OPTIONS } from "@/utils/constant";
import { useEffect, useState } from "react";

const useReviews = (mediaType, id) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mediaType || !id) return;

    const fetchReviews = async () => {
      try {
        setLoading(true);

        const url = `https://api.themoviedb.org/3/${mediaType}/${id}/reviews?language=en-US`;

        const res = await fetch(url, API_OPTIONS);
        const json = await res.json();
        setReviews(json.results);

      } catch (err) {
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();

  }, [mediaType, id]);

  return {reviews, loading};
};

export default useReviews;
