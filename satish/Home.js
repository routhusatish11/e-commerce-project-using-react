import React from "react";

import "./Home.css"; 
import Footer from "./Footer";
import Products from "./product";
import About from "./About";
import Contact from "./contact";

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="hero-section">
                    <div className="hero-content">
                        <h1>Welcome to Satish Collections</h1>
                        <p>
                            Discover the ultimate shopping experience. From trendy apparel to timeless classics, 
                            find everything you need to redefine your style. Exclusive collections at unbeatable prices.
                        </p>
                        <p>
                            <strong>Shop Now and Elevate Your Wardrobe!</strong>
                        </p>
                    </div>
                </div>
            </div>
            <Products/>
            <h1>About</h1>
            <About/>
            <Contact/>
            <Footer/>
            
        </>
    );
}

export default Home;
