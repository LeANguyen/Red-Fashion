import React, { useState } from "react";
import Input from "../../common/Input";
import Dropdown from "../../common/Dropdown";
import Button from "../../common/Button";
import DropdownItem from "../../common/DropdownItem";
import NumberInput from "../../common/NumberInput";
import styles from "./ItemSearch.module.scss";
import Space from "../../common/Space";
import { Link, useHistory } from "react-router-dom";

const ItemSearch = () => {
  const history = useHistory();
  const [priceFrom, setPriceFrom] = useState();
  const [priceTo, setPriceTo] = useState();
  const [category, setCategory] = useState();
  const [origin, setOrigin] = useState();
  const [itemName, setItemName] = useState();

  return (
    <div className={styles["body"]}>
      <br></br>
      <div className="row grid-container">
        <div className="col-lg-10">
          <Input
            _wrapperClass="input-1"
            _placeholder="Item's Name"
            _onChange={event => setItemName(event.target.value)}
          ></Input>
        </div>
        <div className="col-lg-2">
          <Link
            className="btn-yellow btn-block"
            to={`./?type=search&item-name=${itemName}&category=${category}&origin=${origin}&price-from=${priceFrom}&price-to=${priceTo}`}
          >
            Search
          </Link>
        </div>
        <div className="col-lg-4">
          <Dropdown
            _className="btn-yellow btn-block"
            _text="Price"
            _iconName="money"
            _displayToggle
            _dropdownClick
          >
            <div className="d-flex align-items-center">
              <Space></Space>
              <Input
                _inputType="number"
                _onChange={event => setPriceFrom(event.target.value)}
              ></Input>
              <Space></Space>
              <strong>-</strong>
              <Space></Space>
              <Input
                _inputType="number"
                _onChange={event => setPriceTo(event.target.value)}
              ></Input>
              <Space></Space>
            </div>

            <DropdownItem>A</DropdownItem>
            <DropdownItem>B</DropdownItem>
            <DropdownItem>C</DropdownItem>
          </Dropdown>
        </div>

        <div className="col-lg-4">
          <Dropdown
            _className="btn-pink btn-block"
            _text="Category"
            _iconName="star"
            _displayToggle
            _dropdownClick
          >
            <DropdownItem _onClick={() => setCategory("Shirt")}>
              Shirt
            </DropdownItem>
            <DropdownItem _onClick={() => setCategory("Pant")}>
              Pant
            </DropdownItem>
            <DropdownItem _onClick={() => setCategory("Shoe")}>
              Shoe
            </DropdownItem>
          </Dropdown>
        </div>
        <div className="col-lg-4">
          <Dropdown
            _className="btn-pink btn-block"
            _text="Origin"
            _iconName="star"
            _displayToggle
            _dropdownClick
          >
            <DropdownItem _onClick={() => setOrigin("Vietnam")}>
              Vietnam
            </DropdownItem>
            <DropdownItem _onClick={() => setOrigin("China")}>
              China
            </DropdownItem>
            <DropdownItem _onClick={() => setOrigin("USA")}>USA</DropdownItem>
          </Dropdown>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default ItemSearch;
