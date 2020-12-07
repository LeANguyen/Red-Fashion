import React from "react";

const Form = ({ children }) => {
  return (
    <div>
      <form>
        <div className="form-group p-4">{children}</div>
      </form>
    </div>
  );
};

export default Form;
