import React, { useEffect } from "react";
import TableHeader from "./TableHeader";

const Table = ({ _data, _headers = [], _component }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <TableHeader _headers={_headers}></TableHeader>
        </thead>
        <tbody>
          {_data !== [] ? (
            _data.map((item, i) => {
              return <_component _item={item} _key={i}></_component>;
            })
          ) : (
            <p className="text-muted text-center">
              There is no item to display!!!
            </p>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
