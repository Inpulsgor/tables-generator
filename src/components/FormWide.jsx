import React from "react";

const FormWide = ({
  handleChange,
  handleSubmit,
  onFocus,
  onBlur,
  inputValues: { name, surname, age, city },
}) => {
  return (
    <form className="form-wide form" onSubmit={handleSubmit}>
      <input
        required
        name="name"
        type="text"
        value={name}
        placeholder="Name"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        className="form-wide__input"
      />

      <input
        required
        name="surname"
        type="text"
        value={surname}
        placeholder="Surname"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        className="form-wide__input"
      />

      <input
        required
        name="age"
        type="text"
        value={age}
        placeholder="Age"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        className="form-wide__input"
      />

      <input
        required
        name="city"
        type="text"
        value={city}
        placeholder="City"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        className="form-wide__input"
      />

      <button type="submit" className="form-wide__button button">
        add
      </button>
    </form>
  );
};

export default FormWide;
