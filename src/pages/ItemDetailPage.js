import React, { useState, useEffect } from "react";
import * as itemApi from "../APIs/itemApi";
import useApi from "../hooks/useApi";

import ItemDetailContainer from "../components/page/ItemDetailPage/ItemDetailContainer";
import Loader from "../components/common/Loader";
import Page from "../components/Page";
import ErrorMessage from "../components/ErrorMessage";
import Container from "../components/common/Container";
import ItemCard from "../components/card/ItemCard";
import CardList from "../components/card/CardList";

const ItemDetailPage = ({ match }) => {
  const id = match.params.id;
  const getItemByIdApi = useApi(itemApi.getItemById);

  useEffect(() => {
    getItemByIdApi.request(id);
  }, []);

  return (
    <Page>
      <div className="bg-dark">
        <br></br>
        <br></br>
        <div className="container">
          {getItemByIdApi.success && getItemByIdApi.data[0] !== undefined && (
            <>
              {getItemByIdApi.loading && <Loader></Loader>}
              {getItemByIdApi.error && (
                <ErrorMessage
                  _onClick={() => getItemByIdApi.request(id)}
                ></ErrorMessage>
              )}
              {getItemByIdApi.data[0] && (
                <>
                  <ItemDetailContainer
                    _item={getItemByIdApi.data[0]}
                  ></ItemDetailContainer>

                  <br></br>
                  <br></br>
                  <Container _hasHeader _title="Description" _iconName="tag">
                    <span className="text-white">
                      {getItemByIdApi.data[0].description}
                    </span>
                  </Container>
                </>
              )}
            </>
          )}
        </div>
        <br></br>
        <br></br>
      </div>
    </Page>
  );
};

export default ItemDetailPage;
