// frontend/src/pages/OrderSuccess.jsx
import React from "react";
import { useLocation, Link } from "react-router-dom";

const OrderSuccess = () => {
  const { state } = useLocation();
  const order = state?.order;

  if (!order) {
    return (
      <div className="container py-5 text-center">
        <h3>Your order has been placed!</h3>
        <Link to="/home" className="btn btn-success mt-3">Go Home</Link>
      </div>
    );
  }

  const renderAddress = (addr) => {
    if (!addr) return "";
    return (
      <>
        <div>{addr.name}</div>
        <div>{addr.phone}</div>
        <div>{addr.house}</div>
        <div>{addr.city}, {addr.state} - {addr.pincode}</div>
      </>
    );
  };

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4" style={{ maxWidth: "700px", width: "100%", borderRadius: "15px" }}>
        
        {/* Success Icon */}
        <div className="text-center mb-4">
          <div 
            className="rounded-circle bg-success d-flex justify-content-center align-items-center"
            style={{ width: "80px", height: "80px", margin: "0 auto" }}
          >
            <i className="bi bi-check2-circle text-white" style={{ fontSize: "40px" }}></i>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-center text-success fw-bold mb-3">
          Order Placed Successfully!
        </h2>
        <p className="text-center text-muted mb-4">
          Thank you for shopping with <strong>Organic Roots</strong>. Your order has been confirmed and is now being processed.
        </p>

        {/* Order Details */}
        <div className="bg-light p-3 rounded mb-3 border">
          <p className="mb-2"><strong>Order ID:</strong> <span className="text-primary">{order._id}</span></p>
          <p className="mb-2"><strong>Total Amount:</strong> ₹{order.totalAmount}</p>
          <p className="mb-2"><strong>Payment Method:</strong> {order.paymentMethod}</p>
          <p className="mb-0"><strong>Delivery Address:</strong></p>
          <div className="ms-3 text-secondary">{renderAddress(order.address)}</div>
        </div>

        {/* Items Table */}
        <div className="bg-light p-3 rounded mb-4 border">
          <h5 className="mb-3">Items:</h5>
          <div className="table-responsive">
            <table className="table table-sm mb-0">
              <thead>
                <tr>
                  <th>Product</th>
                  <th className="text-center">Qty</th>
                  <th className="text-end">Price</th>
                  <th className="text-end">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.product._id}>
                    <td>{item.product.name}</td>
                    <td className="text-center">{item.quantity}</td>
                    <td className="text-end">₹{item.product.price}</td>
                    <td className="text-end">₹{item.product.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3">
          <Link to={`/${order.user.role}-dashboard`} className="btn btn-success px-4">
            Go to Dashboard
          </Link>
          <Link to="/marketplace" className="btn btn-outline-success px-4">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
