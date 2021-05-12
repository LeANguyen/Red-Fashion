import React from "react";
import Container from "../components/common/Container";
import Page from "../components/Page";
import PurchaseHistoryList from "../components/page/PurchaseHistoryPage/PurchaseHistoryList";

const PurchaseHistoryPage = () => {
  return (
    <Page>
      <div className="bg-1">
        <div className="container">
          <br></br>
          <br></br>
          <Container _title="Purchase History" _iconName="list" _hasHeader>
            <PurchaseHistoryList></PurchaseHistoryList>
          </Container>
          <br></br>
          <br></br>
        </div>
      </div>
    </Page>
  );
};

export default PurchaseHistoryPage;
