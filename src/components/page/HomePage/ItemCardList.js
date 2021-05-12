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
import { decreaseTotalPrice } from "../../../actions/cartActions";

const ItemCardList = () => {
  const history = useHistory();

  const location = useLocation();
  const query = querySearch(location.search);
  const typeQ = query.type;

  const itemNameQ = query["item-name"]
    ? decodeURIComponent(query["item-name"])
    : "";
  const originQ = query.origin ? query.origin : "";
  const categoryQ = query.category ? query.category : "";
  const priceFromQ = query["price-from"] ? query["price-from"] : "";
  const priceToQ = query["price-to"] ? query["price-to"] : "";
  const pageQ = query.page ? query.page : 1;

  const [items, setItems] = useState([]);
  const [trueTotal, setTrueTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const getItemsApi = useApi(itemApi.getItems);
  const searchItemsApi = useApi(itemApi.searchItems);

  const getItemsHandling = async (skip, limit) => {
    let response = [];
    setLoading(true);
    setError(false);
    setSuccess(false);

    if (typeQ === "search") {
      response = await searchItemsApi.request(
        itemNameQ,
        categoryQ,
        originQ,
        priceFromQ,
        priceToQ,
        (pageQ - 1) * settings.perPage,
        settings.perPage
      );
    } else {
      response = await getItemsApi.request(
        (pageQ - 1) * settings.perPage,
        settings.perPage
      );
    }

    setLoading(false);

    if (response.ok) {
      setItems(response.data.rows);
      setTrueTotal(response.data.count);
      setSuccess(true);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    getItemsHandling();
  }, [typeQ, itemNameQ, categoryQ, originQ, priceFromQ, priceToQ, pageQ]);

  return (
    <div>
      <strong className="text-yellow-g text-xl">LATEST ITEMS</strong>
      <br></br>
      <br></br>
      {loading && <Loader></Loader>}
      {success && items.length !== 0 && (
        <>
          <CardList _data={items} _component={ItemCard}></CardList>
          <br></br>
          <Pagination
            _onChange={number => history.push(`/?page=${number}`)}
            _activePage={pageQ}
            _totalItemsCount={trueTotal}
          ></Pagination>
        </>
      )}
    </div>
  );
};

export default ItemCardList;
