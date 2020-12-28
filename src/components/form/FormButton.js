import React from "react";

const FormButton = ({ _text, _hidden = false, _onClick, _variant }) => {
  return (
    <button
      className={
        "btn btn-" + _variant + " rounded-pill btn-block py-2 font-weight-bold"
      }
      onClick={_onClick}
      hidden={_hidden}
      type="button"
    >
      {_text}
    </button>
  );
};

export default FormButton;
