import React, { useState, useEffect, memo } from "react";
import { Card } from "semantic-ui-react";
import AlgorithmDisplayBar from "./AlgorithmDisplayBar";

import "./AlgorithmCard.css";

import { useTransition } from "react-spring";

const AlgorithmCard = ({ algo, removeAlgo, step }) => {
  const [currentData, setCurrentData] = useState(algo.steps[step]);
  const maxData = Math.max(...currentData);

  useEffect(() => {
    setCurrentData(algo.steps[step]);
  }, [step]);

  let height = 0;
  let barHeight = (0.36 * window.innerHeight) / currentData.length;

  const transitions = useTransition(
    currentData.map(data => ({
      ...data,
      y: (height += barHeight) - barHeight,
      height: barHeight,
      id: data
    })),
    d => d.id,
    {
      from: { height: 0, opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y, height }) => ({ y, height, opacity: 1 }),
      update: ({ y, height }) => ({ y, height }),
      config: { mass: 1, tension: 180, friction: 12 }
    }
  );

  const mapBars = () => {
    return transitions.map(({ item, props: { y, ...rest }, key }, index) => (
      <AlgorithmDisplayBar
        key={key}
        value={item.id}
        style={{
          width: `${(80 + item.id * 80) / maxData}%`,
          zIndex: currentData.length - index,
          transform: y.interpolate(y => `translate3d(0,${y}px,0)`),
          ...rest
        }}
      />
    ));
  };

  return (
    <Card fluid onClick={() => removeAlgo(algo.key)}>
      <Card.Content>
        <p>{step}</p>
        <p>{algo.name}</p>
        <div style={{ height }}>{mapBars()}</div>
      </Card.Content>
    </Card>
  );
};

export default memo(AlgorithmCard);
