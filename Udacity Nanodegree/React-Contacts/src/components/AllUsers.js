// import User from "./User";
import { useState, useEffect } from "react";
import * as ContactsAPI from "../utils/ContactsAPI";
import ListContacts from "./ListContacts";
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
    <div>
      <ListContacts contacts={contacts} onDeleteContact={removeContact} />
    </div>
  );
}

export default Users;
