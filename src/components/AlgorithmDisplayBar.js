import React from "react";

const AlgorithmDisplayBar = ({ value }) => {
  return (
    <div
      style={{
        backgroundColor: "orange",
        display: "flex",
        width: value * 10,
        height: "20%",
        margin: "0.1em"
      }}
    >
      {value}
    </div>
  );
};

export default AlgorithmDisplayBar;
