import React from "react";
import { Link } from "react-router-dom";

import "../Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="logo">Pizzería Mamma Mia!</span>
      <div className="nav-links">
        <Link to="/" className="nav-btn">
          🍕 Home
        </Link>
        <Link to="/login" className="nav-btn">
          🔐 Login
        </Link>
        <Link to="/register" className="nav-btn">
          🔐 Register
        </Link>
      </div>
      <div className="cart-total">
        <span>🛒 Total: <span className="price">$25.000</span></span>
      </div>
    </nav>
  );
};

export default Navbar;