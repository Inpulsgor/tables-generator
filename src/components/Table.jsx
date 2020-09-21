import React from "react";

import { ReactComponent as DeleteButton } from "../assets/btn_delete.svg";
import { EmptyTable } from "../services/helpers";

const Table = ({ tableData, handleDelete }) => {
  return (
    <div className="table-container">
      {/* COPY & DELETE TABLE - BUTTONS */}
      <div className="control">
        <button type="button" className="control__button_copy">
          Copy table
        </button>
        <button type="button" className="control__button_delete">
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
          {tableData.length > 0 ? (
            tableData.map((contact, index) => {
              return (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.surname}</td>
                  <td>{contact.age}</td>
                  <td>{contact.city}</td>
                  <td>
                    <button type="button" className="table__button_edit">
                      edit
                    </button>
                    <button
                      type="button"
                      className="table__button_delete"
                      onClick={() => handleDelete(contact.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <EmptyTable />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
