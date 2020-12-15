import React from "react";

const SocialMediaButton = ({ _iconName, _href }) => {
  return (
    <a
      target="_blank"
      href={_href}
      className={
        "bg-white text-dark text-decoration-none border rounded p-2 m-4 fa fa-2x fa-" +
        _iconName
      }
    ></a>
  );
};

export default SocialMediaButton;
