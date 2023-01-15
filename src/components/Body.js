import React from "react";
import Currently from "./Currently_read";
import Want from "./Want_read";
import Read from "./Read";
import { Link } from "react-router-dom";
import Lists from "./Lists";

const Body = ({ data, update }) => {

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Lists data={data} update={update} />
      </div>
      <div className="open-search">
        <Link to={"/search"}>Add a book</Link>
      </div>
    </div>
  );
};

export default Body;
