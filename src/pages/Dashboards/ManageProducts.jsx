import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { Pencil, Trash2 } from "lucide-react";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await api.delete(`/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card p-4 shadow-sm">
      <h5>Manage Products</h5>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>
                <img
                  src={p.image ? `http://localhost:5000/uploads/${p.image}` : "https://via.placeholder.com/60"}
                  alt={p.name}
                  width="60"
                  height="60"
                  style={{ objectFit: "cover", borderRadius: "6px" }}
                />
              </td>
              <td>{p.name}</td>
              <td>₹{p.price}</td>
              <td>{p.stock}</td>
              <td>{p.category}</td>
              <td className="d-flex gap-2">
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => navigate(`edit/${p._id}`)}
                >
                  <Pencil size={16} />
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDelete(p._id)}
                >
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
