import React from "react";
import Space from "./Space";
import styles from "./Checkbox.module.scss";
const Checkbox = ({ _onChange }) => {
  return (
    <label className={styles["container"]}>
      <input type="checkbox" onChange={_onChange}></input>
      <span className={styles["checkbox"]}></span>
      <Space></Space>
      <Space></Space>
      <span className="text-white">
        Please agree to the terms and conditions
      </span>
    </label>
  );
};

export default Checkbox;
