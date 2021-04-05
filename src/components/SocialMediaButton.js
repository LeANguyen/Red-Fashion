import React from "react";

const SocialMediaButton = ({ _iconName, _href }) => {
  return (
    <a
      target="_blank"
      href={_href}
      className={"bg-light text-dark border rounded p-2"}
    >
      <i className={"fa fa-2x fa-" + _iconName}></i>
    </a>
  );
};

export default SocialMediaButton;
