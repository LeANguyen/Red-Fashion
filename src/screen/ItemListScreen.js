import React, { useEffect } from "react";
import Screen from "../components/Screen";
import CardList from "../components/CardList";
import useItemApi from "../api/useItemApi";
import useApi from "../hooks/useApi";
const ItemListScreen = () => {
  const itemApi = useItemApi();
  const getAllItemByCategoryApi = useApi(itemApi.getAllItemByCategory);

  useEffect(() => {
    getAllItemByCategoryApi.request("Shirt");
  }, []);

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
      <div class="container">
        <h2 id="type_label"></h2>
        <CardList _data={getAllItemByCategoryApi.data}></CardList>
      </div>
    </Screen>
  );
};

export default ItemListScreen;
