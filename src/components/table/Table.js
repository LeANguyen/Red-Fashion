import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import usePagination from "./usePagination";
import Pagination from "./Pagination";

const Table = ({ _data, _headers = [], _component }) => {
  // const pagination = usePagination(data);
  const [data, setData] = useState(_data);

  return (
    <div>
      <div className="table-responsive">
        {data.length === 0 && (
          <p className="text-center m-5">There is no item in the cart</p>
        )}
        {data.length !== 0 && (
          <>
            <table className="table">
              <thead>
                <TableHeader _headers={_headers}></TableHeader>
              </thead>

              <tbody>
                {data.map((item, i) => {
                  return (
                    <_component
                      _item={item}
                      _key={i}
                      _onClickRemove={() => {
                        const array = [...data];
                        array.splice(i, 1);

                        setData(array);
                      }}
                    ></_component>
                  );
                })}
              </tbody>
            </table>

            {/* <Pagination _pageNumbers={pagination.pageNumbers}></Pagination> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Table;
