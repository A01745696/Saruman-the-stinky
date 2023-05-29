import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/leaderboard">Leaderboard</Link>
    </nav>
  );
};

export default Navbar;
