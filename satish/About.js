import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="brand-title">Satish Collections</h1>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img
            src="https://i.ibb.co/R0Sfv4x/1666408419279.jpg"  
            alt="About Us"
            className="about-image-img"
          />
        </div>

        <div className="about-text">
          <h1 className="about-heading">About Us</h1>
          <p className="about-description">
            Welcome to Satish Collections, your one-stop shop for all your
            favorite products! We offer a wide range of high-quality products
            across various categories like men's, women's, and kids' fashion. Our
            mission is to provide the best shopping experience with fast
            delivery and excellent customer service.
          </p>
          <p className="about-description">
            We believe in quality and strive to offer products that meet your
            needs and expectations. Our carefully curated selection is updated
            regularly, so you'll always find something new and exciting to add
            to your collection.
          </p>
          <p className="about-description">
            Our team works hard to ensure that we bring the latest fashion trends
            to you. We are dedicated to providing the best prices for our
            customers without compromising on quality.
          </p>
          <p className="about-description">
            We believe in customer satisfaction, and our goal is to make your
            shopping experience as easy and enjoyable as possible. If you have
            any questions or need assistance, our support team is always ready
            to help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;


