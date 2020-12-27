import React from "react";
import Card from "./Card";
const CardList = ({ _data = [] }) => {
  return (
    <div className="card-columns">
      {_data.map((item, i) => {
        return <Card _item={item} _key={i}></Card>;
      })}
    </div>
  );
};

export default CardList;
