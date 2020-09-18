import React from "react";

const SecondForm = ({ handleChange, handleSubmit, inputValue }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
      value={inputValue}
        type="text"
        name="name"
        onChange={handleChange}
        className="form__search_name"
      />
      <input
      value={inputValue}
        type="text"
        name="surname"
        onChange={handleChange}
        className="form__search_surname"
      />
      <input
      value={inputValue}
        type="text"
        name="age"
        onChange={handleChange}
        className="form__search_age"
      />
      <input
      value={inputValue}
        type="text"
        name="city"
        onChange={handleChange}
        className="form__search_city"
      />
      <button className="form__button_submit"></button>
    </form>
  );
};

export default SecondForm;
