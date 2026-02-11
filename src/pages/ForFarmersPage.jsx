// frontend/src/pages/Farmers.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/main.css"; // your global styles
import farmerBucket from "../assets/images/farmerbucket.png";
import { BarChart, IndianRupee, Database, UserPlus, List, Truck, } from "lucide-react";
const Farmers = () => {

    const navigate = useNavigate();

    return (
        <div id="farmers-content" >
            {/* For Farmers Section */}
            <section className="py-5 text-center bg-white">
                <div className="container">
                    <h2 className="display-5 fw-bold">Join Our Community of Growers</h2>
                    <p className="lead text-muted mt-3 mb-5 mx-auto" style={{ maxWidth: "700px" }}>
                        Sell your produce directly to customers, share your organic farming story, and grow your business with Organic Roots.
                    </p>
                    <img
                        src={farmerBucket} // use local import
                        className="img-fluid rounded-3 shadow mb-5"
                        alt="Farmer holding a crate of fresh vegetables"
                        style={{ height: "400px", objectFit: "cover", width: "100%" }} // optional fixed height
                    />


                    <div className="row text-start g-4 mb-5">
                        <div className="col-md-4">
                            <div className="d-flex">
                                <BarChart
                                    className="text-success me-3 flex-shrink-0"
                                    size={32}
                                />                                <div>
                                    <h5 className="fw-semibold">Wider Reach</h5>
                                    <p className="text-muted small">
                                        Connect with a larger customer base actively seeking organic products in your area.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="d-flex">
                                <IndianRupee
                                    className="text-success me-3 flex-shrink-0"
                                    size={32}
                                />                                <div>
                                    <h5 className="fw-semibold">Fair Pricing</h5>
                                    <p className="text-muted small">
                                        Set your own prices and get a better return for your hard work by selling directly to consumers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="d-flex">
                                <Database
                                    className="text-success me-3 flex-shrink-0"
                                    size={32}
                                />                                <div>
                                    <h5 className="fw-semibold">Easy Management</h5>
                                    <p className="text-muted small">
                                        A simple dashboard to manage your products, inventory, and orders effortlessly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <h2 className="text-center fw-bold mb-5">How It Works for Farmers</h2>
                    <div className="row g-4 align-items-center">
                        <div className="col-md-4 text-center">
                            <div className="p-4">
                                <UserPlus className="text-success mb-3" size={64} />
                                <h3 className="fs-4 fw-semibold mb-2">1. Register & Verify</h3>
                                <p className="text-muted">
                                    Create your farmer profile. Our team will review your organic certification and farm details.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 text-center">
                            <div className="p-4">
                                <List className="text-success mb-3" size={64} />                                <h3 className="fs-4 fw-semibold mb-2">2. List Your Produce</h3>
                                <p className="text-muted">
                                    Use your dashboard to add products, set prices, upload photos, and manage your inventory.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 text-center">
                            <div className="p-4">
                                <Truck className="text-success mb-3" size={64} />                                <h3 className="fs-4 fw-semibold mb-2">3. Fulfill Orders</h3>
                                <p className="text-muted">
                                    Receive notifications for new orders. Pack your fresh produce and prepare it for delivery.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <h3 className="fw-bold mb-3">Your Farmer Dashboard</h3>
                            <p className="text-muted">
                                We provide you with simple but powerful tools to manage your online store. Track your sales, manage product listings, view customer orders, and update your inventory, all from one place. Our goal is to make the technology work for you, so you can focus on what you do best: growing amazing organic food.
                            </p>
                            <button className="btn btn-success rounded-pill px-4 mt-3" id="access-dashboard-btn" onClick={() => navigate("/login", { state: { sellerMode: true } })}>
                                Access Your Dashboard
                            </button>
                        </div>

                        <div className="col-lg-6">
                            <div className="card shadow-lg">
                                <div className="card-body p-2">
                                    <img
                                        src="https://i.imgur.com/gKZXy1h.png"
                                        className="img-fluid rounded"
                                        alt="A mock-up of the farmer dashboard showing sales charts and product lists."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Farmers;
