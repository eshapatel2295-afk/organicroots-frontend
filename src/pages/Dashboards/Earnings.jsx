import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function Earnings() {
  const [earnings, setEarnings] = useState([]);

  useEffect(() => {
    async function loadEarnings() {
      try {
        const res = await api.get('/orders/farmer/earnings');

        // Ensure it's always an array
        setEarnings(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error(err);
      }
    }
    loadEarnings();
  }, []);

  return (
    <div className="card p-4 shadow-sm">
      <h5>Earnings Overview</h5>
      <div style={{ width: '100%', height: 300, marginTop: 20 }}>
        <ResponsiveContainer>
          <LineChart data={earnings}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
