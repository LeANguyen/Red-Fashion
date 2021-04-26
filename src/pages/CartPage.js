import React from "react";
import Container from "../components/common/Container";

import Page from "../components/Page";

import ItemCartList from "../components/page/CartPage/ItemCartList";

const CartPage = () => {
  return (
    <Page>
      <div className="bg-1">
        <br></br>
        <br></br>
        <div className="container">
          <Container
            _hasHeader
            _iconName="shopping-cart"
            _title="Shopping Cart"
          >
            <ItemCartList></ItemCartList>
            <br></br>
          </Container>
        </div>
        <br></br>
        <br></br>
      </div>
    </Page>
  );
};

export default CartPage;
