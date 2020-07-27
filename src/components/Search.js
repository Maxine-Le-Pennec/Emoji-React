import React from "react";
import emot from "../emot.png";

const Search = ({ search, setSearch }) => {
  return (
    <>
      <img src={emot} alt="title"></img>
      <input
        type="text"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          console.log(event.target.value);
        }}
      />
    </>
  );
};

export default Search;
