import React, { useState } from "react";
import Button from "./Button";
import styles from "./NumberInput.module.scss";
import Input from "./Input";
const NumberInput = ({
  _placeholder,
  _onChange,
  _iconName,
  _width,
  _maxLength,
  _value,
  _onClickPlus,
  _onClickMinus,
  _disabled
}) => {
  return (
    <div className={styles["wrapper"]}>
      <Button
        _className={`btn-red ${styles["minus-btn"]}`}
        _iconName="minus"
        _onClick={_onClickMinus}
        _disabled={_disabled}
      ></Button>
      <Input
        _placeholde={_placeholder}
        _width={_width}
        _iconName={_iconName}
        _inputType="number"
        _maxLength={_maxLength}
        _wrapperClass={styles["input"]}
        _value={_value}
        _onChange={_onChange}
        _disabled={_disabled}
      ></Input>
      <Button
        _className={`btn-green ${styles["plus-btn"]}`}
        _iconName="plus"
        _onClick={_onClickPlus}
        _disabled={_disabled}
      ></Button>
    </div>
  );
};

export default NumberInput;
