import React, { useState, useEffect } from "react";
import * as itemApi from "../../../APIs/itemApi";
import useApi from "../../../hooks/useApi";
import Loader from "../../common/Loader";
import CardList from "../../card/CardList";
import Button from "../../common/Button";
import ItemCard from "../../card/ItemCard";

const ItemCardList = () => {
  const [items, setItems] = useState([]);

  const getItemsApi = useApi(itemApi.getItems);

  const getItemsHandling = async (skip, limit) => {
    const newItems = [...items];
    const response = await getItemsApi.request(skip, limit);
    if (response.ok) {
      setItems(newItems.concat(response.data));
    }
  };

  useEffect(() => {
    getItemsHandling(items.length, 3);
  }, []);

  return (
    <div>
      <h2 className="text-yellow-g text-center">LATEST ITEMS</h2>
      <br></br>
      {getItemsApi.loading && <Loader></Loader>}
      {getItemsApi.success && items.length !== 0 && (
        <>
          <CardList _data={items} _component={ItemCard}></CardList>
          <br></br>
          <Button
            _onClick={() => {
              getItemsHandling(items.length, 1);
            }}
            _block
            _className={`btn-yellow btn-block`}
            _loading={getItemsApi.loading}
          >
            Load More
          </Button>
        </>
      )}
    </div>
  );
};

export default ItemCardList;
