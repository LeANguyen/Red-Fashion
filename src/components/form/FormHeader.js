import React from "react";

const FormHeader = ({ _iconName, _text }) => {
  return (
    <div>
      <div className="bg-dark text-white rounded py-2 my-4 font-weight-bold text-center">
        {_iconName && <i className={"mx-2 fa fa-" + _iconName}></i>}
        {_text}
      </div>
    </div>
  );
};

export default FormHeader;
