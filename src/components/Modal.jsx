import React from "react";
import { ReactComponent as DeleteButton } from "../assets/btn_delete.svg";

const Modal = ({
  onFocus,
  onBlur,
  checked,
  motion,
  editedValues: { modalName, modalSurname, modalCity },
  toggleCheckbox,
  handleModalSubmit,
  handleCloseModal,
  handleChange,
}) => {
  return (
    <div className="overlay">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="modal"
      >
        {/* MODAL HEADING */}
        <div className="modal__heading">
          <p className="modal__description">Edit name</p>
          <motion.button
            type="button"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
            className="modal__button_close"
            onClick={handleCloseModal}
          >
            <DeleteButton />
          </motion.button>
        </div>

        {/* MODAL FORM INPUTS */}
        <form className="modal-form" onSubmit={handleModalSubmit}>
          <div className="modal-form__container">
            <input
              required
              name="modalName"
              value={modalName}
              type="text"
              placeholder="Name"
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={handleChange}
              className="modal-form__input"
            />
            <input
              required
              name="modalSurname"
              value={modalSurname}
              type="text"
              placeholder="Surname"
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={handleChange}
              className="modal-form__input"
            />
            <input
              required
              name="modalCity"
              value={modalCity}
              type="text"
              placeholder="City"
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={handleChange}
              className="modal-form__input"
            />
          </div>

          {/* MODAL FORM CHECKBOX */}
          <div className="modal-form__container">
            <label htmlFor="checkbox" className="modal-form__label">
              <input
                type="checkbox"
                name="agreement"
                checked={checked}
                onChange={toggleCheckbox}
                className="modal-form__checkbox"
              />
              <span className="modal-form__label-text">Totally agree</span>
            </label>

            {/* MODAL FORM SUBMIT BUTTON */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 1 }}
              // className="modal-form__button button"
              className={
                !checked
                  ? "modal-form__button disabled button"
                  : "modal-form__button button"
              }
              disabled={!checked ? true : false}
            >
              SAVE
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Modal;
