import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

// const $ = require("jquery");
// $.DataTable = require("datatables.net");

const DataTable = ({ _data, _headers = [], _component }) => {
  const [data, setData] = useState(_data);

  const reloadTableData = data => {
    // const table = $(".data-table-wrapper")
    //   .find("table")
    //   .DataTable();
    // table.clear();
    // table.rows.add(data);
    // table.draw();

    const table = $("#dataTable").DataTable();
    table.clear();
    // table.ajax.reload(data, true);
    // table.clear();
    // table.rows.add(data);
    table.draw();
    // table.clear();
  };

  useEffect(() => {
    $("#dataTable").DataTable();
  }, []);

  return (
    <div className="table-responsive">
      <button
        className="btn btn-danger"
        onClick={() => reloadTableData([...data])}
      >
        Reload Table
      </button>
      <table id="dataTable" className="table">
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
                  //   const array = [...data];
                  //   console.log(array);
                  //   console.log("Removed " + array[i].item_name + " Index " + i);
                  //   array.splice(i, 1);
                  //   console.log(array);
                  setData(data.filter((item, id) => id !== i));
                  //   reloadTableData(data);
                }}
              ></_component>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
