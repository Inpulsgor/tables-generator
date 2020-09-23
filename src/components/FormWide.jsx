import React from "react";

const FormWide = ({
  motion,
  handleChange,
  handleSubmit,
  onFocus,
  onBlur,
  inputValues: { name, surname, age, city },
}) => {
  return (
    <form className="form-wide form" onSubmit={handleSubmit}>
      <input
        minLength="2"
        maxLength="15"
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
        minLength="2"
        maxLength="15"
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
        min="1"
        max="150"
        required
        name="age"
        type="number"
        value={age}
        placeholder="Age"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={handleChange}
        className="form-wide__input"
      />

      <input
        minLength="2"
        maxLength="15"
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

      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        className="form-wide__button button"
      >
        add
      </motion.button>
    </form>
  );
};

export default FormWide;
