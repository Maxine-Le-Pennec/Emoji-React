import React from "react";

const Lines = ({ elem }) => {
  // console.log(elem.symbol);

  return (
    <p className="emoji-container">
      <span> {elem.symbol}</span>
      <span>{elem.title}</span>
    </p>
  );
};

export default Lines;
