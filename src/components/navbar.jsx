import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>

        <div className="test">
          <h1>revanth test</h1>
          <h1>likith git test2</h1>
          <h1>nikhil git test2</h1>
        </div>
      </div>
    </div>
  );
};
