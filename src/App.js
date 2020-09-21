import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { FormSlim, FormWide, Table, Modal } from "./components";

const initialValues = {
  name: "",
  surname: "",
  age: "",
  city: "",
};

const App = () => {
  const [tableData, setTableData] = useState([]);
  const [inputValues, setInputValues] = useState(initialValues);
  const [agreed, setAgreement] = useState(false);
  console.log(tableData);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleReset = () => setInputValues({ ...initialValues });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, surname, age, city } = inputValues;
    const contact = {
      id: uuidv4(),
      name,
      surname,
      age,
      city,
    };

    setTableData([...tableData, contact]);
    handleReset();
  };

  const handleDelete = (id) => {
    setTableData(tableData.filter((item) => item.id !== id));
  };

  const toggleAgreement = () => {
    setAgreement(!agreed);
  };

  const onFocus = ({ target }) => (target.placeholder = "");
  const onBlur = ({ target }) =>
    (target.placeholder =
      target.name.charAt(0).toUpperCase() + target.name.slice(1));

  return (
    <main className="main">
      <div className="main__container container">
        <FormSlim
          inputValues={inputValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <FormWide
          inputValues={inputValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <Table tableData={tableData} handleDelete={handleDelete} />
        <Modal
          onFocus={onFocus}
          onBlur={onBlur}
          agreement={agreed}
          toggleAgreement={toggleAgreement}
        />
      </div>
    </main>
  );
};

export default App;
