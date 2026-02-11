// src/pages/CartPage.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import API_BASE_URL from "../config";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  if (!cart || cart.items.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>Your cart is empty 🛒</h2>
        <button
          className="btn btn-success mt-3"
          onClick={() => navigate("/marketplace")}
        >
          Go to Marketplace
        </button>
      </div>
    );
  }

  const getImageUrl = (img) => {
  if (!img) return "/placeholder.png"; // fallback image
  return img.startsWith("http") ? img : `${API_BASE_URL.replace("/api", "")}/${img}`;
};

  // Handle quantity change
  const handleQuantityChange = (productId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQty);
    }
  };

  // Calculate total price
  const totalPrice = cart.items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">🛒 Your Cart</h2>

      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8">
          {cart.items.map((item) => (
            <div
              key={item.product._id}
              className="d-flex align-items-center justify-content-between bg-white shadow-sm rounded-4 mb-3 p-3"
            >
              <div className="d-flex align-items-center">
                <img
                  src={getImageUrl(item.product.image)}
                  alt={item.product.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  className="me-3"
                />
                <div>
                  <h5 className="fw-semibold">{item.product.name}</h5>
                  <p className="mb-0 text-muted">₹{item.product.price}</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() =>
                    handleQuantityChange(item.product._id, item.quantity - 1)
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() =>
                    handleQuantityChange(item.product._id, item.quantity + 1)
                  }
                >
                  +
                </button>
                <button
                  className="btn btn-danger btn-sm ms-3"
                  onClick={() => removeFromCart(item.product._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="bg-white shadow-sm rounded-4 p-4">
            <h4 className="fw-bold mb-3">Order Summary</h4>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal:</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span>Delivery:</span>
              <span>₹0.00</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
              <span>Total:</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              className="btn btn-success w-100 mt-3"
            >
              Proceed to Checkout
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
