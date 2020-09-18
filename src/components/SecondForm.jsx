import React from "react";

const SecondForm = ({ handleChange }) => {
  return (
    <form className="form">
      <input
        type="text"
        name="name"
        onChange={handleChange}
        className="from__search_name"
      />
      <input
        type="text"
        name="surname"
        onChange={handleChange}
        className="from__search_surname"
      />
      <input
        type="text"
        name="age"
        onChange={handleChange}
        className="from__search_age"
      />
      <input
        type="text"
        name="city"
        onChange={handleChange}
        className="from__search_city"
      />
      <button className="form__button_submit"></button>
    </form>
  );
};

export default SecondForm;
