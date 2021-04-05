import React, { useState } from "react";
import Space from "./Space";

const Container = ({
  children,
  _title,
  _hasHeader,
  _iconName,
  _headerVariant,
  _titleVariant,
  _bodyVariant
}) => {
  return (
    <div className="card shadow-sm">
      {/* header */}
      {_hasHeader && (
        <div
          className={[
            "card-header",
            _headerVariant ? "bg-" + _headerVariant : ""
          ].join(" ")}
        >
          <button className="btn shadow-none">
            <h5
              className={[
                "mb-0",
                _titleVariant ? "text-" + _titleVariant : ""
              ].join(" ")}
            >
              <i className={"fa fa-" + _iconName}></i>
              <Space></Space>
              <Space></Space>
              {_title}
            </h5>
          </button>
        </div>
      )}

      {/* body */}
      <div
        className={["card-body", _bodyVariant ? "bg-" + _bodyVariant : ""].join(
          " "
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
