import React, { useState, useEffect } from "react";
import itemApi from "../api/itemApi";
import useApi from "../hooks/useApi";

import ItemDetailContainer from "../components/ItemDetailContainer";
import AppLoader from "../components/common/AppLoader";
import Page from "../components/temp/Page";
import ErrorMessage from "../components/temp/ErrorMessage";
import AppContainer from "../components/common/AppContainer";
const ItemDetailPage = ({ match }) => {
  const id = match.params.id;
  const getItemByIdApi = useApi(itemApi.getItemById);

  useEffect(() => {
    getItemByIdApi.request(id);
  }, []);

  return (
    <Page>
      <div className="container">
        <AppContainer
          _title={getItemByIdApi.data[0].item_name}
          _hasHeader
          _titleVariant="light"
          _headerVariant="dark"
        >
          {getItemByIdApi.loading && <AppLoader></AppLoader>}
          {getItemByIdApi.error && (
            <ErrorMessage
              _onClick={() => getItemByIdApi.request(id)}
            ></ErrorMessage>
          )}
          {getItemByIdApi.data[0] && (
            <ItemDetailContainer
              _item={getItemByIdApi.data[0]}
            ></ItemDetailContainer>
          )}
        </AppContainer>
      </div>
    </Page>
  );
};

export default ItemDetailPage;
