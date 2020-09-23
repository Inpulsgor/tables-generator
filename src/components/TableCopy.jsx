import React from "react";
import { ReactComponent as DeleteButton } from "../assets/btn_delete.svg";

const TableCopy = ({
  copy,
  motion,
  tabletUp,
  handleDeleteRowCopy,
  handleDeleteTable,
  handleEditRow,
}) => {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="tables__list-item"
    >
      <div className="table-container">
        <div className="control">
          <motion.button
            type="button"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
            className="control__button_delete"
            onClick={handleDeleteTable}
          >
            <DeleteButton />
          </motion.button>
        </div>
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
            {copy &&
              copy.map((contact) => {
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
                        onClick={() => handleDeleteRowCopy(contact.id)}
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
    </motion.li>
  );
};

export default TableCopy;
