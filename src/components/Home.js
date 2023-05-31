import React, { useState, useRef } from "react";
import "../styles/Home.css";
import Select from "react-select";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Home = ({setNumQuestions, setEmail}) => {
  const navegar = useNavigate();
  const [questions, setQuestions] = useState(0);
  const email = useRef('');
  const options = [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: 5 },
    { label: 6, value: 6 },
    { label: 7, value: 7 },
    { label: 8, value: 8 },
    { label: 9, value: 9 },
    { label: 10, value: 10 },
  ];

  const navegando = (e) => {
    localStorage.setItem("numQuestions", questions);
    setNumQuestions(questions);
    localStorage.setItem("email", email.current.value);
    setEmail(email.current.value);
    navegar(`/quizpage`);
  };
  return (
    <div className="Home">
      <Navbar />
      <div className="Menu">
        <h1>Doctor the Stinky</h1>
        <form onSubmit={navegando}>
          <input type="text" ref={email} className="inputText" required placeholder="email@domain.com"/>
          <Select
            options={options}
            className="Select10"
            required
            maxMenuHeight={100}
            placeholder="How many questions will you be answering today?"
            onChange={(object) => setQuestions(object.value)}
          />
          <button className="Start" type="submit" >
            Start
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
