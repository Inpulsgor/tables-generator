import React from "react";

import { ReactComponent as DeleteButton } from "../assets/btn_delete.svg";

const Table = ({
  tableData,
  handleEditRow,
  handleDeleteRow,
  handleCopyTable,
  handleDeleteTable,
}) => {
  return (
    <div className="table-container">
      {/* COPY & DELETE TABLE */}
      <div className="control">
        <button
          type="button"
          className="control__button_copy"
          onClick={handleCopyTable}
        >
          Copy table
        </button>
        <button
          type="button"
          className="control__button_delete"
          onClick={handleDeleteTable}
        >
          <DeleteButton />
        </button>
      </div>

      {/* TABLE */}
      <table className="table">
        <tbody className="table__body">
          <tr className="table__heading">
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>City</th>
            <th></th>
          </tr>
          {tableData.length > 0 &&
            tableData.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.surname}</td>
                  <td>{contact.age}</td>
                  <td>{contact.city}</td>
                  <td>
                    <button
                      type="button"
                      className="table__button_edit"
                      onClick={() => handleEditRow(contact.id)}
                    >
                      edit
                    </button>
                    <button
                      type="button"
                      className="table__button_delete"
                      onClick={() => handleDeleteRow(contact.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
