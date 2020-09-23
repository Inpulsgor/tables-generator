import React from "react";
import TableCopy from "./TableCopy";

const TableCopiesList = ({
  tabletUp,
  tableDataCopy,
  handleEditRow,
  handleDeleteRowCopy,
  handleDeleteTable,
}) => {
  return (
    <ul className="tables__list">
      {tableDataCopy.length > 0 &&
        tableDataCopy.map((copy, idx) => {
          if (copy.length > 0) {
            return (
              <TableCopy
                key={idx}
                copy={copy}
                tabletUp={tabletUp}
                tableDataCopy={tableDataCopy}
                handleEditRow={handleEditRow}
                handleDeleteRowCopy={handleDeleteRowCopy}
                handleDeleteTable={handleDeleteTable}
              />
            );
          }
          return null;
        })}
    </ul>
  );
};

export default TableCopiesList;
