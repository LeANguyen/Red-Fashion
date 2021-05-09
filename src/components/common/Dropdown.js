import React from "react";
import styles from "./Dropdown.module.scss";
import Space from "./Space";

const Dropdown = ({
  _text,
  _iconName,
  _displayToggle,
  _className = "btn btn-info rounded border",
  _dropdownHover,
  _dropdownClick,
  children
}) => {
  return (
    <div className={styles["dropdown-bubble"] + " " + styles["dropdown"]}>
      <strong
        className={[
          _displayToggle ? "dropdown-toggle" : "",
          "text-center",
          _className
        ].join(" ")}
        data-toggle={_dropdownClick ? "dropdown" : ""}
      >
        <i className={"fa fa-" + _iconName}></i>
        <Space></Space>
        <Space></Space>
        {_text}
      </strong>
      <ul
        className={
          "dropdown-menu" +
          (_dropdownClick ? " " + styles["dropdown-menu-click"] : "") +
          (_dropdownHover ? " " + styles["dropdown-menu-hover"] : "")
        }
      >
        {children}
      </ul>
    </div>
  );
};

export default Dropdown;
