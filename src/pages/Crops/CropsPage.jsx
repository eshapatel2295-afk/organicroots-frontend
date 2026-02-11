import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_BASE_URL from "../../config";


const CropsPage = () => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/crops`);
        const data = await res.json();
        setCrops(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCrops();
  }, []);

  if (loading) return <div className="text-center py-5">Loading crops...</div>;

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fw-bold">Crops</h1>
      <div className="row g-4">
        {crops.map((crop) => (
          <div className="col-md-4" key={crop._id}>
            <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
              <img
                src={crop.image}
                className="card-img-top"
                alt={crop.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold">{crop.name}</h5>
                <p className="card-text text-muted">{crop.shortDescription}</p>
                <Link
                  to={`/crop/${crop._id}`}
                  className="btn btn-success rounded-pill px-4"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropsPage;
