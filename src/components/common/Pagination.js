import React from "react";
import PaginationMod from "react-js-pagination";
import settings from "../../configs/settings";
import styles from "./Pagination.module.scss";

const Pagination = ({ _totalItemsCount, _onChange, _activePage }) => {
  const handlePageChange = pageNumber => {
    _onChange(pageNumber);
  };

  return (
    <div className={styles["wrapper"]}>
      <PaginationMod
        activePage={parseInt(_activePage)}
        itemsCountPerPage={settings.perPage}
        totalItemsCount={_totalItemsCount}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        linkClass={styles["link"]}
        activeLinkClass={styles["active-link"]}
      />
    </div>
  );
};

export default Pagination;
