import { API_OPTIONS } from "@/utils/constant";
import { useEffect, useState } from "react";

const useGetTrailer = (mediaType, id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

    
  useEffect(() => {
    if (!mediaType || !id) return;

    // Create AbortController to cancel fetch if component unmounts
    const controller = new AbortController();

    const getTrailer = async () => {
        try {
            setLoading(true);

            const url = `https://api.themoviedb.org/3/${mediaType}/${id}/videos?language=en-US`;
            
            const res = await fetch(url, API_OPTIONS);
            const json = await res.json();
            const trailer = json.results.filter((video) => video.type === "Trailer");
            setData(trailer[0] || trailer[1]);

        } catch(err) {
            if (err.name !== "AbortError") {
                console.error("Error fetching trailer:", err);
            }
        } finally {
            setLoading(false);
        }
    }

    getTrailer();

    () => controller.abort();
  },[mediaType, id]);

  return { data, loading };
};

export default useGetTrailer;
