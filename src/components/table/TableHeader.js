import React from "react";

const TableHeader = ({ _headers, _variant, _contentVariant }) => {
  return (
    <tr
      className={
        "text-left" +
        (_variant ? " bg" + _variant : " bg-dark") +
        (_contentVariant ? " text" + _contentVariant : " text-white")
      }
    >
      {_headers.map((header, i) => {
        return (
          <>
            {i === 0 && (
              <th key={i} className="border-0 rounded-left">
                <strong>{header}</strong>
              </th>
            )}
            {i !== 0 && i !== _headers.length - 1 && (
              <th key={i} className="border-0">
                <strong>{header}</strong>
              </th>
            )}
            {i === _headers.length - 1 && (
              <th key={i} className="border-0 rounded-right">
                <strong>{header}</strong>
              </th>
            )}
          </>
        );
      })}
    </tr>
  );
};

export default TableHeader;
