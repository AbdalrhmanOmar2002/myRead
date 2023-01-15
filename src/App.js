import "./App.css";
import Search from "./components/search";
import { Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import NotFound from "./NotFound";

function App() {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(null);

  const getAllBook = () => {
    const query = async () => {
      const res = await BooksAPI.getAll();
      setData(res);
    };
    query();
  };
  const updateShelf = () => {
    if (update !== null) {
      let id = update?.id;
      let shelf = update?.shelf;
      const query = async () => {
        const bet = await BooksAPI.get(id);
        const res = await BooksAPI.update(bet, shelf);
      };
      query();
    }
  };

  useEffect(() => {
    updateShelf();
  }, [update]);

  useEffect(() => {
    getAllBook();
  }, [data]);

  return (
    // <div className="app">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          exact
          path="/"
          element={<Body data={data} update={(e) => setUpdate(e)} />}
        />
        <Route
          path="/search"
          element={<Search update={(e) => setUpdate(e)} ele={data} />}
        />
      </Routes>
    // </div>
  );
}

export default App;
