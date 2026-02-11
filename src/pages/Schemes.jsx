import React, { useEffect, useState } from "react";
import farmersImage from "../assets/images/farmerinfielr.png";
import "../styles/main.css";

const Schemes = () => {
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/schemes")
      .then((res) => res.json())
      .then((data) => setSchemes(data))
      .catch((err) => console.error("Error fetching schemes:", err));
  }, []);

  const mainSchemes = schemes.filter(s => s.category === "main");
  const additionalSchemes = schemes.filter(s => s.category === "additional");

  return (
    <div id="schemes-content">
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Empowering Farmers Through Government Support</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Explore key government schemes promoting sustainable and organic farming.
            </p>
          </div>

          <div className="row align-items-center mb-5 g-4">
            <div className="col-lg-6">
              <img
                src={farmersImage}
                className="img-fluid rounded-3 shadow"
                alt="Farmers in field"
                style={{ height: "300px", objectFit: "cover", width: "100%" }}
              />
            </div>
            <div className="col-lg-6">
              <div className="list-group shadow-sm">
                {mainSchemes.map((scheme, index) => (
                  <a key={index} href={scheme.url} target="_blank" rel="noreferrer" className="list-group-item list-group-item-action">
                    <h5 className="mb-1 fw-semibold text-success">{scheme.name}</h5>
                    <p className="mb-1 text-muted small">{scheme.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-10 mx-auto">
            <h3 className="fw-bold text-center mb-4">Additional Key Schemes</h3>
            <div className="list-group">
              {additionalSchemes.map((scheme, index) => (
                <a key={index} href={scheme.url} target="_blank" rel="noreferrer" className="list-group-item list-group-item-action">
                  <h5 className="mb-1 fw-semibold text-success">{scheme.name}</h5>
                  <p className="mb-1 text-muted">{scheme.description}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="text-center mt-5">
            <div className="alert alert-info" role="alert">
              <strong>Note:</strong> Always check official government websites for the latest updates.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schemes;
