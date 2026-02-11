import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LearnDetailsPage from './Learn/LearnDetailsPage.jsx';
import "../styles/main.css";
import { Leaf, BookOpen, Award } from "lucide-react";



const Home = () => {
  const [modules, setModules] = useState([]); // Learning Modules
  const [products, setProducts] = useState([]);     // Featured Products
  const [selectedModule, setSelectedModule] = useState(null);

  // Fetch Learning Modules
  useEffect(() => {
    const fetchModules = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/learning-modules?limit=3");
        const data = await res.json();
        setModules(data.slice(0, 3)); // limit to 3 featured modules
      } catch (err) {
        console.error(err);
      }
    };
    fetchModules();
  }, []);

  // ✅ Fetch Featured Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data.slice(0, 3)); // show top 3 products
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);


   const handleBack = () => setSelectedModule(null);

  if (selectedModule) {
    return <LearnDetailsPage item={selectedModule} onBack={handleBack} />;
  }

  return (
    <div id="main-site-container">
      <main>
        {/* Hero Section */}
        <section className="hero-bg d-flex justify-content-center align-items-center text-center text-white" style={{ height: "450px" }}>
          <div>
            <h1 className="display-4 fw-bold mb-2">From Soil to Soul</h1>
            <p className="lead mb-3 mx-auto" style={{ maxWidth: "600px" }}>
              Connecting you with local organic farmers and empowering you to grow your own food. Fresh, healthy, and sustainable.
            </p>
            <div>
              <Link to="/learn" className="btn btn-success btn-lg me-3">Start Learning</Link>
              <Link to="/marketplace" className="btn btn-light btn-lg">Shop Fresh Products</Link>
            </div>
          </div>
        </section>


        {/*Highlights Section */}
        <section class="py-5 bg-white">
          <div class="container text-center">
            <h2 class="fw-bold mb-5">Why Choose Organic Roots?</h2>
            <div class="row g-4">
              <div class="col-md-4">
                <div class="p-4">
                  <Leaf className="text-success mb-3" size={48} />
                  <h3 class="fs-4 fw-semibold mb-2">Certified Organic Products</h3>
                  <p class="text-muted">Shop with confidence from a marketplace of verified local farmers offering genuinely organic produce.</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="p-4">
                  <BookOpen className="text-success mb-3" size={48} />
                  <h3 class="fs-4 fw-semibold mb-2">Learn to Farm</h3>
                  <p class="text-muted">Access step-by-step guides, from terrace gardening to large-scale farming, to grow your own food.</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="p-4">
                  <Award className="text-success mb-3" size={48} />
                  <h3 class="fs-4 fw-semibold mb-2">Government Schemes</h3>
                  <p class="text-muted">Stay informed about beneficial government schemes and support available for aspiring and current farmers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Featured Learning Modules */}
        <section className="py-5 ">
          <div className="container">
            <div className="mb-5 text-center">
              <h2 className="fw-bold">New to Organic Farming?</h2>
              <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
                Begin with these essential guides handpicked for aspiring organic gardeners and farmers.
              </p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
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
            <div className="text-center mt-4">
              <Link to="/learn" className="btn btn-success">View All Learning Modules</Link>
            </div>
          </div>
        </section>

        {/* ✅ Featured Products Section (replacing Featured Crops) */}
        <section className="py-5 bg-white">
          <div className="container">
            <h2 className="text-center fw-bold mb-4">Featured Products</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {products.map((product) => (
                <div key={product._id} className="col">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title fw-semibold">{product.name}</h5>
                      <p className="card-text text-muted">{product.description}</p>
                      <p className="fw-bold text-success">₹{product.price}</p>
                      <Link
                        to={`/marketplace/${product._id}`}
                        className="btn btn-success rounded-pill px-4"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link to="/marketplace" className="btn btn-success">
                View All Products
              </Link>
            </div>
          </div>
        </section>


        {/* Why People Choose Organic Testimonials */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center fw-bold mb-5">Why People Choose Organic</h2>
            <div className="row g-4">

              <div className="col-md-4">
                <div className="card h-100 shadow-sm border-0 testimonial-card">
                  <div className="card-body text-center p-4">
                    <img
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2071&auto=format&fit=crop"
                      className="rounded-circle mb-3"
                      alt="Sonal K."
                      width="80"
                      height="80"
                      style={{ objectFit: "cover" }}
                    />
                    <p className="text-muted">
                      "Switching to organic has improved my family's health. No more chemical worries!"
                    </p>
                    <h6 className="fw-semibold mt-4 mb-0">Sonal K.</h6>
                    <p className="text-muted small">Nutritionist, Pune</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 shadow-sm border-0 testimonial-card">
                  <div className="card-body text-center p-4">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2071&auto=format&fit=crop"
                      className="rounded-circle mb-3"
                      alt="Rajesh P."
                      width="80"
                      height="80"
                      style={{ objectFit: "cover" }}
                    />
                    <p className="text-muted">
                      "I care about the planet. Organic farming supports eco-friendly practices."
                    </p>
                    <h6 className="fw-semibold mt-4 mb-0">Rajesh P.</h6>
                    <p className="text-muted small">Environmentalist, Delhi</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card h-100 shadow-sm border-0 testimonial-card">
                  <div className="card-body text-center p-4">
                    <img
                      src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=2071&auto=format&fit=crop"
                      className="rounded-circle mb-3"
                      alt="Neha S."
                      width="80"
                      height="80"
                      style={{ objectFit: "cover" }}
                    />
                    <p className="text-muted">
                      "Buying organic helps local farmers earn fair prices and keeps the community strong."
                    </p>
                    <h6 className="fw-semibold mt-4 mb-0">Neha S.</h6>
                    <p className="text-muted small">Home Gardener, Mumbai</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


      </main>
    </div>
  );
};

export default Home;
