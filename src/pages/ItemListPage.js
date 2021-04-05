import React, { useEffect } from "react";
import CardList from "../components/card/CardList";
import itemApi from "../api/itemApi";
import useApi from "../hooks/useApi";
import Page from "../components/temp/Page";
import AppLoader from "../components/common/AppLoader";
import ItemCard from "../components/card/ItemCard";

const ItemListPage = ({ match }) => {
  const category = match.params.category;
  const getItemsByCategoryApi = useApi(itemApi.getItemsByCategory);

  useEffect(async () => {
    await getItemsByCategoryApi.request(category);
  }, [match.params.category]);

  return (
    <Page>
      <div class="p-5 my-5 bg-dark">
        <h1 className="text-center">LATEST ITEMS</h1>

        {getItemsByCategoryApi.loading && <AppLoader></AppLoader>}
        {getItemsByCategoryApi.data && (
          <CardList
            _data={getItemsByCategoryApi.data}
            _component={ItemCard}
          ></CardList>
        )}
      </div>
    </Page>
  );
};

export default ItemListPage;
