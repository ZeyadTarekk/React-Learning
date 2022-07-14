// import User from "./User";
import { useState, useEffect } from "react";
import * as ContactsAPI from "../utils/ContactsAPI";
import CreateContact from "./CreateContact";
import ListContacts from "./ListContacts";
function Users() {
  const [contacts, setContacts] = useState([]);
  const [screen, setScreen] = useState("home");
  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    };

    getContacts();
  }, []);

  const removeContact = (contact) => {
    ContactsAPI.remove(contact);
    setContacts(contacts.filter((c) => c.id !== contact.id));
  };

  return (
    <div>
      {screen === "home" ? (
        <ListContacts
          contacts={contacts}
          onDeleteContact={removeContact}
          onNavigate={() => {
            setScreen("create");
          }}
        />
      ) : (
        <CreateContact />
      )}
    </div>
  );
}

export default Users;
