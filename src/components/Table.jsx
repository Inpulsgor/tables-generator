import React from "react";

import { ReactComponent as DeleteButton } from "../assets/btn_delete.svg";

const Table = ({
  tabletUp,
  tableData,
  handleEditRow,
  handleDeleteRow,
  handleCopyTable,
  handleDeleteTable,
}) => {
  return (
    <div className="table-container">
      {/* COPY & DELETE TABLE */}
      {tableData.length > 0 && (
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
      )}

      {/* TABLE */}
      <table className="table">
        {tabletUp && (
          <thead className="table__head">
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
              <th>City</th>
              <th></th>
            </tr>
          </thead>
        )}
        <tbody className="table__body">
          {tableData.length > 0 &&
            tableData.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td data-label="Name">{contact.name}</td>
                  <td data-label="Surname">{contact.surname}</td>
                  <td data-label="Age">{contact.age}</td>
                  <td data-label="City">{contact.city}</td>
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
