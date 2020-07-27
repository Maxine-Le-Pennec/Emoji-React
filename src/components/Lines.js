import React from "react";

const Lines = ({ elem }) => {
  // console.log(elem.symbol);

  return (
    <p>
      {elem.symbol}
      {elem.title}
    </p>
  );
};

export default Lines;
