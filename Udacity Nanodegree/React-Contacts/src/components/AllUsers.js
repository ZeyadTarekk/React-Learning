import User from "./User";
const contacts = [
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
];

function Users() {
  return (
    <ol className="contact-list">
      {contacts.map((user) => (
        <li className="contact-list-item " key={user.id}>
          {<User user={user} />}
        </li>
      ))}
    </ol>
  );
}

export default Users;
