import React from "react";

const FormWide = ({ handleChange, handleSubmit, onFocus, onBlur, inputValues: {name, surname, age, city} }) => {
  return (
    <form className="form-wide form" onSubmit={handleSubmit}>
      <input
      value={name}
        type="text"
        name="name"
        placeholder="Name"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        className="form-wide__input"
      />
      <input
      value={surname}
        type="text"
        name="surname"
        placeholder="Surname"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        className="form-wide__input"
      />
      <input
      value={age}
        type="number"
        name="age"
        placeholder="Age"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        className="form-wide__input"
      />
      <input
      value={city}
        type="text"
        name="city"
        placeholder="City"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        className="form-wide__input"
      />
      <button type="submit" className="form-wide__button button">add</button>
    </form>
  );
};

export default FormWide;
