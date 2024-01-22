"use client";

import ss from "./table.module.scss";
import { listData } from "@/common/userData/listData";
import { columnsData } from "@/common/userData/columnsData";
import ReactPaginate from "react-paginate";
import React, { useState } from "react";

export const Table = () => {

const[postPerPage,setPostPerPage] = useState(8)



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
            {listData.map((list) => (
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
      </div>
    </>
  );
};
