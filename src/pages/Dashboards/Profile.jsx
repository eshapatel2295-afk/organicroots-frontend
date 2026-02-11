import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user, setUser } = useAuth();
  const [form, setForm] = useState({ name: '', email: '' });

  useEffect(() => {
    if(user) setForm({ name: user.name, email: user.email });
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(`/users/${user._id}`, form);
      setUser(res.data);
      alert('Profile updated successfully');
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || 'Error updating profile');
    }
  };

  return (
    
      <div className="card p-4 shadow-sm" style={{ maxWidth: 600 }}>
        <h5>Profile</h5>
        <form onSubmit={handleSubmit} className="mt-3">
          <div className="mb-2">
            <input className="form-control" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="mb-2">
            <input className="form-control" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary">Update Profile</button>
          </div>
        </form>
      </div>
    
  );
}
