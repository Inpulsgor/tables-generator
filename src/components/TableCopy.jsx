import React from "react";
import { ReactComponent as DeleteButton } from "../assets/btn_delete.svg";

const TableCopy = ({
  copy,
  handleDeleteRow,
  handleDeleteTable,
  handleEditRow,
  contact,
}) => {
  return (
    <li className="table-copy__list-item">
      <div className="table-container">
        <div className="control">
          <button
            type="button"
            className="control__button_delete"
            onClick={handleDeleteTable}
          >
            <DeleteButton />
          </button>
        </div>
        <table className="table">
          <thead className="table__heading">
            <tr className="table__heading">
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
              <th>City</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table__body">
            {copy &&
              copy.map((contact) => {
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
    </li>
  );
};

export default TableCopy;
