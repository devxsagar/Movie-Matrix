import { useEffect, useState } from "react";
import { API_OPTIONS } from "@/utils/constant";

const useMediaCredits = ( mediaType, id ) => {
  const [directors, setDirectors] = useState({});
  const [cast, setCast] = useState({});

  const getCredits = async () => {
    const url = `https://api.themoviedb.org/3/${mediaType}/${id}/credits?language=en-US`;

    const res = await fetch(url, API_OPTIONS);
    const json = await res.json();

    setCast(json.cast);
    setDirectors(json.crew.filter((member) => member.known_for_department === "Directing"));
  };

  useEffect(() => {
    getCredits();
  }, []);

  return { directors, cast };
};

export default useMediaCredits;
