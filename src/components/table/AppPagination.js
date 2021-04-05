import React from "react";
import Pagination from "react-js-pagination";
import settings from "../../config/settings";
// import "./AppPagination.css";

const AppPagination = ({
  _totalItemsCount,
  _onChange,
  _activePage,
  _perPage
}) => {
  const handlePageChange = pageNumber => {
    _onChange(pageNumber);
  };

  return (
    <div className="pagination justify-content-center">
      <Pagination
        activePage={_activePage}
        itemsCountPerPage={settings.perPage}
        totalItemsCount={_totalItemsCount}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
      />
    </div>
  );
};

export default AppPagination;
