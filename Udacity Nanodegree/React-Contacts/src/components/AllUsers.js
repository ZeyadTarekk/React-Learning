// import User from "./User";
import { useState, useEffect } from "react";
import * as ContactsAPI from "../utils/ContactsAPI";
import CreateContact from "./CreateContact";
import ListContacts from "./ListContacts";
import { Route, Routes } from "react-router-dom";
function Users() {
  const [contacts, setContacts] = useState([]);
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
    <Routes>
      <Route
        exact
        path="/"
        element={
          <ListContacts contacts={contacts} onDeleteContact={removeContact} />
        }
      />
      <Route path="/create" element={<CreateContact />} />
    </Routes>
  );
}

export default Users;
