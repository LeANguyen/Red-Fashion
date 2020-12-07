import React, { useState } from "react";

const usePagination = data => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Logic for displaying items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = event => {
    setCurrentPage(Number(event.target.id));
  };

  const pageNumbers = [];
  for (let number = 1; number <= data.length / itemsPerPage + 1; number++) {
    if (number == currentPage) {
      pageNumbers.push(
        <li className="page-item active">
          <a
            className="page-link"
            key={number}
            id={number}
            onClick={event => handleClick(event)}
          >
            {number}
          </a>
        </li>
      );
    } else {
      pageNumbers.push(
        <li className="page-item">
          <a
            className="page-link"
            key={number}
            id={number}
            onClick={event => handleClick(event)}
          >
            {number}
          </a>
        </li>
      );
    }
  }
  return { pageNumbers, currentItems };
};

export default usePagination;
