import React, { useEffect, useState } from "react";
import api from "../../api/axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await api.get('/orders/farmer');
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
   
      <div className="card p-4 shadow-sm">
        <h5>Orders</h5>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Buyer</th>
              <th>Items</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user.name}</td>
                <td>{order.items.map(i => i.product.name).join(', ')}</td>
                <td>₹{order.totalAmount}</td>
                <td>{order.status}</td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
  );
}
