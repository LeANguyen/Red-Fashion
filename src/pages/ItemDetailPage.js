import React, { useState, useEffect } from "react";
import Screen from "../components/Screen";
import useItemApi from "../api/useItemApi";
import useApi from "../hooks/useApi";

import ItemDetailContainer from "../components/ItemDetailContainer";

const ItemDetailPage = ({ match }) => {
  const id = match.params.id;
  const itemApi = useItemApi();
  const getItemByIdApi = useApi(itemApi.getItemById);

  useEffect(() => {
    getItemByIdApi.request(id);
  }, []);

  return (
    <Screen>
      <div className="p-5">
        {getItemByIdApi.error && <p>Loading...</p>}
        {getItemByIdApi.error && (
          <p>Sorry there is a connection error! Please reload the page.</p>
        )}
        {getItemByIdApi.data[0] && (
          <ItemDetailContainer
            _item={getItemByIdApi.data[0]}
          ></ItemDetailContainer>
        )}
      </div>
    </Screen>
  );
};

export default ItemDetailPage;
