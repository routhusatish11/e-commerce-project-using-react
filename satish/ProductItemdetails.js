import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product1.css";
import Items from "./Items";
import { useDispatch, useSelector } from "react-redux"; 
import { addtocart } from "../Redux/components/reducer";

function Products1() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [data, setData] = useState(null);  
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null); 

    const totalprice = useSelector((state) => state.cart.totalprice); 

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);  
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch product data");
                }
                const result = await response.json();
                setData(result); 
            } catch (error) {
                setError(error.message);  
            } finally {
                setLoading(false);  
            }
        };

        fetchData();
    }, [id]);

    
    if (error) {
        return (
            <div className="error-message">
                <p>Error: {error}</p>
                <button onClick={() => window.location.reload()}>Try Again</button>
            </div>
        );
    }

    
    if (loading) {
        return (
            <div className="loading-container flex justify-center items-center min-h-screen bg-gray-100">
                <div className="loader border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
            </div>
        );
    }


    return (
        <div className="product-container">
            <div className="product-layout">
                <div className="product-image-section">
                    <img
                        src={data.image}
                        alt={data.title}
                        className="product-image"
                    />
                </div>

                <div className="product-info-section">
                    <h1 className="product-title">{data.title}</h1>
                    <p className="product-description">{data.description}</p>
                    <p className="product-price">Price: ${data.price}</p>
                    <button
                        className="add-to-cart-btn"
                        onClick={() =>
                            dispatch(
                                addtocart({
                                    productName: data.title,
                                    productPrice: data.price,
                                    productImage: data.image,  
                                    productId: data.id,
                                })
                            )
                        }
                    >
                        Add to cart
                    </button>
                </div>
            </div>

            <Items />

           
        </div>
    );
}

export default Products1;
