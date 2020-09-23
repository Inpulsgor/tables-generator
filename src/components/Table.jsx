import React from "react";
import { ReactComponent as DeleteButton } from "../assets/btn_delete.svg";

const Table = ({
  motion,
  tabletUp,
  tableData,
  handleEditRow,
  handleDeleteRow,
  handleCopyTable,
  handleDeleteLastTableCopy,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="table-container"
    >
      {/* COPY & DELETE TABLE */}
      <div className="control">
        <motion.button
          type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          onClick={handleCopyTable}
          className="control__button_copy"
        >
          Copy table
        </motion.button>
        <motion.button
          type="button"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1 }}
          onClick={handleDeleteLastTableCopy}
          className="control__button_delete"
        >
          <DeleteButton className="control__button_icon" />
        </motion.button>
      </div>

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
                <motion.tr
                  key={contact.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
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
                </motion.tr>
              );
            })}
        </tbody>
      </table>
    </motion.div>
  );
};

export default Table;
