import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";
function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function removeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen ? (
        <Modal onConfirm={removeModalHandler} onCancel={removeModalHandler} />
      ) : null}
      {modalIsOpen ? <Backdrop onClick={removeModalHandler} /> : null}
    </div>
  );
}

export default Todo;
