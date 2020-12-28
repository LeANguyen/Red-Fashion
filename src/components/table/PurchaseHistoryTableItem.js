import React from "react";
import { useHistory } from "react-router-dom";
import FormButton from "../form/FormButton";

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
        <FormButton
          _text="Detail"
          _onClick={() => history.push("/cart/" + _item.id)}
          _variant="info"
        ></FormButton>
      </td>
    </tr>
  );
};

export default PurchaseHistoryTableItem;
