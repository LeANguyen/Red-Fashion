import React from "react";

const Dropdown = ({
  _text,
  _iconName,
  _displayToggle,
  _className = "btn btn-info rounded border",
  children
}) => {
  return (
    <>
      <button
        className={[_displayToggle ? "dropdown-toggle" : "", _className].join(
          " "
        )}
        data-toggle="dropdown"
      >
        <i className={"fa fa-" + _iconName}></i> {_text}
      </button>
      <div className="dropdown-menu">{children}</div>
    </>
  );
};

export default Dropdown;
