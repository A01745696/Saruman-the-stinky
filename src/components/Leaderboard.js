import React from "react";
import Navbar from "./Navbar";
import "../styles/Leaderboard.css";

const Leaderboard = () => {
  return (
    <div className="LeaderBoard">
      <Navbar />
      <div className="container">
        <h1>HIGHSCORE</h1>
        <div className="Board">

        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
