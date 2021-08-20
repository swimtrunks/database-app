import React from "react";

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <div>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <div
                onClick={() => {
                  paginate(number);
                  window.scrollTo(0, 0);
                }}
                className="page-link"
              >
                {number}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
