import React from "react";
import TableCopy from "./TableCopy";

const TableCopiesList = ({
  motion,
  tabletUp,
  tableDataCopy,
  handleEditRow,
  handleDeleteRowCopy,
  handleDeleteTable,
}) => {
  return (
    <ul className="tables__list">
      {tableDataCopy.length > 0 &&
        tableDataCopy.map((dataCopy, idx) => {
          if (dataCopy.length > 0) {
            return (
              <TableCopy
                index={idx}
                key={idx}
                motion={motion}
                dataCopy={dataCopy}
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
