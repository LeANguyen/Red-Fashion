import React from "react";

const FormHeader = ({ _iconName, _text }) => {
  return (
    <div>
      <div className="bg-dark text-white rounded-pill py-3 px-5 font-weight-bold">
        {_iconName && <i className={"mx-2 fa fa-" + _iconName}></i>}
        {_text}
      </div>
    </div>
  );
};

export default FormHeader;
