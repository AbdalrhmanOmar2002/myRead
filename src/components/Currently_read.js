import React from "react";
import Book from "./Book";

const Currently = ({ books, update }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book books={books} update={update} />
        </ol>
      </div>
    </div>
  );
};

export default Currently;
