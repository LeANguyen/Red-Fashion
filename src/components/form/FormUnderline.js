import React from "react";

const FormUnderline = ({ children }) => {
  return (
    <li className="d-flex justify-content-between py-2 border-bottom">
      {children}
    </li>
  );
};

export default FormUnderline;
