import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API_BASE_URL from "../../config";

const CropDetailsPage = () => {
  const { id } = useParams();
  const [crop, setCrop] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrop = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/crops/${id}`);
        const data = await res.json();
        setCrop(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCrop();
  }, [id]);

  if (loading) return <div className="text-center py-5">Loading crop details...</div>;
  if (!crop) return <div className="text-center py-5">Crop not found</div>;

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">{crop.name}</h1>
      <img src={crop.image} alt={crop.name} className="img-fluid mb-4 rounded-4" />
      <p className="lead">{crop.detailedInfo}</p>
      <p><strong>Category:</strong> {crop.category}</p>
      <p><strong>Season:</strong> {crop.season}</p>
      <Link to="/marketplace" className="btn btn-success mt-4">Back to Crops</Link>
    </div>
  );
};

export default CropDetailsPage;
