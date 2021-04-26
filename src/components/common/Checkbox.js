import React from "react";
import Space from "./Space";
import styles from "./Checkbox.module.scss";
const Checkbox = ({ _onChange, _className, children }) => {
  // global properties
  const textFontWeight = "font-weight-bold";

  return (
    <label class={styles["container"] + " text-white"}>
      Four
      <input type="checkbox"></input>
      <span class={styles["checkmark"]}></span>
    </label>
  );
};

export default Checkbox;
