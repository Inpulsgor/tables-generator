import React from "react";

const FirsForm = ({ handleChange, handleSubmit, inputValue }) => {
  return (
    <form className="form form-slim" onSubmit={handleSubmit}>
      <input
      value={inputValue}
        type="text"
        name="name"
        onChange={handleChange}
        className="form__input"
      />
      <input
      value={inputValue}
        type="text"
        name="surname"
        onChange={handleChange}
        className="form__input"
      />
      <input
      value={inputValue}
        type="text"
        name="age"
        onChange={handleChange}
        className="form__input"
      />
      <input
      value={inputValue}
        type="text"
        name="city"
        onChange={handleChange}
        className="form__input"
      />
      <button type="submit" className="form__button"></button>
    </form>
  );
};

export default FirsForm;
