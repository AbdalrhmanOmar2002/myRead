import React from "react";
import Book from "./Book";

const Read = ({ books, update }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book books={books} update={update} />
        </ol>
      </div>
    </div>
  );
};

export default Read;
