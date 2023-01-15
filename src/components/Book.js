import React, { useEffect, useReducer, useState } from "react";

const Book = ({ books, update }) => {
  // const [id, setId] = useState("");

  let arr = ["currentlyReading", "wantToRead", "read"];

  
  
  const handleChange = (e, book, old) => {
    let value = e.target.value;
    let bookId = book.id;
    update({ id: bookId, shelf: value, old: old });
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
                    backgroundImage: `url(${book?.imageLinks?.thumbnail})`,
                  }}
                ></div>
                <div className="book-shelf-changer">
                  <select
                    onChange={(e) => handleChange(e, book, book.shelf)}
                    defaultValue={book.shelf}
                  >
                    <option value="none" disabled>
                      Move to...
                    </option>
                    {arr.map((i) => (
                      <option key={i} value={i === book.shelf ? book.shelf : i}>
                        {i}
                      </option>
                    ))}
                    <option value="none">None</option>
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

export default Book;
