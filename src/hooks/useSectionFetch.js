import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant"

const useSectionFetch = ({ category, mediaType }) => {
    const [data, setData] = useState(null);

  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/${category}/${mediaType}/day?language=en-US`,
      API_OPTIONS
    );
    const json = await response.json();
    setData(json.results);
  };

  useEffect(() => {
    getData();
  }, []);


  return data;
};

export default useSectionFetch;
