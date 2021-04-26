import React, { useState } from "react";
import Space from "./Space";

const Accordion = ({
  children,
  _id,
  _title,
  _headerVariant,
  _titleVariant,
  _bodyVariant,
  _className
}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={["card shadow-sm", _className].join(" ")}>
      {/* header */}
      <div
        className={[
          "card-header",
          _headerVariant ? "bg-" + _headerVariant : ""
        ].join(" ")}
      >
        <button
          className="btn"
          data-toggle="collapse"
          data-target={"#" + _id}
          onClick={() => setCollapsed(!collapsed)}
        >
          <h5
            className={[
              "mb-0",
              _titleVariant ? "text-" + _titleVariant : ""
            ].join(" ")}
          >
            {collapsed ? (
              <i className={"fa fa-chevron-down"}></i>
            ) : (
              <i className={"fa fa-chevron-up"}></i>
            )}
            <Space></Space>
            <Space></Space>
            {_title}
          </h5>
        </button>
      </div>

      {/* body */}
      <div id={_id} className="collapse show">
        <div
          className={[
            "card-body",
            _bodyVariant ? "bg" + _bodyVariant : ""
          ].join(" ")}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
