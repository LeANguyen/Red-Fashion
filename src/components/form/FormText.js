import React from "react";

const FormText = ({ _text, _variant }) => {
  return (
    <>
      {_variant && (
        <p
          className={"text-" + _variant + " text-center font-weight-bold my-2"}
        >
          {_text}
        </p>
      )}
      {!_variant && (
        <p className="text-center font-weight-bold my-2">{_text}</p>
      )}
    </>
  );
};

export default FormText;
