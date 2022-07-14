// import User from "./User";
import { useState, useEffect } from "react";
import * as ContactsAPI from "../utils/ContactsAPI";
import CreateContact from "./CreateContact";
import ListContacts from "./ListContacts";
import { Route, Routes, useNavigate } from "react-router-dom";
function Users() {
  let navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    };

    getContacts();
  }, []);

  const addContact = (values) => {
    console.log("entered here");
    const create = async () => {
      const res = await ContactsAPI.create({
        id: values.handle,
        name: values.name,
        handle: "@" + values.handle,
        avatarURL: values.avatarURL,
      });
      setContacts(contacts.concat(res));
    };
    create();
    navigate("/");
  };

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
      <Route
        path="/create"
        element={<CreateContact onCreateContact={addContact} />}
      />
    </Routes>
  );
}

export default Users;
