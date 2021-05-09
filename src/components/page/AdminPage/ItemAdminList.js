import React, { useEffect } from "react";
import useApi from "../../../hooks/useApi";
import * as itemApi from "../../../APIs/itemApi";
import ItemAdminRow from "./ItemAdminRow";
import settings from "../../../configs/settings";

const ItemAdminList = () => {
  useEffect(() => {
    getItemsApi.request(0, settings.perPage);
  }, []);

  const getItemsApi = useApi(itemApi.getItems);
  return (
    <div>
      {getItemsApi.success &&
        getItemsApi.data["list"].map((item, i) => {
          return <ItemAdminRow _item={item}></ItemAdminRow>;
        })}
    </div>
  );
};

export default ItemAdminList;
