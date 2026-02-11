import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

export default function AddProduct() {
  const navigate = useNavigate();

  // Images
  const [image, setImage] = useState(null);        // main image file
  const [gallery, setGallery] = useState([]);      // gallery image files

  // Form State
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    description: "",
    organicCertification: "",
    storage: "",
    sustainability: "",
    nutrition: {
      calories: "",
      vitamins: "",
      minerals: "",
    },
    highlights: [""],
    healthBenefits: [""],
  });

  // 🔹 Cloudinary Upload Function
  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "organicroots"); 
    data.append("folder", "imagestorage");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/diicgoymy/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();
    return result.secure_url;
  };

  // 🔹 Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("nutrition.")) {
      const key = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        nutrition: { ...prev.nutrition, [key]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  // 🔹 Handle Array Inputs
  const handleArrayChange = (e, index, key) => {
    const updated = [...form[key]];
    updated[index] = e.target.value;
    setForm((prev) => ({ ...prev, [key]: updated }));
  };

  const addArrayField = (key) => {
    setForm((prev) => ({ ...prev, [key]: [...prev[key], ""] }));
  };

  // 🔹 Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let mainImageUrl = "";
      let galleryUrls = [];

      // Upload main image
      if (image) {
        mainImageUrl = await uploadToCloudinary(image);
      }

      // Upload gallery images
      for (let file of gallery) {
        const url = await uploadToCloudinary(file);
        galleryUrls.push(url);
      }

      const payload = {
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
        image: mainImageUrl,
        gallery: galleryUrls,
      };

      await api.post("/products", payload);

      alert("✅ Product added successfully!");
      navigate("/farmer/manage-products");
    } catch (err) {
      console.error(err);
      alert("❌ Error adding product");
    }
  };

  return (
    <div className="card p-4 shadow-sm">
      <h5>Add New Product</h5>

      <form onSubmit={handleSubmit} className="mt-3">
        {/* BASIC INFO */}
        <input
          className="form-control mb-2"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <div className="row mb-2">
          <div className="col-md-4">
            <input
              className="form-control"
              name="price"
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-4">
            <input
              className="form-control"
              name="stock"
              type="number"
              placeholder="Stock"
              value={form.stock}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4">
            <input
              className="form-control"
              name="category"
              placeholder="Category"
              value={form.category}
              onChange={handleChange}
            />
          </div>
        </div>

        <textarea
          className="form-control mb-3"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        {/* MAIN IMAGE */}
        <label>Main Image</label>
        <input
          type="file"
          className="form-control mb-3"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        {/* GALLERY */}
        <label>Gallery Images</label>
        <input
          type="file"
          multiple
          className="form-control mb-3"
          accept="image/*"
          onChange={(e) => setGallery([...e.target.files])}
        />

        {/* EXTRA INFO */}
        <input
          className="form-control mb-2"
          name="organicCertification"
          placeholder="Organic Certification"
          value={form.organicCertification}
          onChange={handleChange}
        />

        <input
          className="form-control mb-2"
          name="storage"
          placeholder="Storage Instructions"
          value={form.storage}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="sustainability"
          placeholder="Sustainability Info"
          value={form.sustainability}
          onChange={handleChange}
        />

        {/* NUTRITION */}
        <h6>Nutrition</h6>
        <input
          className="form-control mb-2"
          name="nutrition.calories"
          placeholder="Calories"
          value={form.nutrition.calories}
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          name="nutrition.vitamins"
          placeholder="Vitamins"
          value={form.nutrition.vitamins}
          onChange={handleChange}
        />
        <input
          className="form-control mb-3"
          name="nutrition.minerals"
          placeholder="Minerals"
          value={form.nutrition.minerals}
          onChange={handleChange}
        />

        {/* HIGHLIGHTS */}
        <h6>Highlights</h6>
        {form.highlights.map((item, idx) => (
          <input
            key={idx}
            className="form-control mb-2"
            value={item}
            onChange={(e) => handleArrayChange(e, idx, "highlights")}
          />
        ))}
        <button
          type="button"
          className="btn btn-sm btn-outline-success mb-3"
          onClick={() => addArrayField("highlights")}
        >
          + Add Highlight
        </button>

        {/* HEALTH BENEFITS */}
        <h6>Health Benefits</h6>
        {form.healthBenefits.map((item, idx) => (
          <input
            key={idx}
            className="form-control mb-2"
            value={item}
            onChange={(e) => handleArrayChange(e, idx, "healthBenefits")}
          />
        ))}
        <button
          type="button"
          className="btn btn-sm btn-outline-success mb-3"
          onClick={() => addArrayField("healthBenefits")}
        >
          + Add Health Benefit
        </button>

        <div className="d-flex justify-content-end">
          <button className="btn btn-primary">Add Product</button>
        </div>
      </form>
    </div>
  );
}
