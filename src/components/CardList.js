import React from "react";
import Card from "./Card";
const CardList = ({
  _data = [
    {
      id: 1,
      item: "A",
      item_name: "Green Shirt",
      origin: "China",
      price: "9000"
    },
    {
      id: 1,
      item: "A",
      item_name: "Green Shirt",
      origin: "China",
      price: "9000"
    },
    {
      id: 1,
      item: "A",
      item_name: "Green Shirt",
      origin: "China",
      price: "9000"
    },
    {
      id: 1,
      item: "A",
      item_name: "Green Shirt",
      origin: "China",
      price: "9000"
    },
    {
      id: 1,
      item: "A",
      item_name: "Green Shirt",
      origin: "China",
      price: "9000"
    },
    {
      id: 1,
      item: "A",
      item_name: "Green Shirt",
      origin: "China",
      price: "9000"
    }
  ]
}) => {
  return (
    <div className="container">
      <div className="card-columns" id="card_col">
        {_data.map((item, i) => {
          return <Card _item={item} _key={i}></Card>;
        })}
      </div>
    </div>
  );
};

export default CardList;
