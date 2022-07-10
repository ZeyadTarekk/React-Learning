function User(props) {
  return (
    <div>
      <img
        className="contact-avatar"
        src={props.user.avatarURL}
        alt={props.user.id}
      />
      <div className="contact-details">
        <h2>{props.user.name}</h2>
        <p>{props.user.handle}</p>
      </div>
    </div>
  );
}
export default User;
