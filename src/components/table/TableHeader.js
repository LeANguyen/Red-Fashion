import React from "react";

const TableHeader = ({ _headers }) => {
  return (
    <tr className="bg-dark text-white">
      {_headers.map(header => {
        return (
          <th scope="col">
            <div className="text-center">{header}</div>
          </th>
        );
      })}
    </tr>
  );
};

export default TableHeader;
