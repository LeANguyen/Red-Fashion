import React from "react";
import Screen from "../components/Screen";
import CardList from "../components/CardList";
const ItemListScreen = () => {
  const data = [
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
  ];
  return (
    <Screen>
      <div class="container" style={{ padding: 1, textAlign: "center" }}>
        <h2 id="type_label" style={{ color: "white" }}></h2>
        <CardList data={data}></CardList>
      </div>
    </Screen>
  );
};

export default ItemListScreen;
