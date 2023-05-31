//  Final Project: Quiz Application with Microservices
//  Date: 30-May-2023
//  Authors:
//           A01745597 Fernando Emilio Nava Cano
//           A01745696 Yahir Cortes Rodriguez
//           A01025261 Maximiliano Carrasco Rojas
//           A01742023 Alberto Jashua Rodriguez Villegas

import React, { useEffect, useState, useRef } from "react";
import "../styles/QuizPage.css";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const QuizPage = ({ numQuestions, email }) => {
  const navegar = useNavigate();
  const [arrQuestions, setArrQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [scoreName, setScoreName] = useState("");
  const [score, setScore] = useState(0);

  let Q = arrQuestions[currentQ]?.pregunta || "Loading...";
  let A = arrQuestions[currentQ]?.options.optionA || "Loading...";
  let B = arrQuestions[currentQ]?.options.optionB || "Loading...";
  let C = arrQuestions[currentQ]?.options.optionC || "Loading...";
  let D = arrQuestions[currentQ]?.options.optionD || "Loading...";

  const postData = () => {
    console.log(scoreName);
     axios.get(
       `http://34.234.7.159:8080/postScore?email=${email}&score=${score}&score_name=${scoreName}`
     );
  };

  const HandleAnswerClick = (answer) => {
    if (answer === arrQuestions[currentQ]?.correct) {
      window.alert("Correct answer!");
      setScore(score + 1);
      console.error("score", score);
    }
    else{
      window.alert("Sadly, its wrong. The correct answer was: ", arrQuestions[currentQ]?.correct)
    }
    // console.log("answer ", answer);
    // console.log("correct", arrQuestions[currentQ]?.correct);
    setCurrentQ(currentQ + 1);
  };

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (!firstUpdate.current) {
      postData();
      navegar(`/leaderboard`);
    }
  }, [scoreName]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    // console.log("componentDidUpdateFunction");
    // console.log(firstUpdate);
    // console.log("scoreName", scoreName);
  }, []);

  useEffect(() => {
    // console.log("cambio");
    if (currentQ >= numQuestions) {
      var resp = window.prompt(`Finished! ${score}/${numQuestions}
                      Please enter your highscore name (3 letters):`);
      // console.log(resp);
      setScoreName(resp);
    }
    Q = arrQuestions[currentQ]?.pregunta || "Loading...";
    A = arrQuestions[currentQ]?.options.optionA || "Loading...";
    B = arrQuestions[currentQ]?.options.optionB || "Loading...";
    C = arrQuestions[currentQ]?.options.optionC || "Loading...";
    D = arrQuestions[currentQ]?.options.optionD || "Loading...";
  }, [currentQ]);

  const fetchData = () => {
    axios
      .get("http://34.234.7.159:8080/questions")
      .then((response) => {
        // Handle the response data
        const arrNuevo = response.data.Resultado.map((pregunta) => {
          const NewPregunta = {
            id: pregunta.id,
            pregunta: pregunta.question,
            options: {
              optionA: pregunta.a,
              optionB: pregunta.b,
              optionC: pregunta.c,
              optionD: pregunta.d,
            },
            correct: pregunta.correct,
          };
          return NewPregunta;
        });
        let shuffleQ = arrNuevo.sort(function () {
          return Math.random() - 0.5;
        });
        setArrQuestions(shuffleQ);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  useEffect(() => {
    // console.log(numQuestions);
    // console.log(email);
    // console.log("sacando datos");
    fetchData();
  }, []);

  return (
    <div className="QuizPage">
      <Navbar />

      <div className="Question">
        <h1>Question {currentQ + 1}</h1>
        <h2>{Q}</h2>
        <div className="QuestionC">
          <div onClick={() => HandleAnswerClick("a")} className="OptionA">
            {A}
          </div>
          <div onClick={() => HandleAnswerClick("b")} className="OptionB">
            {B}
          </div>
          <div onClick={() => HandleAnswerClick("c")} className="OptionC">
            {C}
          </div>
          <div onClick={() => HandleAnswerClick("d")} className="OptionD">
            {D}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
