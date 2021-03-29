import React, { useEffect } from "react";
import Screen from "../components/Screen";
import CardList from "../components/CardList";
import useItemApi from "../api/useItemApi";
import useApi from "../hooks/useApi";
import FormLoader from "../components/form/FormLoader";
import FormText from "../components/form/FormText";

const ItemListPage = ({ match }) => {
  const category = match.params.category;
  const itemApi = useItemApi();
  const getAllItemByCategoryApi = useApi(itemApi.getAllItemByCategory);

  useEffect(() => {
    getAllItemByCategoryApi.request(category);
  }, [match.params.category]);

  return (
    <Screen>
      <div class="p-5 my-5 bg-dark">
        <h1 className="text-center">LATEST PRODUCT TEST</h1>

        {getAllItemByCategoryApi.isLoading && (
          <>
            <FormLoader></FormLoader>
            <FormText _variant="info" _text="Fetching data..."></FormText>
          </>
        )}
        {getAllItemByCategoryApi.data && (
          <CardList _data={getAllItemByCategoryApi.data}></CardList>
        )}
      </div>
    </Screen>
  );
};

export default ItemListPage;
