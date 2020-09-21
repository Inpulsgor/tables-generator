import React from "react";

const TableCopy = ({ tableDataCopy, handleDeleteRow, handleEditRow }) => {
  return (
    <div className="table-container">
      <table className="table">
        <tbody className="table__body">
          <tr className="table__heading">
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>City</th>
            <th></th>
          </tr>
          {tableDataCopy &&
            tableDataCopy.map((contact) => {
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

export default TableCopy;
