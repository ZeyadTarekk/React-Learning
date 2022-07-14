import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
let value1 = Math.floor(Math.random() * 100);
let value2 = Math.floor(Math.random() * 100);
let value3 = Math.floor(Math.random() * 100);
let proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

const generateNewQuestion = () => {
  value1 = Math.floor(Math.random() * 100);
  value2 = Math.floor(Math.random() * 100);
  value3 = Math.floor(Math.random() * 100);
  proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
};

const App = () => {
  const [numQuestions, setNumQuestions] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);

  const handleTrueButton = () => {
    setNumQuestions(numQuestions + 1);
    if (value1 + value2 + value3 === proposedAnswer)
      setNumCorrect(numCorrect + 1);

    generateNewQuestion();
  };
  const handleFalseButton = () => {
    setNumQuestions(numQuestions + 1);
    if (value1 + value2 + value3 !== proposedAnswer)
      setNumCorrect(numCorrect + 1);
    generateNewQuestion();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button onClick={handleTrueButton}>True</button>
        <button onClick={handleFalseButton}>False</button>
        <p className="text">
          Your Score: {numCorrect}/{numQuestions}
        </p>
      </div>
    </div>
  );
};

export default App;
