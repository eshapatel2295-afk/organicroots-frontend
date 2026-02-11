import React, { useEffect, useState } from "react";
import API_BASE_URL from "../config";

const CropsPage = () => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/crops`)
      .then((res) => res.json())
      .then((data) => setCrops(data))
      .catch((err) => console.error("Error fetching crops:", err));
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Crops</h1>
      <div className="row">
        {crops.map((crop) => (
          <div className="col-md-4 mb-4" key={crop._id}>
            <div className="card h-100 shadow-sm">
              <img
                src={crop.image}
                className="card-img-top"
                alt={crop.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{crop.name}</h5>
                <p className="card-text">{crop.description}</p>
                <a href={`/crop/${crop._id}`} className="btn btn-success">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropsPage;
