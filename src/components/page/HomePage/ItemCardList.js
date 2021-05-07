import React, { useState, useEffect } from "react";
import * as itemApi from "../../../APIs/itemApi";
import useApi from "../../../hooks/useApi";
import Loader from "../../common/Loader";
import CardList from "../../card/CardList";
import Button from "../../common/Button";
import ItemCard from "../../card/ItemCard";
import Pagination from "../../common/Pagination";
import { useLocation, useHistory } from "react-router-dom";
import querySearch from "stringquery";
import settings from "../../../configs/settings";

const ItemCardList = () => {
  const history = useHistory();

  const location = useLocation();
  const query = querySearch(location.search);
  const typeQ = query.type;
  const searchQ = query.search ? query.search.replace("%20", " ") : "";
  const priceQ = query.price ? query.price : "";
  const areaQ = query.area ? query.area : "";
  const pageQ = query.page ? query.page : 1;
  const statusQ = query.status ? query.status : 0;
  const kindQ = query.kind ? query.kind : 0;
  const [items, setItems] = useState([]);

  const getItemsApi = useApi(itemApi.getItems);
  const getItemsHandling = async (skip, limit) => {
    const response = await getItemsApi.request(skip, limit);
    if (response.ok) {
      setItems(response.data["list"]);
    }
  };

  useEffect(() => {
    getItemsHandling(settings.perPage * (pageQ - 1), settings.perPage);
  }, [pageQ]);

  return (
    <div>
      <h2 className="text-yellow-g text-center">LATEST ITEMS</h2>
      <br></br>
      {getItemsApi.loading && <Loader></Loader>}
      {getItemsApi.success && items.length !== 0 && (
        <>
          <CardList _data={items} _component={ItemCard}></CardList>
          <br></br>
          {/* <Button
            _onClick={() => {
              getItemsHandling(items.length, 1);
            }}
            _block
            _className={`btn-yellow btn-block`}
            _loading={getItemsApi.loading}
          >
            Load More
          </Button> */}
          <Pagination
            _onChange={number => history.push(`/?page=${number}`)}
            _activePage={pageQ}
            _totalItemsCount={getItemsApi.data["count"]}
          ></Pagination>
        </>
      )}
    </div>
  );
};

export default ItemCardList;
