import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_BASE_URL from "../../config";
import "./Learn.css";

const LearnPage = () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/learning-modules`); // fetch all modules
        const data = await res.json();
        setModules(data);
      } catch (error) {
        console.error("Error fetching modules:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchModules();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading modules...</div>;
  }

  return (
    <div className="container py-5">
      <div class="text-center mb-5">
                    <h1 class="fw-bold">Organic Farming Knowledge Hub</h1>
                    <p class="lead text-muted">Start with our learning modules or jump directly to a seasonal crop guide.</p>
                </div>
                <h3 class="fw-semibold mb-4 text-center">Learning Modules</h3>
      <div className="row g-4">
        {modules.map((module) => (
          <div className="col-md-4" key={module._id}>
            <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
              <img
                src={module.thumbnail}
                className="card-img-top"
                alt={module.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold">{module.title}</h5>
                <p className="card-text text-muted">{module.short_description}</p>
                <Link
                  to={`/learn/${module._id}`}
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

export default LearnPage;
