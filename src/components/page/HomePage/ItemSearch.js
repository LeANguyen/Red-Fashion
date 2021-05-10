import React, { useState } from "react";
import Input from "../../common/Input";
import Dropdown from "../../common/Dropdown";
import Button from "../../common/Button";
import DropdownItem from "../../common/DropdownItem";
import NumberInput from "../../common/NumberInput";
import styles from "./ItemSearch.module.scss";
import Space from "../../common/Space";
import { Link, useHistory, useLocation } from "react-router-dom";
import querySearch from "stringquery";

const ItemSearch = () => {
  const location = useLocation();
  const query = querySearch(location.search);

  const itemNameQ = query["item-name"]
    ? decodeURIComponent(query["item-name"])
    : "";
  const originQ = query.origin ? query.origin : "Any";
  const categoryQ = query.category ? query.category : "Any";
  const priceFromQ = query["price-from"] ? query["price-from"] : "";
  const priceToQ = query["price-to"] ? query["price-to"] : "";

  const [priceFrom, setPriceFrom] = useState(priceFromQ);
  const [priceTo, setPriceTo] = useState(priceToQ);
  const [category, setCategory] = useState(categoryQ);
  const [origin, setOrigin] = useState(originQ);
  const [itemName, setItemName] = useState(itemNameQ);

  const priceMilestones = [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000"
  ];

  return (
    <div className={styles["body"]}>
      <br></br>
      <div className="row grid-container">
        <div className="col-lg-10">
          <Input
            _value={itemName}
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
            _text={
              "Price: " +
              (priceFrom === "" && priceTo === ""
                ? "Any"
                : "$" +
                  (priceFrom === "" ? 0 : priceFrom) +
                  " - " +
                  "$" +
                  (priceTo === "" ? "..." : priceTo))
            }
            _iconName="money"
            _displayToggle
            _dropdownClick
          >
            <div className="container d-flex align-items-center">
              <Space></Space>
              <Input
                _value={priceFrom}
                _inputType="number"
                _onChange={event => setPriceFrom(event.target.value)}
              ></Input>
              <Space></Space>
              <strong>-</strong>
              <Space></Space>
              <Input
                _value={priceTo}
                _inputType="number"
                _onChange={event => setPriceTo(event.target.value)}
              ></Input>
              <Space></Space>
            </div>

            {priceMilestones.map((p, i) => {
              if (i === 0) {
                return (
                  <div key={i}>
                    <DropdownItem
                      _active={
                        priceFrom === "" && priceTo === priceMilestones[i]
                      }
                      _onClick={() => {
                        setPriceFrom("");
                        setPriceTo(priceMilestones[i]);
                      }}
                    >
                      <strong>{`< $${priceMilestones[i]}`}</strong>
                    </DropdownItem>
                  </div>
                );
              }
              if (i === priceMilestones.length - 1) {
                return (
                  <div key={i}>
                    <DropdownItem
                      _active={
                        priceFrom === priceMilestones[i] && priceTo === ""
                      }
                      _onClick={() => {
                        setPriceFrom(priceMilestones[i]);
                        setPriceTo("");
                      }}
                    >
                      <strong>{`> $${priceMilestones[i]}`}</strong>
                    </DropdownItem>
                  </div>
                );
              }
              return (
                <div key={i}>
                  <DropdownItem
                    _active={
                      priceFrom === priceMilestones[i - 1] &&
                      priceTo === priceMilestones[i]
                    }
                    _onClick={() => {
                      setPriceFrom(priceMilestones[i - 1]);
                      setPriceTo(priceMilestones[i]);
                    }}
                  >
                    <strong>{`$${priceMilestones[i - 1]} - $${
                      priceMilestones[i]
                    }`}</strong>
                  </DropdownItem>
                </div>
              );
            })}
          </Dropdown>
        </div>

        <div className="col-lg-4">
          <Dropdown
            _className="btn-pink btn-block"
            _text={`Category: ${category}`}
            _iconName="star"
            _displayToggle
            _dropdownClick
          >
            <DropdownItem _onClick={() => setCategory("Any")}>
              <strong>
                <i className="fa fa-star"></i>
                <Space></Space>
                <Space></Space>
                Any
              </strong>
            </DropdownItem>
            <DropdownItem _onClick={() => setCategory("Shirt")}>
              <strong>
                <i className="fa fa-star"></i>
                <Space></Space>
                <Space></Space>
                Shirt
              </strong>
            </DropdownItem>
            <DropdownItem _onClick={() => setCategory("Pant")}>
              <strong>
                <i className="fa fa-star"></i>
                <Space></Space>
                <Space></Space>
                Pant
              </strong>
            </DropdownItem>
            <DropdownItem _onClick={() => setCategory("Shoe")}>
              <strong>
                <i className="fa fa-star"></i>
                <Space></Space>
                <Space></Space>
                Shoe
              </strong>
            </DropdownItem>
          </Dropdown>
        </div>
        <div className="col-lg-4">
          <Dropdown
            _className="btn-pink btn-block"
            _text={`Origin: ${origin}`}
            _iconName="star"
            _displayToggle
            _dropdownClick
          >
            <DropdownItem _onClick={() => setOrigin("Any")}>
              <strong>
                <i className="fa fa-star"></i>
                <Space></Space>
                <Space></Space>
                Any
              </strong>
            </DropdownItem>
            <DropdownItem _onClick={() => setOrigin("Vietnam")}>
              <strong>
                <i className="fa fa-star"></i>
                <Space></Space>
                <Space></Space>
                Vietnam
              </strong>
            </DropdownItem>
            <DropdownItem _onClick={() => setOrigin("China")}>
              <strong>
                <i className="fa fa-star"></i>
                <Space></Space>
                <Space></Space>
                China
              </strong>
            </DropdownItem>
            <DropdownItem _onClick={() => setOrigin("USA")}>
              <strong>
                <i className="fa fa-star"></i>
                <Space></Space>
                <Space></Space>
                USA
              </strong>
            </DropdownItem>
          </Dropdown>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default ItemSearch;
