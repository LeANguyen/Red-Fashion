import React from "react";
import { Link } from "react-router-dom";
import Space from "../../common/Space";

const NotFound = () => (
  <div>
    <h1 className="text-white">404 - Not Found!</h1>
    <h1 className="text-white">
      <i className="fa fa-question-circle fa-5x"></i>
    </h1>
    <br></br>
    <Link className="btn-yellow" to="/">
      <i className="fa fa-home"></i>
      <Space></Space>
      <Space></Space>Go Home
    </Link>
  </div>
);

export default NotFound;
