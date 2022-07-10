// import User from "./User";
import { useState } from "react";

function Users() {
  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
  };

  const [contacts, setContacts] = useState([
    {
      id: "tyler",
      name: "Tyler McGinnis",
      handle: "@tylermcginnis",
      avatarURL: "http://localhost:5001/tyler.jpg",
    },
    {
      id: "karen",
      name: "Karen Isgrigg",
      handle: "@karen_isgrigg",
      avatarURL: "http://localhost:5001/karen.jpg",
    },
    {
      id: "richard",
      name: "Richard Kalehoff",
      handle: "@richardkalehoff",
      avatarURL: "http://localhost:5001/richard.jpg",
    },
  ]);
  return (
    <ol className="contact-list">
      {contacts.map((user) => (
        <li className="contact-list-item " key={user.id}>
          <div
            className="contact-avatar"
            style={{
              backgroundImage: `url(${user.avatarURL})`,
            }}
          ></div>
          <div className="contact-details">
            <p>{user.name}</p>
            <p>{user.handle}</p>
          </div>
          <button
            className="contact-remove"
            onClick={() => removeContact(user)}
          >
            Remove
          </button>
        </li>
      ))}
    </ol>
  );
}

export default Users;
