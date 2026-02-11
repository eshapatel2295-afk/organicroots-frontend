import React from "react";
import aboutimage from "../assets/images/aboutpageimage.png";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutPage = () => {
  return (
    <div className="container py-5">

      {/* 🌿 Header Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-success">About Organic Roots</h1>
        <p className="lead text-muted">
          Empowering sustainable farming and healthy living — grown with care, for people who care.
        </p>
      </div>

      {/* 🌱 Our Story Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={aboutimage}
            className="img-fluid rounded shadow-sm"
            alt="Organic Roots Farm"
            style={{ height: "250px", objectFit: "cover", width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="fw-semibold text-success">Our Story</h2>
          <p className="text-muted">
            <strong>Organic Roots</strong> was born from a passion for pure food and green living.
            It started as a small initiative to connect communities with authentic organic farming
            knowledge. Over time, it evolved into a platform that empowers individuals to learn,
            grow, and sell organic produce sustainably.
          </p>
          <p className="text-muted">
            Our mission is simple — to make organic farming accessible to everyone, while building
            a future that respects both farmers and nature.
          </p>
        </div>
      </div>

      {/* 🌾 Philosophy Section */}
      <div className="bg-light p-5 rounded-4 shadow-sm mb-5">
        <h2 className="fw-semibold text-center text-success mb-4">Our Philosophy</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <i className="bi bi-tree-fill fs-1 text-success mb-3"></i>
            <h5 className="fw-semibold">Soil First</h5>
            <p className="text-muted px-3">
              We believe healthy soil is the foundation of life. Through composting and natural
              fertilizers, we enrich the land instead of depleting it.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-droplet-half fs-1 text-primary mb-3"></i>
            <h5 className="fw-semibold">Water Wise</h5>
            <p className="text-muted px-3">
              Every drop matters. We promote rainwater harvesting, drip irrigation, and responsible
              water management for sustainable cultivation.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-bug-fill fs-1 text-warning mb-3"></i>
            <h5 className="fw-semibold">Bio-Diversity</h5>
            <p className="text-muted px-3">
              A balanced ecosystem thrives on variety. We encourage pollinators and beneficial
              insects to create naturally resilient farms.
            </p>
          </div>
        </div>
      </div>

      {/* 💡 Vision Section */}
      <div className="text-center mb-5">
        <h2 className="fw-semibold text-success mb-3">Our Vision</h2>
        <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
          To inspire and educate the next generation of farmers and consumers — helping them adopt
          sustainable practices, support local produce, and nurture a greener tomorrow.
        </p>
      </div>

      {/* 👩‍💻 Developer Section */}
      <div className="text-center py-4 border-top">
        <h5 className="fw-semibold text-secondary">Developed & Designed by</h5>
        <h4 className="fw-bold text-success mb-1">Esha Patel</h4>
        <p className="text-muted mb-0">Creator of <strong>Organic Roots</strong> | Passionate about Technology & Sustainability</p>
      </div>
    </div>
  );
};

export default AboutPage;
