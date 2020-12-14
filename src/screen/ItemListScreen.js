import React, { useEffect } from "react";
import Screen from "../components/Screen";
import CardList from "../components/CardList";
import useItemApi from "../api/useItemApi";
import useApi from "../hooks/useApi";
const ItemListScreen = ({ match }) => {
  const category = match.params.category;
  const itemApi = useItemApi();
  const getAllItemByCategoryApi = useApi(itemApi.getAllItemByCategory);

  useEffect(() => {
    getAllItemByCategoryApi.request(category);
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
        {getAllItemByCategoryApi.data && (
          <CardList _data={getAllItemByCategoryApi.data}></CardList>
        )}
      </div>
    </Screen>
  );
};

export default ItemListScreen;
