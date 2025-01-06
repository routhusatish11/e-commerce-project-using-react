import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../Redux/components/reducer"; 
import { useNavigate } from "react-router-dom"; 
import "./cart.css";

function Cart() {
    const cartItems = useSelector((state) => state.cart.cartvalues);
    const totalPrice = useSelector((state) => state.cart.totalprice);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
   
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false); 
        }, 1000); 
    }, []);

    
    const handleGoToProducts = () => {
        navigate("/products"); 
    };

    return (
        <div className="cart-container">
          
            {isLoading ? (
                <div className="loader-container">
                    <div className="loader"></div>
                    <p className="loading-text">Loading...</p>
                </div>
            ) : (
                <>
                   
                    {cartItems.length === 0 ? (
                        <div className="empty-cart-container">
                            <h1>Your Cart is Empty</h1>
                            <div className="empty-cart-content">
                                <img
                                    src="https://th.bing.com/th/id/OIP.WVtl1uxrIIG7qX0xgZNo2gHaHa?rs=1&pid=ImgDetMain" 
                                    alt="Empty Cart"
                                    className="empty-cart-image"
                                />
                                <button
                                    className="go-to-products-btn"
                                    onClick={handleGoToProducts}
                                >
                                    Go to Products
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="cart-items">
                            
                            {cartItems.map((item, index) => (
                                <div className="cart-item" key={index}>
                                    <div className="cart-item-image">
                                        <img
                                            src={item.productImage}
                                            alt={item.productName}
                                            className="product-image"
                                            onError={(e) => (e.target.src = 'fallback-image.jpg')} 
                                        />
                                    </div>
                                    <div className="cart-item-info">
                                        <h3>{item.productName}</h3>
                                        <p>Price: ${item.productPrice}</p>
                                        <button
                                            className="remove-from-cart-btn"
                                            onClick={() =>
                                                dispatch(
                                                    remove({
                                                        productName: item.productName,
                                                        productPrice: item.productPrice,
                                                    })
                                                )
                                            }
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

              
                    {cartItems.length > 0 && (
                        <div className="total-price-section">
                            <h3>Total Price: ${totalPrice}</h3>
                        </div>
                    )}
                </>
            )}

          
            
        </div>
    );
}

export default Cart;

