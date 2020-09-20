import React from "react";

import { ReactComponent as DeleteButton } from "../assets/btn_delete.svg";
import { EmptyTable } from "../services/helpers";

const Table = ({ tableData }) => {
  return (
    <div className="table-wrapper">
      <div className="table-container">
        <div className="control">
          <button type="button" className="control__button_copy">
            Copy table
          </button>
          <button type="button" className="control__button_delete">
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
            {tableData.length > 0 ? (
              tableData.map((contact) => {
                return (
                  <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{contact.surname}</td>
                    <td>{contact.age}</td>
                    <td>{contact.city}</td>
                    <td>
                      <button className="table__button_edit">edit</button>
                      <button className="table__button_delete">delete</button>
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
    </div>
  );
};

export default Table;
