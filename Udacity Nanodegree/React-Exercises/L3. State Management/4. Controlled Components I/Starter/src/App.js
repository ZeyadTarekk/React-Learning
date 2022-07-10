import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
const App = () => {
  const [enteredText, setEnteredText] = useState("");

  const changeStateFunc = (e) => {
    setEnteredText(e);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <input
          type="text"
          placeholder="Say Something"
          value={enteredText}
          onChange={(e) => {
            changeStateFunc(e.target.value);
          }}
        />
        <p className="echo">Echo:</p>
        {enteredText !== "" ? enteredText : null}
        {/* <p>This should mirror the text you typed into the input field.</p> */}
      </div>
    </div>
  );
};

export default App;
