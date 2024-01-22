"use client";

import ss from "./table.module.scss";
import Pagination from "@/common/pagination";
import { listData } from "@/common/userData/listData";
import { columnsData } from "@/common/userData/columnsData";
import React, { useState } from "react";

export const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = listData.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className={ss.container}>
        <h1>All Customers</h1>
        <h3>Active Members</h3>
        <table className={ss.table}>
          <thead>
            <tr>
              {columnsData.map((columns) => (
                <th key={columns.headerName}>{columns.headerName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentPost.map((list) => (
              <tr key={list.id}>
                <td>{list.name}</td>
                <td>{list.company}</td>
                <td>{list.phone}</td>
                <td>{list.email}</td>
                <td>{list.country}</td>
                <td>{list.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          totalPosts={listData.length}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};
