import React, { useState, useEffect, memo } from "react";
import { Card } from "semantic-ui-react";
import { useTransition } from "react-spring";
import AlgorithmDisplayBar from "./AlgorithmDisplayBar";
import "./AlgorithmCard.css";

const AlgorithmCard = ({ algo, removeAlgo, step }) => {
  const [currentData, setCurrentData] = useState(algo.steps[step]);

  const maxData = Math.max(...currentData);
  let height = 0;
  let barHeight = (0.35 * window.innerHeight) / currentData.length;

  useEffect(() => {
    setCurrentData(algo.steps[step]);
  }, [step]);

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
        <p>
          {algo.name} - step {step}
        </p>
        <div style={{ height }}>{mapBars()}</div>
      </Card.Content>
    </Card>
  );
};

export default memo(AlgorithmCard);
