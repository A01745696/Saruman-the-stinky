//  Final Project: Quiz Application with Microservices
//  Date: 30-May-2023
//  Authors:
//           A01745597 Fernando Emilio Nava Cano
//           A01745696 Yahir Cortes Rodriguez
//           A01025261 Maximiliano Carrasco Rojas
//           A01742023 Alberto Jashua Rodriguez Villegas
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import "../styles/Leaderboard.css";
import { useParams } from "react-router-dom";

const Leaderboard = () => {
  const [arrPlayers, setArrPlayers] = useState([]);

  const fetchData = () => {
    axios
      .get("http://34.234.7.159:8080/getHighScore")
      .then((response) => {
        // Handle the response data
        console.log(response);
        const arrNuevo = response.data.map((user) => {
          const Newuser = {
            Username: user.score_name,
            Score: user.score,
          };
          return Newuser;
        });
        setArrPlayers(arrNuevo);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  useEffect(() => {
    console.log("sacando datos");
    fetchData();
  }, []);

  return (
    <div className="LeaderBoard">
      <Navbar />
      <div className="container">
        <h1>HIGHSCORE</h1>
        <div className="Board">
          {arrPlayers.map((user) => {
            return (
              <div className="Player">
                <a>{user.Username}</a>
                <a>{user.Score}</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
