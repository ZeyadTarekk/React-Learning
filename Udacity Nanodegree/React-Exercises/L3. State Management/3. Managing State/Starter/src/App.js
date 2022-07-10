import corgi from "./corgi.jpg";
import "./App.css";
import { useState } from "react";
const App = () => {
  const increaseLikes = () => {
    setLikes(likes + 1);
  };
  const [likes, setLikes] = useState(0);
  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <button onClick={increaseLikes}>Like</button>
      <img src={corgi} alt="Corgi"></img>
      <p>Amount of likes: {likes} </p>
    </div>
  );
};

export default App;
