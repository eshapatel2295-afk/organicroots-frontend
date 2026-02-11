import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_BASE_URL from "../config";

const CropDetail = () => {
  const { id } = useParams();
  const [crop, setCrop] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/crops/${id}`)
      .then((res) => res.json())
      .then((data) => setCrop(data))
      .catch((err) => console.error("Error fetching crop:", err));
  }, [id]);

  if (!crop) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center mb-3">{crop.name}</h1>
      <img
        src={crop.image}
        alt={crop.name}
        className="d-block mx-auto mb-4"
        style={{ maxWidth: "500px", borderRadius: "10px" }}
      />
      <h4 className="text-success">Season: {crop.season}</h4>
      <p className="mt-3">{crop.description}</p>
      <h5 className="mt-4 fw-bold">How to Grow:</h5>
      <p>{crop.howToGrow}</p>
    </div>
  );
};

export default CropDetail;
