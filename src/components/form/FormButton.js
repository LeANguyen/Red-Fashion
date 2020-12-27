import React from "react";

const FormButton = ({ _text, _hidden = false, _onClick, _variant }) => {
  return (
    <button
      className={"btn btn-" + _variant + " rounded-pill btn-block py-2"}
      onClick={_onClick}
      hidden={_hidden}
    >
      {_text}
    </button>
  );
};

export default FormButton;
