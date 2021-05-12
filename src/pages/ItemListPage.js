import React, { useEffect } from "react";
import CardList from "../components/card/CardList";
import * as itemApi from "../APIs/itemApi";
import useApi from "../hooks/useApi";
import Page from "../components/Page";
import Loader from "../components/common/Loader";
import ItemCard from "../components/card/ItemCard";

const ItemListPage = ({ match }) => {
  const category = match.params.category;
  const getItemsByCategoryApi = useApi(itemApi.getItemsByCategory);

  useEffect(async () => {
    await getItemsByCategoryApi.request(category);
  }, [match.params.category]);

  return (
    <Page>
      <div className="bg-dark">
        <div class="container">
          <br></br>
          <strong className="text-yellow-g text-xl">LATEST ITEMS</strong>
          <br></br>
          <br></br>
          {getItemsByCategoryApi.loading && <Loader></Loader>}
          {getItemsByCategoryApi.data && (
            <CardList
              _data={getItemsByCategoryApi.data}
              _component={ItemCard}
            ></CardList>
          )}
          <br></br>
        </div>
      </div>
    </Page>
  );
};

export default ItemListPage;
