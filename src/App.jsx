import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";



function App() {
  const [theme,setTheme]=useState(true)

  const changeTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={`size ${theme ? 'light' : 'dark'}`}>
      <h2>Test Your Skills !</h2>
      <button onClick={changeTheme} className={`toggle-button ${theme ? 'light-white' : 'light-dark'}`}>
        {theme ? 'Light' : 'Dark'}
      </button>
      <div className="questionBox">
        <QuestionBox />
      </div>
    </div>
  );
}

export default App;