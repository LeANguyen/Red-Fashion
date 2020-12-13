import React, { useState, useEffect } from "react";
import Screen from "../components/Screen";
import useItemApi from "../api/useItemApi";
import useApi from "../hooks/useApi";
import ItemDetailContainer from "../components/ItemDetailContainer";

const ItemDetailScreen = () => {
  const itemApi = useItemApi();
  const getItemByIdApi = useApi(itemApi.getItemById);

  useEffect(() => {
    getItemByIdApi.request(2);
  }, []);

  return (
    <Screen>
      <div className="p-5">
        {getItemByIdApi.data[0] && (
          <ItemDetailContainer
            _item={getItemByIdApi.data[0]}
          ></ItemDetailContainer>
        )}
      </div>
    </Screen>
  );
};

export default ItemDetailScreen;
