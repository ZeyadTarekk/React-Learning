import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import serializeForm from "form-serialize";

const CreateContact = ({ onCreateContact }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const values = serializeForm(event.target, { hash: true });
    console.log(values);
    if (onCreateContact) {
      onCreateContact(values);
    }
  };
  return (
    <div>
      <Link to="/" className="close-create-contact">
        Close
      </Link>
      <form onSubmit={handleSubmit} className="create-contact-form">
        <ImageInput
          className="create-contact-avatar-input"
          name="avatarURL"
          maxHeight={64}
        />
        <div className="create-contact-details">
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="handle" placeholder="Handle" />
          <button>Add Contact</button>
        </div>
      </form>
    </div>
  );
};
export default CreateContact;
