import React from "react";
import { useParams } from "react-router-dom";

const Place = () => {
  const { placeId } = useParams();

  return (
    <div>
      <h1>Place: {placeId}</h1>
    </div>
  );
};

export default Place;
