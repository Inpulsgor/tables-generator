import React, { useState, useEffect, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import { FormSlim, FormWide, Table, TableCopy, Modal } from "./components";

const initialValues = {
  name: "",
  surname: "",
  age: "",
  city: "",
};

const App = () => {
  // < ----- useState ----- >
  const [inputValues, setInputValues] = useState(initialValues);
  const [tableData, setTableData] = useState([]);
  const [tableDataCopy, setTableDataCopy] = useState([]);
  const [checked, setCheckbox] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // < ----- useCallback ----- >
  // close modal on press Escape
  const handleCloseModalOnEscape = useCallback((e) => {
    e.keyCode === 27 && handleCloseModal();
  }, []);
  // close modal on overlay click
  const handleOverlayClick = useCallback(({ target }) => {
    if (target.classList.contains("overlay")) setShowModal(false);
  }, []);

  // < ----- useEffect ----- >
  useEffect(() => {
    document.addEventListener("keydown", handleCloseModalOnEscape, false);
    document.addEventListener("mousedown", handleOverlayClick, false);

    return () => {
      document.removeEventListener("keydown", handleCloseModalOnEscape, false);
      document.removeEventListener("mousedown", handleOverlayClick, false);
    };
  }, [handleCloseModalOnEscape, handleOverlayClick]);

  // < ----- FORM ----- >
  // get input values
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };
  // reset input fields
  const handleReset = () => setInputValues({ ...initialValues });
  // submit form data
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
  // hide input placeholder
  const onFocus = ({ target }) => (target.placeholder = "");
  // show input placeholder
  const onBlur = ({ target }) =>
    (target.placeholder =
      target.name.charAt(0).toUpperCase() + target.name.slice(1));

  // < ----- TABLE ----- >
  // remove table row
  const handleDeleteRow = (id) => {
    setTableData(tableData.filter((item) => item.id !== id));
    setTableDataCopy(tableDataCopy.filter((item) => item.id !== id));
  };
  //! edit table row (open modal)
  const handleEditRow = (id) => {
    setShowModal(!showModal);
    console.log(id);
  };
  //! copy table
  const handleCopyTable = () => {
    let setNewID;
    if (tableData.length > 0) {
      setNewID = tableData.map((contact) => {
        const { name, surname, age, city } = contact;
        return {
          id: uuidv4(),
          name,
          surname,
          age,
          city,
        };
      });
    }

    setTableDataCopy(setNewID);
    // const item = [...tableData];
    // console.log(item);
    // setTableDataCopy(item);
  };
  //! delete table copy
  const handleDeleteTable = (id) => {
    console.log(id);
  };

  // < ----- MODAL ----- >
  // toggle checkbox
  const toggleCheckbox = () => {
    setCheckbox(!checked);
  };
  // close modal
  const handleCloseModal = (e) => {
    setShowModal(false);
  };
  //! save editing changes
  const handleModalSubmit = (e) => {
    e.preventDefault();
    console.log("modal submitted");
    setCheckbox(false);
    handleCloseModal();
  };

  return (
    <main className="main">
      <div className="main__container container">
        {/* Form 1 */}
        <FormSlim
          inputValues={inputValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {/* Form 2 */}
        <FormWide
          inputValues={inputValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {/* Table */}
        <Table
          tableData={tableData}
          handleEditRow={handleEditRow}
          handleDeleteRow={handleDeleteRow}
          handleCopyTable={handleCopyTable}
          handleDeleteTable={handleDeleteTable}
        />
        {/* Table Copy */}
        <ul className="table-copy__list">
          {tableDataCopy.length > 0 &&
            tableDataCopy.map((contact) => {
              return (
                <TableCopy
                  key={contact.id}
                  id={contact.id}
                  contact={contact}
                  tableDataCopy={tableDataCopy}
                  handleEditRow={handleEditRow}
                  handleDeleteRow={handleDeleteRow}
                  handleDeleteTable={handleDeleteTable}
                />
              );
            })}
        </ul>
        {/* Modal form */}
        {showModal && (
          <Modal
            onFocus={onFocus}
            onBlur={onBlur}
            checked={checked}
            handleModalSubmit={handleModalSubmit}
            toggleCheckbox={toggleCheckbox}
            handleCloseModal={handleCloseModal}
          />
        )}
      </div>
    </main>
  );
};

export default App;
