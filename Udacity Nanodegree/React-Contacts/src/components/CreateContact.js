import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
const CreateContact = () => {
  return (
    <div>
      <Link to="/" className="close-create-contact">
        Close
      </Link>
      <form className="create-contact-form">
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
