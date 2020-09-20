import React from "react";
import { ReactComponent as DeleteButton } from "../assets/btn_delete.svg";

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__heading">
        <p className="modal__description">Edit name</p>
        <button className="modal__button_close">
          <DeleteButton />
        </button>
      </div>
      <form className="modal-form">
        <div>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="modal-form__input"
          />
          <input
            name="name"
            type="text"
            placeholder="Surname"
            className="modal-form__input"
          />
          <input
            name="City"
            type="text"
            placeholder="Name"
            className="modal-form__input"
          />
        </div>
        <input type="checkbox"></input>
        <button></button>
      </form>
    </div>
  );
};

export default Modal;
