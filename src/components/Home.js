import React from "react";
import "../styles/Home.css";
import Select from "react-select";
import Navbar from "./Navbar";

const Home = () => {
  const options = [
    { label: 1, value: "one" },
    { label: 2, value: "two" },
    { label: 3, value: "three" },
    { label: 4, value: "four" },
    { label: 5, value: "five" },
    { label: 6, value: "six" },
    { label: 7, value: "seven" },
    { label: 8, value: "eight" },
    { label: 9, value: "nine" },
    { label: 10, value: "ten" },
  ];
  return (
    <div className="Home">
      <Navbar />
      <div className="Menu">
        <h1>Doctor the Stinky</h1>
        <form>
          <Select
            options={options}
            className="Select10"
            required
            placeholder="How many questions will you be answering today?"
          />
          <button type="submit">Start</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
