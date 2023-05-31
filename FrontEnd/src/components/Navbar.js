//  Final Project: Quiz Application with Microservices
//  Date: 30-May-2023
//  Authors:
//           A01745597 Fernando Emilio Nava Cano
//           A01745696 Yahir Cortes Rodriguez
//           A01025261 Maximiliano Carrasco Rojas
//           A01742023 Alberto Jashua Rodriguez Villegas
import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/leaderboard">Leaderboard</Link>
    </nav>
  );
};

export default Navbar;
