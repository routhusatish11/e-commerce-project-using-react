import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>
                        Satish Collections offers a wide range of quality products designed to meet all your shopping needs. Shop with confidence and style!
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li>
                            <NavLink to="/" className="footer-link">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" className="footer-link">Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="footer-link">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="footer-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: support@satishcollections.com</p>
                    <p>Phone: 123456709</p>
                    <p>Address: Bhimivaram</p>
                </div>
                <div className="footer-section social-media">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <FaFacebookF className="icon" />
                        <FaTwitter className="icon" />
                        <FaInstagram className="icon" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Satish Collections. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
