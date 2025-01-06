import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./item.css";



function Products() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const ShowProducts = () => {
        return (
            <div className="products-filter">
                <button className="filter-button">All</button>
                <button className="filter-button">Mens</button>
                <button className="filter-button">Womens</button>
                <button className="filter-button">Kids</button>
            </div>
        );
    };

    return (
        <>
            <h1 className="products-title">Products List</h1>
            <ShowProducts />
            <div className="products-grid">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    data.map((item) => (
                        <Link to={`/products/${item.id}`} key={item.id} className="product-card">
                            <div className="product-card-content">
                                <img src={item.image} alt={item.title} className="product-image" />
                                <h1 className="product-title">{item.title}</h1>
                                <p className="product-description">{item.description}</p>
                                <p className="product-price">Price: ${item.price}</p>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </>
    );
}

export default Products;
