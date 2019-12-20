import React from "react";
import { animated } from "react-spring";

const AlgorithmDisplayBar = ({ value, style }) => {
  return (
    <animated.div className="bar" style={style}>
      <div className="cell">
        <div className="details" style={{ backgroundColor: "orange" }}>
          <h5 className="label">{value}</h5>
        </div>
      </div>
    </animated.div>
  );
};

export default AlgorithmDisplayBar;
