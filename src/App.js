import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { FormSlim, FormWide, Table, TableCopy, Modal } from "./components";

const initialValues = {
  name: "",
  surname: "",
  age: "",
  city: "",
};

const App = () => {
  const [inputValues, setInputValues] = useState(initialValues);
  const [tableData, setTableData] = useState([]);
  const [tableDataCopy, setTableDataCopy] = useState([]);
  const [checked, setCheckbox] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // FORM - get input values
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };
  // FORM - reset input fields
  const handleReset = () => setInputValues({ ...initialValues });
  // FORM - submit form data
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
  // FORM - hide input placeholder
  const onFocus = ({ target }) => (target.placeholder = "");
  // FORM - show input placeholder
  const onBlur = ({ target }) =>
    (target.placeholder =
      target.name.charAt(0).toUpperCase() + target.name.slice(1));

  // TABLE - remove table row
  const handleDeleteRow = (id) => {
    setTableData(tableData.filter((item) => item.id !== id));
  };
  //! TABLE - edit table row (open modal)
  const handleEditRow = (id) => {
    setShowModal(!showModal)
    console.log(id);
  };
  //! TABLE - copy table
  const handleCopyTable = () => {
    const item = [...tableData]
    setTableDataCopy(item)
  };
  //! TABLE - delete table copy
  const handleDeleteTable = (id) => {
    console.log(id);
  };

  // MODAL - toggle checkbox
  const toggleCheckbox = () => {
    setCheckbox(!checked);
  };
  //! MODAL - save editing changes
  const handleModalSubmit = (e) => {
    e.preventDefault();
    console.log("modal submitted");
  };
  //! MODAL - class name switch
  // const handleSwitchClassName = showModal ? "modal modal__active" : "modal__hidden";

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
        <Table
          tableData={tableData}
          handleEditRow={handleEditRow}
          handleDeleteRow={handleDeleteRow}
          handleCopyTable={handleCopyTable}
          handleDeleteTable={handleDeleteTable}
        />
        <div className="child">
        {tableDataCopy.length > 0 && (
          <TableCopy
            tableDataCopy={tableDataCopy}
            handleEditRow={handleEditRow}
            handleDeleteRow={handleDeleteRow}
          />
        )}
        </div>
        {showModal && <Modal
          onFocus={onFocus}
          onBlur={onBlur}
          checked={checked}
          handleModalSubmit={handleModalSubmit}
          toggleCheckbox={toggleCheckbox}
        />}
      </div>
    </main>
  );
};

export default App;
