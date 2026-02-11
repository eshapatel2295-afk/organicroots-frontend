import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import AddressForm from "./AddressForm";

const Checkout = () => {
  const { cart } = useCart();
  const { token, user } = useAuth();
  const navigate = useNavigate();

  const [address, setAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loading, setLoading] = useState(false);

  const total = cart.items.reduce((sum, i) => (i.product?.price || 0) * i.quantity + sum, 0);

  const handlePlaceOrder = async () => {
    if (!user) return alert("Please login to place an order");
    if (!address) return alert("Please enter delivery address");

    setLoading(true);
    try {
      const { data } = await api.post("/orders/place", { paymentMethod, address }, { headers: { Authorization: `Bearer ${token}` }});
      setLoading(false);
      navigate(`/order-success/${data._id}`, { state: { order: data } });
    } catch (err) {
      setLoading(false);
      console.error("placeOrder error", err.response?.data || err.message);
      alert(err.response?.data?.error || "Order failed");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Checkout</h2>
      <div className="row">
        <div className="col-lg-7">
          <div className="card p-3 mb-4">
            <h5>Delivery Address</h5>
            <AddressForm onSubmit={(addr) => setAddress(addr)} />
          </div>

          <div className="card p-3">
            <h5>Payment</h5>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="payment" id="cod" value="COD" checked={paymentMethod === "COD"} onChange={() => setPaymentMethod("COD")} />
              <label className="form-check-label" htmlFor="cod">Cash on Delivery</label>
            </div>
            <div className="form-check mt-2">
              <input className="form-check-input" type="radio" name="payment" id="online" value="ONLINE" checked={paymentMethod === "ONLINE"} onChange={() => setPaymentMethod("ONLINE")} />
              <label className="form-check-label" htmlFor="online">Online Payment (Integration coming)</label>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card p-3 mb-3">
            <h5>Order Summary</h5>
            {cart.items.map((it) => (
              <div key={it.product._id} className="d-flex justify-content-between py-2">
                <div>
                  <div className="fw-semibold">{it.product.name}</div>
                  <small className="text-muted">Qty: {it.quantity}</small>
                </div>
                <div>₹{(it.product.price * it.quantity).toFixed(2)}</div>
              </div>
            ))}
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <div>Total</div>
              <div>₹{total.toFixed(2)}</div>
            </div>
            <button className="btn btn-success w-100 mt-3" onClick={handlePlaceOrder} disabled={loading}>
              {loading ? "Placing..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
