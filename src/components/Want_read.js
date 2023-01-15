import React from "react";
import Book from "./Book";

const Want = ({ books, update }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book books={books} update={update} />
        </ol>
      </div>
    </div>
  );
};

export default Want;
