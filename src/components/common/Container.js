import React, { useState } from "react";
import Space from "./Space";
import ContainerCss from "./Container.module.scss";

const Container = ({ children, _title, _hasHeader, _iconName }) => {
  return (
    <div className={`card ${ContainerCss["body"]}`}>
      {/* header */}
      {_hasHeader && (
        <div className={`card-header ${ContainerCss["header"]}`}>
          <strong className="text-white text-xl">
            <i className={"fa fa-" + _iconName}></i>
            <Space></Space>
            <Space></Space>
            {_title}
          </strong>
        </div>
      )}

      {/* body */}
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Container;
