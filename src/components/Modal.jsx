import React from "react";
import { ReactComponent as DeleteButton } from "../assets/btn_delete.svg";

const Modal = ({ onFocus, onBlur, agreement, toggleAgreement }) => {
  return (
    <div className="modal">
      {/* MODAL HEADING */}
      <div className="modal__heading">
        <p className="modal__description">Edit name</p>
        <button className="modal__button_close">
          <DeleteButton />
        </button>
      </div>
      {/* MODAL FORM INPUTS */}
      <form className="modal-form">
        <div className="modal-form__container">
          <input
            name="name"
            type="text"
            placeholder="Name"
            onFocus={onFocus}
            onBlur={onBlur}
            className="modal-form__input"
          />
          <input
            name="surname"
            type="text"
            placeholder="Surname"
            onFocus={onFocus}
            onBlur={onBlur}
            className="modal-form__input"
          />
          <input
            name="city"
            type="text"
            placeholder="City"
            onFocus={onFocus}
            onBlur={onBlur}
            className="modal-form__input"
          />
        </div>
        {/* MODAL FORM CHECKBOX */}
        <div className="modal-form__container">
          <label htmlFor="checkbox" className="modal-form__label">
            <input
              type="checkbox"
              name="agreement"
              checked={agreement}
              onChange={toggleAgreement}
              className="modal-form__checkbox"
            />
            <span className="modal-form__label-text">Totally agree</span>
          </label>

          {/* MODAL FORM SUBMIT BUTTON */}
          <button type="submit" className="modal-form__button button ">
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;