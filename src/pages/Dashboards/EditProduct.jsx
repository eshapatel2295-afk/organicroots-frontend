import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axios";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Images
  const [image, setImage] = useState(null);     // new main image
  const [gallery, setGallery] = useState([]);   // new gallery images

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
    image: "",
    gallery: [],
  });

  // 🔹 Cloudinary Upload
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

  // 🔹 Fetch Product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        setForm(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, [id]);

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

  // 🔹 Handle Array Fields
  const handleArrayChange = (e, index, key) => {
    const updated = [...form[key]];
    updated[index] = e.target.value;
    setForm((prev) => ({ ...prev, [key]: updated }));
  };

  const addArrayField = (key) => {
    setForm((prev) => ({ ...prev, [key]: [...prev[key], ""] }));
  };

  // 🔹 Submit Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let mainImageUrl = form.image;
      let galleryUrls = form.gallery || [];

      // Upload new main image if changed
      if (image) {
        mainImageUrl = await uploadToCloudinary(image);
      }

      // Upload new gallery images if changed
      if (gallery.length > 0) {
        galleryUrls = [];
        for (let file of gallery) {
          const url = await uploadToCloudinary(file);
          galleryUrls.push(url);
        }
      }

      const payload = {
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
        image: mainImageUrl,
        gallery: galleryUrls,
      };

      await api.put(`/products/${id}`, payload);

      alert("✅ Product updated successfully!");
      navigate("/farmer/manage-products");
    } catch (err) {
      console.error(err);
      alert("❌ Error updating product");
    }
  };

  return (
    <div className="card p-4 shadow-sm">
      <h5>Edit Product</h5>

      <form onSubmit={handleSubmit} className="mt-3">
        {/* BASIC INFO */}
        <input
          className="form-control mb-2"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />

        <div className="row mb-2">
          <div className="col-md-4">
            <input
              className="form-control"
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
            />
          </div>

          <div className="col-md-4">
            <input
              className="form-control"
              name="stock"
              type="number"
              value={form.stock}
              onChange={handleChange}
              placeholder="Stock"
            />
          </div>

          <div className="col-md-4">
            <input
              className="form-control"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Category"
            />
          </div>
        </div>

        <textarea
          className="form-control mb-3"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
        />

        {/* IMAGE UPDATE */}
        <label>Main Image (optional)</label>
        <input
          type="file"
          className="form-control mb-3"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <label>Gallery Images (optional)</label>
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
          value={form.organicCertification}
          onChange={handleChange}
          placeholder="Organic Certification"
        />

        <input
          className="form-control mb-2"
          name="storage"
          value={form.storage}
          onChange={handleChange}
          placeholder="Storage Instructions"
        />

        <input
          className="form-control mb-3"
          name="sustainability"
          value={form.sustainability}
          onChange={handleChange}
          placeholder="Sustainability Info"
        />

        {/* NUTRITION */}
        <h6>Nutrition</h6>
        <input
          className="form-control mb-2"
          name="nutrition.calories"
          value={form.nutrition.calories}
          onChange={handleChange}
          placeholder="Calories"
        />
        <input
          className="form-control mb-2"
          name="nutrition.vitamins"
          value={form.nutrition.vitamins}
          onChange={handleChange}
          placeholder="Vitamins"
        />
        <input
          className="form-control mb-3"
          name="nutrition.minerals"
          value={form.nutrition.minerals}
          onChange={handleChange}
          placeholder="Minerals"
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
          <button className="btn btn-primary">Update Product</button>
        </div>
      </form>
    </div>
  );
}