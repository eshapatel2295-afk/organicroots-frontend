import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Organic Roots</h6>
            <p className="text-white-50">
              Connecting communities with nature's best, one organic vegetable at a time.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
            <p><Link onClick={()=>window.scrollTo(0,0)} to="/about" className="text-white-50 text-decoration-none">About Us</Link></p>
            <p><Link onClick={()=>window.scrollTo(0,0)} to="/contact" className="text-white-50 text-decoration-none">Contact</Link></p>
            <p><a href="#!" className="text-white-50 text-decoration-none">FAQ</a></p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Legal</h6>
            <p><a href="#!" className="text-white-50 text-decoration-none">Privacy Policy</a></p>
            <p><a href="#!" className="text-white-50 text-decoration-none">Terms of Service</a></p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Subscribe</h6>
            <p className="text-white-50">Get the latest updates and organic tips.</p>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Your email" aria-label="Your email" />
              <button className="btn btn-success" type="button">Go</button>
            </div>
          </div>
        </div>
        <div className="text-center text-white-50 pt-4 mt-4 border-top border-secondary">
          &copy; 2025 Organic Roots. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
