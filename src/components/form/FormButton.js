import React from "react";
import FormLoader from "./FormLoader";

const FormButton = ({
  _text,
  _disabled = false,
  _hidden = false,
  _onClick,
  _variant,
  _loading = false
}) => {
  return (
    <>
      {!_loading && (
        <button
          className={
            "btn btn-" +
            _variant +
            " rounded-pill btn-block py-2 font-weight-bold"
          }
          onClick={_onClick}
          hidden={_hidden}
          type="button"
          disabled={_disabled}
        >
          {_text}
        </button>
      )}
      {_loading && (
        <button
          className={
            "btn btn-" +
            _variant +
            " rounded-pill btn-block py-2 font-weight-bold"
          }
          disabled={true}
        >
          <FormLoader _height={15} _color="rgb(255, 255, 255)"></FormLoader>
        </button>
      )}
    </>
  );
};

export default FormButton;
