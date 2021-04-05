import React, { useState } from "react";
import AppPagination from "./AppPagination";
import Table from "./Table";
import settings from "../../config/settings";

const DataTable = ({ _data, _headers = [], _component }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = settings.perPage;
  // logic for filter the data to be displayed
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const currentItems = _data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <Table
        _component={_component}
        _data={currentItems}
        _headers={_headers}
      ></Table>

      {/* pagination */}
      <AppPagination
        _totalItemsCount={_data.length}
        _perPage={perPage}
        _activePage={currentPage}
        _onChange={n => setCurrentPage(n)}
      ></AppPagination>
    </>
  );
};

export default DataTable;
