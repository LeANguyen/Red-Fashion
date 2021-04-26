import React from "react";
import Container from "../components/common/Container";
import Page from "../components/Page";
import ItemEdit from "../components/page/AdminPage/ItemEdit";
import ItemAdminList from "../components/page/AdminPage/ItemAdminList";

const AdminPage = () => {
  return (
    <Page>
      <div className="bg-1">
        <div className="container">
          <br></br>
          <br></br>
          <Container _iconName="pencil" _hasHeader _title="Create/Update Item">
            <ItemEdit></ItemEdit>
          </Container>
          <br></br>
          <br></br>
          <Container _iconName="list-alt" _hasHeader _title="Item List">
            <ItemAdminList></ItemAdminList>
          </Container>
          <br></br>
          <br></br>
        </div>
      </div>
    </Page>
  );
};

export default AdminPage;
