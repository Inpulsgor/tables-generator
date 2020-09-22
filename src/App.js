import React, { useState, useEffect, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import { FormSlim, FormWide, Table, TableCopy, Modal } from "./components";

const initialValues = {
  name: "",
  surname: "",
  age: "",
  city: "",
};

const editedData = {
  modalName: "",
  modalSurname: "",
  modalCity: "",
};

const App = () => {
  // < ----- useState ----- >
  const [inputValues, setInputValues] = useState(initialValues);
  const [editedValues, setEditedValues] = useState(editedData);
  const [tableData, setTableData] = useState([]);
  const [tableDataCopy, setTableDataCopy] = useState([]);
  const [tableDataModified, setTableDataModified] = useState([]);
  const [checked, setCheckbox] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [itemID, setItemID] = useState(null);

  // < ----- useCallback ----- >
  // close modal
  const handleCloseModal = useCallback((e) => {
    handleResetModal();
    setShowModal(false);
  }, []);
  // close modal on press Escape
  const handleCloseModalOnEscape = useCallback(
    (e) => {
      e.keyCode === 27 && handleCloseModal();
    },
    [handleCloseModal]
  );
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
    if (name.includes("modal")) {
      setEditedValues((prevState) => ({ ...prevState, [name]: value }));
      return;
    }
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };
  // reset input fields
  const handleReset = () => setInputValues({ ...initialValues });
  const handleResetModal = () => setEditedValues({ ...editedData });
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
  // edit table row (open modal)
  const handleEditRow = (id) => {
    setShowModal(!showModal);
    setItemID(id);
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

  //! save editing changes
  const handleModalSubmit = (e) => {
    e.preventDefault();
    // const { modalName, modalSurname, modalCity } = editedValues;
    setTableDataModified(editedValues);
    console.log(tableDataModified);

    // const update = tableData.map((item) => {
    //   if (item.id === itemID) {
    //     return {
    //       id: item.id,
    //       name: modalName,
    //       surname: modalSurname,
    //       city: modalCity,
    //       age: item.age,
    //     };
    //   }
    //   return item;
    // });
    // console.log(update);

    // setTableDataCopy(...tableDataCopy, ...update);
    // const find = tableDataCopy.find((item) => item.id === itemID);
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
            editedValues={editedValues}
            onFocus={onFocus}
            onBlur={onBlur}
            checked={checked}
            handleModalSubmit={handleModalSubmit}
            toggleCheckbox={toggleCheckbox}
            handleCloseModal={handleCloseModal}
            handleChange={handleChange}
          />
        )}
      </div>
    </main>
  );
};

export default App;
