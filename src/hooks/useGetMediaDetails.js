import { useEffect, useState } from "react";
import { API_OPTIONS } from "@/utils/constant";

const useGetMediaDetails = (mediaType, id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!mediaType || !id) return;

    // Create AbortController to cancel fetch if component unmounts
    const controller = new AbortController();

    // Async function to fetch media details
    const getMediaDetails = async () => {
      try {
        setLoading(true);

        const url = `https://api.themoviedb.org/3/${mediaType}/${id}?language=en-US`;

        const response = await fetch(url, API_OPTIONS);
        const json = await response.json();
        setData(json);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error fetching similar media:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    getMediaDetails();

    // Cancel fetch if component unmounts
    return () => {
      controller.abort();
    };
  }, [mediaType, id]);

  return { data, loading };
};

export default useGetMediaDetails;
