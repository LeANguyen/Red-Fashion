import React from "react";

const FormCheckbox = ({ _text, _onChange }) => {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        onChange={_onChange}
      ></input>
      <strong className="text-muted">{_text}</strong>
    </div>
  );
};

export default FormCheckbox;
