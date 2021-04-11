import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../common/Button";

const PurchaseHistoryTableItem = ({ _item, _key }) => {
  const history = useHistory();
  return (
    <tr key={_key}>
      <td class="align-middle">
        <strong>{_item.checkout_date}</strong>
      </td>
      <td class="align-middle">
        <strong class="text-muted">{_item.client_name}</strong>
      </td>
      <td class="align-middle">
        <strong class="text-muted">{_item.address}</strong>
      </td>
      <td class="align-middle">
        <strong class="text-muted">{_item.phone}</strong>
      </td>
      <td class="align-middle">
        <Button
          _text="Detail"
          _onClick={() => history.push("/cart/" + _item.id)}
          _variant="info"
        ></Button>
      </td>
    </tr>
  );
};

export default PurchaseHistoryTableItem;
