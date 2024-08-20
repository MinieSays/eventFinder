import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); ++i) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button key={index} onClick={() => setCurrentPage(page)} className={page == currentPage ? "active__page search__results--pagination" : 'search__results--pagination'}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
