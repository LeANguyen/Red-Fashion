import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";

import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

// const $ = require("jquery");
// $.DataTable = require("datatables.net");

const DataTable = ({ _data, _headers = [], _component, _id }) => {
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
    $("#" + _id).DataTable();
  }, []);

  return (
    <div className="table-responsive">
      <table id={_id} className="table">
        <thead>
          <TableHeader _headers={_headers}></TableHeader>
        </thead>

        <tbody>
          {_data.map((item, i) => {
            return <_component _item={item} _key={i}></_component>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
