import React, { useEffect } from "react";
import useApi from "../../../hooks/useApi";
import * as itemApi from "../../../APIs/itemApi";
import ItemAdminRow from "./ItemAdminRow";
import settings from "../../../configs/settings";
import Pagination from "../../common/Pagination";
import querySearch from "stringquery";
import { useLocation, useHistory } from "react-router-dom";

const ItemAdminList = () => {
  const history = useHistory();
  const location = useLocation();
  const query = querySearch(location.search);
  const pageQ = query.page ? query.page : 1;

  useEffect(() => {
    getItemsApi.request(settings.perPage * (pageQ - 1), settings.perPage);
  }, [pageQ]);

  const getItemsApi = useApi(itemApi.getItems);
  return (
    <div>
      {getItemsApi.success &&
        getItemsApi.data["rows"].map((item, i) => {
          return (
            <>
              <br></br>
              <ItemAdminRow _item={item}></ItemAdminRow>
              <div className="divider-dark"></div>
            </>
          );
        })}
      <br></br>
      <Pagination
        _totalItemsCount={getItemsApi.data["count"]}
        _activePage={pageQ}
        _onChange={number => history.push("/admin?page=" + number)}
      ></Pagination>
    </div>
  );
};

export default ItemAdminList;
