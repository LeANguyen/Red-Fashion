import React from "react";

const Container = ({ children }) => {
  return (
    <div className="p-3 p-sm-5 my-5 mx-lg-5 bg-white rounded shadow-lg">
      {children}
    </div>
  );
};

export default Container;
