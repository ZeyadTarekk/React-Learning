import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const users = [{ username: "Zeyad" }, { username: "Ahmed" }];

const messages = [
  { username: "Amy", text: "Hi, Jon!" },
  { username: "Amy", text: "How are you?" },
  { username: "John", text: "Hi, Amy! Good, you?" },
];

const App = () => {
  // If the user did not type anything, he/she should not be allowed to submit.

  const [firstUserMessage, setFirstUserMessage] = useState("");
  const [secondUserMessage, setSecondUserMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const isDisabled = () => {
    return false;
  };
  const handleClick = (userName) => {
    setChatMessages([
      ...chatMessages,
      {
        username: userName,
        text:
          userName === users[0].username ? firstUserMessage : secondUserMessage,
      },
    ]);
    userName === users[0].username
      ? setFirstUserMessage("")
      : setSecondUserMessage("");
    console.log(chatMessages);
  };

  const handleChange = (event, user) => {
    if (user === users[0].username) {
      setFirstUserMessage(event.target.value);
    } else {
      setSecondUserMessage(event.target.value);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div className="name sender">{users[0].username}</div>

          <ul className="message-list">
            {chatMessages.map((message, index) => (
              <li
                key={index}
                className={
                  message.username === users[0].username
                    ? "message sender"
                    : "message recipient"
                }
              >
                <p>{`${message.username}: ${message.text}`}</p>
              </li>
            ))}
          </ul>

          <div>
            <form className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your message..."
                value={firstUserMessage}
                onChange={(e) => {
                  handleChange(e, users[0].username);
                }}
              />
              <div className="input-group-append">
                <button
                  className="btn submit-button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(users[0].username);
                  }}
                  disabled={isDisabled()}
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div className="name sender">{users[1].username}</div>
          <ul className="message-list">
            {chatMessages.map((message, index) => (
              <li
                key={index}
                className={
                  message.username === users[1].username
                    ? "message sender"
                    : "message recipient"
                }
              >
                <p>{`${message.username}: ${message.text}`}</p>
              </li>
            ))}
          </ul>

          <div>
            <form className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your message..."
                value={secondUserMessage}
                onChange={(e) => {
                  handleChange(e, users[1].username);
                }}
              />
              <div className="input-group-append">
                <button
                  className="btn submit-button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(users[1].username);
                  }}
                  disabled={isDisabled()}
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
