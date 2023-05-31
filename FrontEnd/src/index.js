//  Final Project: Quiz Application with Microservices
//  Date: 30-May-2023
//  Authors:
//           A01745597 Fernando Emilio Nava Cano
//           A01745696 Yahir Cortes Rodriguez
//           A01025261 Maximiliano Carrasco Rojas
//           A01742023 Alberto Jashua Rodriguez Villegas
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
      <App />
    </Router>
);
