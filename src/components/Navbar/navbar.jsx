import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" id="NavTitle">
          Shopify
        </Link>
      </div>
      <div className="links">
        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
          Shop
        </Link>
        <Link to="/cart" id="cartlink" className={location.pathname === "/cart" ? "active-link" : ""}>
          <i class="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>
    </div>
  );
};
