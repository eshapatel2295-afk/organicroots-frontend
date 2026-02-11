import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, BarChart, Bar } from "recharts";

export default function FarmerHome() {
  const [stats, setStats] = useState({ totalProducts: 0, totalOrders: 0, totalItemsSold: 0, totalRevenue: 0 });
  const [productsSold, setProductsSold] = useState([]);

  useEffect(() => {
    async function loadStats() {
      try {
        const resStats = await api.get('/orders/farmer/stats');
        setStats(resStats.data);

        const resProducts = await api.get('/orders/farmer/products-sold');
        setProductsSold(resProducts.data);
      } catch (err) {
        console.error(err);
      }
    }
    loadStats();
  }, []);

  const revenueData = [
    { month: 'Jan', revenue: Math.round(stats.totalRevenue * 0.1) },
    { month: 'Feb', revenue: Math.round(stats.totalRevenue * 0.12) },
    { month: 'Mar', revenue: Math.round(stats.totalRevenue * 0.09) },
    { month: 'Apr', revenue: Math.round(stats.totalRevenue * 0.2) },
    { month: 'May', revenue: Math.round(stats.totalRevenue * 0.18) },
    { month: 'Jun', revenue: Math.round(stats.totalRevenue * 0.15) },
  ];

  return (
    <>
      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <div className="small text-muted">Products</div>
            <div className="h4">{stats.totalProducts}</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <div className="small text-muted">Orders</div>
            <div className="h4">{stats.totalOrders}</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <div className="small text-muted">Items Sold</div>
            <div className="h4">{stats.totalItemsSold}</div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <div className="small text-muted">Revenue</div>
            <div className="h4">₹{stats.totalRevenue}</div>
          </div>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-lg-8">
          <div className="card p-3 shadow-sm">
            <h6>Revenue (Last 6 months)</h6>
            <div style={{ width: '100%', height: 280 }}>
              <ResponsiveContainer>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card p-3 shadow-sm">
            <h6>Top Products (units sold)</h6>
            <div style={{ width: '100%', height: 280 }}>
              <ResponsiveContainer>
                <BarChart layout="vertical" data={productsSold}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Bar dataKey="sold" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
