import React, { useEffect } from "react";
import useApi from "../../../hooks/useApi";
import * as itemApi from "../../../APIs/itemApi";
import ItemAdminRow from "./ItemAdminRow";

const ItemAdminList = () => {
  useEffect(() => {
    getItemsApi.request(0, 20);
  }, []);

  const getItemsApi = useApi(itemApi.getItems);
  return (
    <div>
      {getItemsApi.success &&
        getItemsApi.data.map((item, i) => {
          return <ItemAdminRow _item={item}></ItemAdminRow>;
        })}
    </div>
  );
};

export default ItemAdminList;
