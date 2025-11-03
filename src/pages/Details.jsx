import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {

  const { mediaType, title, id } = useParams();
  console.log({mediaType, title, id});

  return <div>Details</div>;
};

export default Details;
