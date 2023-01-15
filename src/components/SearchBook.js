import React, { useEffect, useState } from "react";

const SearchBook = ({ books, update }) => {
  const [selected, setSelected] = useState([]);
  // const [id, setId] = useState("");

  let arr = ["currentlyReading", "wantToRead", "read"];

  const handleChange = (e, book) => {
    let value = e.target.value;
    let bookId = book.id;
    update({ id: bookId, shelf: value });
  };

  return (
    <>
      {books.length > 0 &&
        books?.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 192,
                    backgroundImage: `url(${book?.imageLinks?.smallThumbnail})`,
                  }}
                ></div>
                <div className="book-shelf-changer">
                  <select
                    onChange={(e) => handleChange(e, book, book.shelf)}
                    defaultValue={book?.shelf ? book?.shelf : "move"}
                  >
                    <option value="move" disabled>
                      Move to...
                    </option>

                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              {book.authors?.map((a, i) => (
                <div className="book-authors" key={i}>
                  {a}
                </div>
              ))}
            </div>
          </li>
        ))}
    </>
  );
};

export default SearchBook;
