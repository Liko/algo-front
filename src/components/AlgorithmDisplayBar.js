import React from "react";
import { animated } from "react-spring";

const AlgorithmDisplayBar = ({ item, color, style }) => {
  const showCorrectBars = () => {
    const developmentMode = false;
    return developmentMode
      ? `${item.value} ${item.status} / ✓: ${String(item.isSorted)}`
      : item.value;
  };

  return (
    <animated.div className="bar" style={style}>
      <div className="cell">
        <div
          className="details"
          style={{
            backgroundColor: color
          }}
        >
          <p className="label">{showCorrectBars()}</p>
        </div>
      </div>
    </animated.div>
  );
};

export default AlgorithmDisplayBar;
