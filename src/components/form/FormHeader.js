import React from "react";

const FormHeader = ({ _iconName, _text }) => {
  return (
    <div>
      <div className="bg-dark text-white rounded-pill p-2 font-weight-bold">
        <i className={"mx-2 fa fa-" + _iconName}></i>
        {_text}
      </div>
    </div>
  );
};

export default FormHeader;
