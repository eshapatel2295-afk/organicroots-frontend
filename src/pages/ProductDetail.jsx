import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API_BASE_URL from "./../config";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [review, setReview] = useState({ rating: 0, comment: "" });

  const { addToCart } = useCart();

  const { user } = useAuth(); // import useAuth from AuthContext
  const handleAddToCart = () => {
    if (user.role !== "buyer") {
      alert("Only buyers can add products to the cart");
      return;
    }
    addToCart(product._id, 1);
    alert("Added to cart!");
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        // Optionally set an error state here
      }
    };
    fetchProduct();
  }, [id]);

  const handleReviewSubmit = async (e) => {
  e.preventDefault();

  if (!user) {
    alert("You must be logged in to submit a review.");
    return;
  }

  try {
    const res = await fetch(`${API_BASE_URL}/products/${id}/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        rating: review.rating,
        comment: review.comment,
      }),
    });

    if (!res.ok) throw new Error("Failed to submit review");

    const data = await res.json();
    setProduct(data);
    setReview({ rating: 0, comment: "" });
  } catch (error) {
    console.error("Error submitting review:", error);
    alert(error.message);
  }
};

  if (!product)
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  const getImageUrl = (img) => {
    if (!img) return "/placeholder.png"; // fallback image
    return img.startsWith("http") ? img : `${API_BASE_URL.replace("/api", "")}/${img}`;
  };

  // Custom styles for an organic feel
  const styles = {
    organicGreen: "#28a745", // A slightly brighter success green for focus
    lightBg: "#f8fcf7", // Very light off-white/pale green background
    reviewBorder: "2px solid #e9ecef",
  };

  return (

    <div className="container py-5">
      <Link
        to="/marketplace"
        className="btn btn-success mb-4 rounded-pill px-4 py-2"
        style={{ fontWeight: "600" }}
      >
        Back to Marketplace
      </Link>
      <div className="row g-5">
        {/* LEFT: Image Section */}
        <div className="col-lg-5 text-center">
          <div
            className="p-3 bg-white rounded-4 shadow-lg"
            style={{ border: `1px solid ${styles.organicGreen}` }}
          >
            <img
              src={getImageUrl(product.image)}
              alt={product.name}
              className="img-fluid rounded-3"
              style={{ maxHeight: "450px", objectFit: "cover", width: "100%" }}
            />
          </div>

          {/* Image gallery (simplified to show concept) */}
          {product.gallery && product.gallery.length > 0 && (
            <div className="d-flex justify-content-center gap-2 mt-3">
              {product.gallery.map((img, index) => (
                <img
                  key={index}
                  src={getImageUrl(img)}
                  alt={`Gallery ${index}`}
                  className="rounded-3 shadow-sm"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    cursor: "pointer",
                    border: "3px solid #e9ecef", // visual indicator for gallery items
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Product Details */}
        <div className="col-lg-7">
          <h1 className="fw-bolder mb-1" style={{ fontSize: "2.5rem" }}>
            {product.name}
          </h1>
          <p className="text-muted text-uppercase fw-semibold mb-3">
            {product.category}
          </p>
          <h2 className="fw-bolder mb-4" style={{ color: styles.organicGreen, fontSize: "2rem" }}>
            ₹{product.price}
          </h2>

          <p className="lead border-bottom pb-4 mb-4">{product.description}</p>

          {/* Key Information Badges */}
          <div className="d-flex flex-wrap gap-3 mb-4">
            <span className="badge bg-success py-2 px-3 fs-6">
              {product.stock > 0 ? "✅ In Stock" : "❌ Out of Stock"}
            </span>
            <span className="badge bg-secondary py-2 px-3 fs-6">
              ✨ {product.organicCertification || "No Certification"}
            </span>
            <span className="badge bg-info py-2 px-3 fs-6">
              ⭐ {product.reviews ? product.reviews.length : 0} Reviews
            </span>
          </div>

          {product.highlights && product.highlights.length > 0 && (
            <div className="mb-4 p-3 rounded-3" style={{ backgroundColor: "#e8f5e9" }}>
              <h5 className="fw-bold text-success mb-2">🌿 Product Highlights</h5>
              <ul className="list-unstyled mb-0 ms-0">
                {product.highlights.map((h, i) => (
                  <li key={i} className="py-1">
                    <span className="text-success me-2">✔</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            className="btn btn-success btn-lg rounded-pill px-5 shadow-lg"
            style={{ fontWeight: "bold" }}
            onClick={handleAddToCart}
          >
            🛒 {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* --- EXTRA DETAILS SECTION --- */}
      <div className="mt-5 pt-4 border-top">
        <h3 className="fw-bold mb-4" style={{ color: styles.organicGreen }}>
          Comprehensive Details
        </h3>
        <div className="row g-4">
          {/* Health Benefits */}
          {product.healthBenefits && product.healthBenefits.length > 0 && (
            <div className="col-lg-6">
              <div className="p-4 rounded-4 shadow-sm h-100 bg-white border border-success">
                <h5 className="fw-bold text-success mb-3">💖 Health Benefits</h5>
                <ul className="ms-3">
                  {product.healthBenefits.map((b, i) => (
                    <li key={i} className="mb-2">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Nutrition Info */}
          {product.nutrition && (
            <div className="col-lg-6">
              <div className="p-4 rounded-4 shadow-sm h-100 bg-white border">
                <h5 className="fw-bold text-success mb-3">📊 Nutritional Information</h5>
                <p className="mb-1">
                  <strong>Calories:</strong> {product.nutrition.calories}
                </p>
                <p className="mb-1">
                  <strong>Vitamins:</strong> {product.nutrition.vitamins}
                </p>
                <p className="mb-1">
                  <strong>Minerals:</strong> {product.nutrition.minerals}
                </p>
              </div>
            </div>
          )}

          {/* Storage & Usage */}
          {product.storage && (
            <div className="col-lg-6">
              <div className="p-4 rounded-4 shadow-sm h-100 bg-white border">
                <h5 className="fw-bold text-success mb-3">📦 Storage & Usage</h5>
                <p>{product.storage}</p>
              </div>
            </div>
          )}

          {/* Sustainability Info */}
          {product.sustainability && (
            <div className="col-lg-6">
              <div className="p-4 rounded-4 shadow-sm h-100 bg-white border">
                <h5 className="fw-bold text-success mb-3">🌍 Sustainability Info</h5>
                <p>{product.sustainability}</p>
              </div>
            </div>
          )}

          {/* Farmer Info (Moved to bottom of details) */}
          {product.farmer && (
            <div className="col-12">
              <div className="p-4 rounded-4 shadow-sm bg-white border border-secondary">
                <h5 className="fw-bold text-success mb-3">👨‍🌾 About the Farmer</h5>
                <div className="row">
                  <div className="col-md-4">
                    <strong>Name:</strong> {product.farmer.name}
                  </div>
                  <div className="col-md-4">
                    <strong>Location:</strong> {product.farmer.location}
                  </div>
                  <div className="col-md-4">
                    <strong>Contact:</strong> {product.farmer.contact}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* --- REVIEWS SECTION --- */}
      <div className="mt-5 pt-4 border-top">
        <h3 className="fw-bold mb-4" style={{ color: styles.organicGreen }}>
          ⭐ Customer Reviews
        </h3>
        <div className="row g-4">
          <div className="col-lg-7">
            {product.reviews && product.reviews.length > 0 ? (
              product.reviews.map((r, i) => (
                <div
                  key={i}
                  className="p-4 mb-3 rounded-4 shadow-sm"
                  style={{ border: styles.reviewBorder, backgroundColor: "white" }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="fw-bold mb-0">{r.name}</h6>
                    <div className="text-warning fs-5">
                      {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                    </div>
                  </div>
                  <p className="mb-0 text-muted">{r.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-muted p-4 border rounded-3 bg-white">
                No reviews yet. Be the first to review this organic product!
              </p>
            )}
          </div>

          {/* Add Review Form */}
          <div className="col-lg-5">
            <div className="p-4 rounded-4 shadow-lg bg-white border border-success">
              <h5 className="fw-bold mb-3">✍️ Leave a Review</h5>
              <form onSubmit={handleReviewSubmit}>
                
                <div className="mb-3">
                  <select
                    className="form-select"
                    value={review.rating}
                    onChange={(e) =>
                      setReview({ ...review, rating: Number(e.target.value) })
                    }
                    required
                  >
                    <option value="0">Select Rating</option>
                    {[1, 2, 3, 4, 5].map((r) => (
                      <option key={r} value={r}>
                        {r} Star
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Write your review..."
                    value={review.comment}
                    onChange={(e) => setReview({ ...review, comment: e.target.value })}
                    required
                  ></textarea>
                </div>
                <div className="text-end">
                  <button
                    type="submit"
                    className="btn btn-success rounded-pill px-4 fw-semibold"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProductDetail;