//  Final Project: Quiz Application with Microservices
//  Date: 30-May-2023
//  Authors:
//           A01745597 Fernando Emilio Nava Cano
//           A01745696 Yahir Cortes Rodriguez
//           A01025261 Maximiliano Carrasco Rojas
//           A01742023 Alberto Jashua Rodriguez Villegas
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import QuizPage from "./components/QuizPage";
import Leaderboard from "./components/Leaderboard";
import { useState } from "react";

function App() {
  const [numQuestions, setNumQuestions] = useState(localStorage.getItem("numQuestions"));
  const [email, setEmail] = useState(localStorage.getItem("email"));

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home setNumQuestions ={setNumQuestions} setEmail={setEmail}/>} />
        <Route path="/quizpage" element={<QuizPage numQuestions={numQuestions} email={email}/>} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
      <div className="AppB"/>
      <div className="AppB"/>
    </div>
  );
}

export default App;
