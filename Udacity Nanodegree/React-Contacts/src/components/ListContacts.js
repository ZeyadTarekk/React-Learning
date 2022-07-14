import { useState, useEffect } from "react";

function ListContacts(props) {
  const [query, setQuery] = useState("");

  const updateQuery = (query) => {
    console.log(query);
    setQuery(query.trim());
  };

  const showingContacts =
    query === ""
      ? props.contacts
      : props.contacts.filter((contact) =>
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
            Now Showing {showingContacts.length} of {props.contacts.length}
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
              onClick={() => props.onDeleteContact(user)}
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ListContacts;
