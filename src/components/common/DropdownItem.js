import React from "react";

const AppDropdownItem = ({ _text, _active, _className, _onClick }) => {
  return (
    <a
      className={["dropdown-item", _active ? "active" : "", _className].join(
        " "
      )}
      onClick={_onClick}
    >
      {_text}
    </a>
  );
};

export default AppDropdownItem;
