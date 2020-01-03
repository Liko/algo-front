import React, { useState, useEffect, memo } from "react";
import { Card } from "semantic-ui-react";
import { useTransition } from "react-spring";
import AlgorithmDisplayBar from "./AlgorithmDisplayBar";
import "./AlgorithmCard.css";

const AlgorithmCard = ({ algo, removeAlgo, step }) => {
  const [currentData, setCurrentData] = useState(algo.steps[step]);

  const lastStep = algo.steps.slice(-1)[0];

  const maxData = Math.max(...currentData.map(i => i.value));
  let height = 0;
  let barHeight = (0.3 * window.innerHeight) / currentData.length;

  useEffect(() => {
    setCurrentData(algo.steps[step]);
  }, [step]);

  const transitions = useTransition(
    currentData.map(data => ({
      ...data,
      y: (height += barHeight) - barHeight,
      height: barHeight,
      data: data,
      id: data.value
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

  const calculateBarWidth = item => {
    return `${(80 + item.value * 80) / maxData}%`;
  };

  const calculateBarColor = (item, index) => {
    if (item.status === "checking") return "#F0C808";
    else if (item.status === "moving") return "#DD1C1A";
    else if (algo.steps[step] === lastStep) return "#44AF69";
    else if (item.isSorted) return "#06AED5";
    else return "#FFF1D0";
  };

  const mapBars = () => {
    return transitions.map(({ item, props: { y, ...rest }, key }, index) => (
      <AlgorithmDisplayBar
        key={key}
        item={item}
        color={calculateBarColor(item, index)}
        style={{
          width: calculateBarWidth(item),
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
          {algo.name} - step {parseInt(step) + 1} of {algo.steps.length}
        </p>
        <div style={{ height }}>{mapBars()}</div>
      </Card.Content>
    </Card>
  );
};

export default memo(AlgorithmCard);
