"use client";
import React from "react";
import ss from "./pagination.module.scss";
const Pagination = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            className={page == currentPage ? ss.active : ss.simple}
            key={index}
            onClick={() => {
              setCurrentPage(page);
            }}
          >
            {page}{" "}
          </button>
        );
      })}
    </div>
  );
};
export default Pagination;
