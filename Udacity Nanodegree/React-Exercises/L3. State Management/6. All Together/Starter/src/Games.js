import { useState } from "react";
function DisplayGames(props) {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <ol>
        {props.users.map((user) => {
          return (
            <li key={user.userName}>
              UserName: {user.userName} First Name:  {user.firstName}{" "}
              Second Name: {user.secondName} Games Played: {" "}
              {display ? user.games : "*"}
            </li>
          );
        })}
      </ol>
      {props.users.length !== 0 && (
        <button onClick={() => setDisplay(!display)}>
          {display ? "Hide Number Of Games" : "Show Number Of Games"}
        </button>
      )}
    </div>
  );
}

export default DisplayGames;
