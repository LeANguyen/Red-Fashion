import React from "react";
import Button from "../../common/Button";
import Input from "../../common/Input";
import Space from "../../common/Space";
import { Link, useHistory } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import * as itemApi from "../../../APIs/itemApi";
import baseURL from "../../../APIs/baseURL";

const ItemAdminRow = ({ _item }) => {
  const deleteItemApi = useApi(itemApi.deleteItem);
  const history = useHistory();

  const deleteItemApiHandling = async id => {
    const response = await deleteItemApi.request(id);
    if (response.ok) {
      history.go(0);
    }
  };

  return (
    <div className="row align-items-center">
      <div className="col-4 align-middle">
        <img
          src={baseURL + "/images/store/item-" + _item.id + ".png"}
          width={100}
          className="rounded"
        ></img>
        <div className="ml-3 d-inline-block align-middle">
          <strong className="text-white d-block">
            <Link className="text-yellow-w" to={"/item_detail/" + _item.id}>
              {_item.item_name}
            </Link>
          </strong>
          <strong className="text-green">{_item.id}</strong>
          <br></br>
          <strong className="text-pink">{_item.category}</strong>
          <br></br>
          <strong className="text-pink">{"$" + _item.price}</strong>
        </div>
      </div>

      <div className="col-2"></div>

      <div className="col-2 text-center"></div>

      <div className="col-4">
        <div className="d-flex justify-content-around">
          <Button
            _iconName="shopping-cart"
            _className="btn-yellow"
            _onClick={() => {
              history.push("/admin?id=" + _item.id);
              // history.go(0);
            }}
          >
            Update
          </Button>
          <Button
            _iconName="trash"
            _className="btn-pink"
            _onClick={() => deleteItemApiHandling(_item.id)}
            _loading={deleteItemApi.loading}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default ItemAdminRow;
