// import User from "./User";
import { useState, useEffect } from "react";
import * as ContactsAPI from "../utils/ContactsAPI";
function Users() {
  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
  };

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    };

    getContacts();
  }, []);

  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
    console.log(query);
    setQuery(query.trim());
  };

  const showingContacts =
    query === ""
      ? contacts
      : contacts.filter((contact) =>
          contact.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="list-contacts">
      <div className="list-contacts-top">
        <input
          className="search-contacts"
          type="text"
          placeholder="Search Contacts"
          value={query}
          onChange={(event) => {
            updateQuery(event.target.value);
          }}
        />
      </div>
      {query !== "" ? (
        <div className="showing-contacts">
          <span>
            Now Showing {showingContacts.length} of {contacts.length}
          </span>
          <button
            onClick={() => {
              setQuery("");
            }}
          >
            Show all
          </button>
        </div>
      ) : null}
      <ol className="contact-list">
        {showingContacts.map((user) => (
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
    </div>
  );
}

export default Users;
