function User(props) {
  return (
    <div>
      <h2>{props.user.name}</h2>
      <p>{props.user.handle}</p>
      <img src={props.user.avatarURL} alt={props.user.id} />
    </div>
  );
}
export default User;
