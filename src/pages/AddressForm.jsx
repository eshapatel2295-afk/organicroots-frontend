import React, { useState } from "react";

const AddressForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ name: "", phone: "", house: "", city: "", state: "", pincode: "" });

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={submit}>
      <input className="form-control mb-2" name="name" placeholder="Full name" value={form.name} onChange={change} required />
      <input className="form-control mb-2" name="phone" placeholder="Phone" value={form.phone} onChange={change} required />
      <input className="form-control mb-2" name="house" placeholder="House/Flat" value={form.house} onChange={change} required />
      <input className="form-control mb-2" name="city" placeholder="City" value={form.city} onChange={change} required />
      <input className="form-control mb-2" name="state" placeholder="State" value={form.state} onChange={change} required />
      <input className="form-control mb-2" name="pincode" placeholder="Pincode" value={form.pincode} onChange={change} required />
      <button className="btn btn-outline-success" type="submit">Save Address</button>
    </form>
  );
};

export default AddressForm;