import React, { useEffect, useState } from "react";
import SearchBook from "./SearchBook";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";

const Search = ({ update, ele }) => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [books, setBooks] = useState([]);

  const handleInput = (e) => {
    if (e.length <= 0) {
      setBooks([]);
      setData("");
    } else {
      setData(e);
    }
  };

  useEffect(() => {
    const query = async () => {
      const res = await BooksAPI.search(data, 20);

      if (res.error) {
        setError("Search failed : No Value ");
        setTimeout(() => {
          setBooks([]);
          setData("");
          setError("");
        }, 1100);
      } else {
        let a = [];
        res.map((e) => {
          let resultsOne = ele.filter((book) => e.id === book.id);
          a.push(resultsOne);
        });
        a = a.filter((book) => book.length > 0).map((book) => book[0]);

        let query = [];
        a.map((a) => {
          let resultsOne = res.map((res) => (a.id === res.id ? a : res));
          query.push(...resultsOne);
        });
        let end = [...new Set(query)].splice(a.length + 1);
        setBooks(end);
      }
    };
    if (data?.length > 0) {
      query();
    }
  }, [data, data?.length, ele]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to={"/"}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={data}
            onChange={(e) => handleInput(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        {error ? (
          <h1>{error}</h1>
        ) : (
          <ol className="books-grid">
            <SearchBook books={books} update={update} />
          </ol>
        )}
      </div>
    </div>
  );
};

export default Search;
