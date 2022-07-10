import React from "react";
function User(props) {
  return (
    <React.Fragment>
      <div
        className="contact-avatar"
        style={{
          backgroundImage: `url(${props.user.avatarURL})`,
        }}
      ></div>
      <div className="contact-details">
        <p>{props.user.name}</p>
        <p>{props.user.handle}</p>
      </div>
      <button className="contact-remove">Remove</button>
    </React.Fragment>
  );
}
export default User;
