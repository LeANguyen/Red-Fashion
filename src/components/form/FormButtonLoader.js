import React from "react";
import FormLoader from "./FormLoader";

const FormButtonLoader = ({ _variant }) => {
  return (
    <button
      className={
        "btn rounded-pill btn-block py-2 font-weight-bold bg-" + _variant
      }
      disabled={true}
    >
      <FormLoader _height={15} _color="rgb(255, 255, 255)"></FormLoader>
    </button>
  );
};

fqeffeqffeqqf;
export default FormButtonLoader;
