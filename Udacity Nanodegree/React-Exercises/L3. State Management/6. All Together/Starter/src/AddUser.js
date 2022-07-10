import { useState } from "react";
import DisplayGames from "./Games";
const userNames = [];
const users = [];
function AddUser() {
  const inputIsEmpty = () => {
    if (userName !== "" && firstName !== "" && lastName !== "") return false;
    else return true;
  };
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [respondMessage, setRespondMessage] = useState("");
  const addUser = (event) => {
    event.preventDefault();
    // console.log(userName);
    if (userNames.includes(userName)) {
      setRespondMessage("Error! username already exists");
      console.log("not added");
    } else {
      setRespondMessage("User added successfully!");
      userNames.push(userName);
      users.push({
        firstName: firstName,
        secondName: lastName,
        userName: userName,
        games: 0,
      });
      setFirstName("");
      setLastName("");
      setUserName("");
      console.log("added");
      console.log(userNames);
      console.log(users);
    }
  };
  const handleChangeUserName = (event) => {
    setUserName(event.target.value.trim());
  };
  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value.trim());
  };
  const handleChangeSecondName = (event) => {
    setLastName(event.target.value.trim());
  };

  return (
    <div>
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          onChange={handleChangeFirstName}
        />
        <input
          type="text"
          placeholder="Enter Second Name"
          value={lastName}
          onChange={handleChangeSecondName}
        />
        <input
          type="text"
          placeholder="Enter User Name"
          value={userName}
          onChange={handleChangeUserName}
        />
        <button disabled={inputIsEmpty()}>Add</button>
      </form>
      {respondMessage && <p>{respondMessage}</p>}
      <DisplayGames users={users} />
    </div>
  );
}

export default AddUser;
