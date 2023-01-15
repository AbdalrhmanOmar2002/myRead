import React from "react";
import Currently from "./Currently_read";
import Want from "./Want_read";
import Read from "./Read";
const Lists = ({ data, update }) => {
  let Currently_Reading = data.filter(
    (item) => item.shelf === "currentlyReading"
  );

  let Want_to_Read = data.filter((item) => item.shelf === "wantToRead");
  let Reads = data.filter((item) => item.shelf === "read");
  return (
    <div>
      <Currently books={Currently_Reading} update={update} />

      <Want books={Want_to_Read} update={update} />

      <Read books={Reads} update={update} />
    </div>
  );
};

export default Lists;
