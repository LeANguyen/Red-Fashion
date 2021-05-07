import React from "react";
import styles from "./DropdownItem.module.scss";
const DropdownItem = ({ _active, children, _onClick }) => {
  return (
    <div
      className={
        `dropdown-item ${styles["dropdown-item"]}` + (_active ? " active" : "")
      }
      onClick={_onClick}
    >
      {children}
    </div>
  );
};

export default DropdownItem;
