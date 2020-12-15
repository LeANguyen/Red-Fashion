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
          return (
            <Card _item={item} _key={i}></Card>
            // <div className="card" key={i}>
            //   <img
            //     className="card-img-top"
            //     src={shirt1}
            //     alt="Nothing here"
            //   ></img>
            //   <div className="card-body">
            //     <h4 className="card-title">${_data[i].item_name}</h4>
            //     <strong className="text-muted">- Origin: </strong>
            //     <label className="card-text">${_data[i].origin}</label>
            //     <br></br>
            //     <strong className="text-muted">- Price: </strong>
            //     <label className="card-text">${_data[i].price}</label>
            //     <br></br>
            //     <strong className="text-muted">- Quantity: </strong>
            //     <input
            //       type="number"
            //       // id="quantity_input${data[i].id}"
            //       step={1}
            //       max={9999}
            //       min={1}
            //       //   value={1}
            //       onChange={() => {
            //         console.log("quantityEdit(${data[i].id})");
            //       }}
            //       // oninput="this.value = Math.abs(this.value)"
            //     ></input>
            //     <br></br>
            //     <div class="mt-4">
            //       <button
            //         className="btn btn-info rounded-pill py-2 btn-block"
            //         type="submit"
            //         // id="detail_btn${data[i].id}"
            //         // onclick="toItemDetail(${data[i].id})"
            //       >
            //         Item Detail
            //       </button>
            //       <button
            //         className="btn btn-success rounded-pill py-2 btn-block"
            //         type="submit"
            //         // id="add_to_cart_btn${data[i].id}"
            //         // onclick="addToCart(${data[i].id})"
            //       >
            //         Add to Cart
            //       </button>
            //     </div>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
