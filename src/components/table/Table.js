import React from "react";
import TableHeader from "./TableHeader";
import usePagination from "./usePagination";
import Pagination from "./Pagination";

const Table = ({ _data, _headers = [], _component }) => {
  const pagination = usePagination(_data);

  return (
    <div>
      <div className="table-responsive">
        {_data.length === 0 && (
          <p className="text-center m-5">There is no item in the cart</p>
        )}
        {_data.length !== 0 && (
          <>
            <table className="table">
              <thead>
                <TableHeader _headers={_headers}></TableHeader>
              </thead>

              <tbody>
                {pagination.currentItems.map((item, i) => {
                  return <_component _item={item} _key={i}></_component>;
                })}
              </tbody>
            </table>

            <Pagination _pageNumbers={pagination.pageNumbers}></Pagination>
          </>
        )}
      </div>
    </div>
  );
};

export default Table;
