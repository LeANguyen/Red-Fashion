import React from "react";

const CardList = ({ _data = [], _component }) => {
  return (
    <div className="card-columns">
      {_data.map((item, i) => {
        return <_component _item={item} _key={i}></_component>;
      })}
    </div>
  );
};

export default CardList;
