import React from "react";
import { ReactComponent as DeleteButton } from "../assets/btn_delete.svg";

const TableCopy = ({
  handleDeleteRow,
  handleDeleteTable,
  handleEditRow,
  contact,
}) => {
  const { name, surname, age, city } = contact;
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
          <tbody className="table__body">
            <tr className="table__heading">
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
              <th>City</th>
              <th></th>
            </tr>
            <tr>
              <td>{name}</td>
              <td>{surname}</td>
              <td>{age}</td>
              <td>{city}</td>
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
          </tbody>
        </table>
      </div>
    </li>
  );
};

export default TableCopy;
