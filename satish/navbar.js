
import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"; 
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

const Header = () => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    const cartCount = useSelector((state) => state.cart.cartvalues.length);
    const totalprice = useSelector((state) => state.cart.totalprice || 0);

    return (
        <header className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-brand">
                    Satish Collections
                </a>
                <nav className="navbar-links">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/products" 
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                    >
                        Products
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                    >
                        Contact
                    </NavLink>
                    {isAuthenticated && (
                        <div className="user-info">
                            <span>Welcome, {user?.username || user?.name || user?.nickname || "User"}</span>
                        </div>
                    )}
                    <div className="auth-buttons">
                        {isAuthenticated ? (
                            <button
                                className="auth-button"
                                onClick={() => logout({ returnTo: window.location.origin })}
                            >
                                Log Out
                            </button>
                        ) : (
                            <button
                                className="auth-button"
                                onClick={() => loginWithRedirect()}
                            >
                                Log In
                            </button>
                        )}
                    </div>
                    <div className="cart-info">
                        <NavLink to="/cartitems">
                            <button className="cart-button">
                                Cart ({cartCount})
                            </button>
                        </NavLink>
                        <button>Total price: {totalprice}</button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;


