import React, { useState } from "react";
import axios from "axios";

const ContactUsPage = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/api/contact", form);

            setStatus("Message sent successfully!");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            setStatus("Something went wrong!");
        }
    };

    return (

        <div className="container py-5">
            {/* Page Header */}
            <div className="text-center mb-5">
                <h1 className="fw-bold">Get in Touch</h1>
                <p className="lead text-muted">We'd love to hear from you! Send us a message, and we'll get back to you shortly.</p>
            </div>

            <div className="row g-5">
                {/* Contact Form */}
                <div className="col-lg-7">
                    <div className="card shadow-sm border-0">
                        <div className="card-body p-4">
                            <h3 className="fw-semibold mb-4">Send a Message</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="name" value={form.name} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="email" value={form.email} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <input type="text" className="form-control" id="subject" value={form.subject} onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows="5" value={form.message} onChange={handleChange} required></textarea>
                                </div>

                                <button type="submit" className="btn btn-success fw-semibold px-4 py-2">
                                    Submit
                                </button>

                                {status && (
                                    <div className="alert alert-info mt-3">{status}</div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="col-lg-5">
                    <div className="bg-light p-4 rounded h-100">
                        <h3 className="fw-semibold mb-4">Contact Information</h3>
                        <p className="text-muted">
                            Feel free to reach out through our details below or visit us at our farm.
                        </p>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-start mb-3">
                                <i className="bi bi-geo-alt-fill fs-4 text-success me-3"></i>
                                <div>
                                    <h5 className="fw-semibold mb-0">Address</h5>
                                    <p className="text-muted mb-0">Idar, Sabarkantha, Gujarat </p>
                                </div>
                            </li>
                            <li className="d-flex align-items-start mb-3">
                                <i className="bi bi-telephone-fill fs-4 text-success me-3"></i>
                                <div>
                                    <h5 className="fw-semibold mb-0">Phone</h5>
                                    <p className="text-muted mb-0">91+ 6351424641</p>
                                </div>
                            </li>
                            <li className="d-flex align-items-start mb-4">
                                <i className="bi bi-envelope-fill fs-4 text-success me-3"></i>
                                <div>
                                    <h5 className="fw-semibold mb-0">Email</h5>
                                    <p className="text-muted mb-0">abc@gmail.com</p>
                                </div>
                            </li>
                        </ul>
                        <hr />
                        <h5 className="fw-semibold mb-3">Follow Us</h5>
                        <div>
                            <a href="#" className="text-success fs-4 me-3"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-success fs-4 me-3"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="text-success fs-4 me-3"><i className="bi bi-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;
