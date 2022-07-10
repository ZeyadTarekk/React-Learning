import User from "./User";
const contacts = [
  {
    id: "karen",
    name: "Karen Isgrigg",
    handle: "karen_isgrigg",
    avatarURL: "http://localhost:5001/karen.jpg",
  },
  {
    id: "richard",
    name: "Richard Kalehoff",
    handle: "richardkalehoff",
    avatarURL: "http://localhost:5001/richard.jpg",
  },
  {
    id: "tyler",
    name: "Tyler McGinnis",
    handle: "tylermcginnis",
    avatarURL: "http://localhost:5001/tyler.jpg",
  },
];

function Users() {
  return (
    <ul>
      {contacts.map((user) => (
        <li key={user.id}>{<User user={user} />}</li>
      ))}
    </ul>
  );
}

export default Users;
