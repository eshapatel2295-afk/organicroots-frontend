// src/pages/MarketplacePage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API_BASE_URL from "./../config";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";


const MarketplacePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState("popularity");

  const navigate = useNavigate();

  const { addToCart } = useCart();
  const { user } = useAuth();


  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/products`);
        const data = await res.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  // Filter & sort products
  useEffect(() => {
    let updated = [...products];

    // Search filter
    if (searchTerm.trim() !== "") {
      updated = updated.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      updated = updated.filter((p) => selectedCategories.includes(p.category));
    }

    // Sort
    if (sortOption === "price-asc") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
      updated.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updated);
  }, [searchTerm, selectedCategories, sortOption, products]);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((c) => c !== value)
    );
  };

  const getImageUrl = (img) => {
  if (!img) return "/placeholder.png"; // fallback image
  return img.startsWith("http") ? img : `${API_BASE_URL.replace("/api", "")}/${img}`;
};

  return (
    <div id="market-content" >
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Local Organic Marketplace</h2>
          <div className="row">
            {/* Sidebar Filters */}
            <div className="col-lg-3 mb-4">
              <div className="card shadow-sm border-0 p-3 sticky-top" style={{ top: "100px" }}>
                <h4 className="fw-semibold mb-3">Filter & Sort</h4>

                {/* Search */}
                <div className="mb-3">
                  <label htmlFor="search" className="form-label fw-medium">Search</label>
                  <input
                    type="text"
                    id="search"
                    className="form-control"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Categories */}
                <h5 className="fw-medium fs-6 mb-2 mt-4">Category</h5>
                {["vegetable", "fruit", "grain", "dairy"].map((cat) => (
                  <div className="form-check" key={cat}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={cat}
                      id={`check-${cat}`}
                      onChange={handleCategoryChange}
                    />
                    <label className="form-check-label" htmlFor={`check-${cat}`}>
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </label>
                  </div>
                ))}

                {/* Sort */}
                <div className="mt-4">
                  <label htmlFor="sort-by" className="form-label fw-medium">Sort by:</label>
                  <select
                    id="sort-by"
                    className="form-select"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="popularity">Popularity</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product List */}
            <div className="col-lg-9">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div
                      className="col"
                      key={product._id}
                      onClick={() => navigate(`/marketplace/${product._id}`)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="card h-100 shadow-sm border-0">
                        <img
                          src={getImageUrl(product.image)}
                          alt={product.name}
                          className="card-img-top rounded-top"
                          style={{ height: "200px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title fw-semibold text-success">{product.name}</h5>
                          <p className="text-muted small">{product.description?.slice(0, 80)}...</p>
                          <h6 className="fw-bold text-dark">₹{product.price}</h6>
                          {/* Add to Cart Button */}
                          {user?.role === "buyer" && (
                            <button
                              className="btn btn-success mt-2"
                              disabled={product.stock === 0}
                              onClick={(e) => {
                                e.stopPropagation(); // prevent navigating to product details
                                addToCart(product._id, 1);
                                alert("Product added to cart!");
                              }}
                            >
                              🛒 {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center py-5 text-muted">No products found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketplacePage;
