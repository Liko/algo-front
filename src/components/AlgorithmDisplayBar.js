import React from "react";
import { animated } from "react-spring";

const AlgorithmDisplayBar = ({ item, color, style }) => {
  return (
    <animated.div className="bar" style={style}>
      <div className="cell">
        <div
          className="details"
          style={{
            backgroundColor: color
          }}
        >
          <h5 className="label">{item.value}</h5>
        </div>
      </div>
    </animated.div>
  );
};

export default AlgorithmDisplayBar;
