import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import AlgorithmDisplayBar from "./AlgorithmDisplayBar";

import { useTransition, animated } from "react-spring";

const AlgorithmCard = ({ algo, removeAlgo, step }) => {
  const [currentData, setCurrentData] = useState(algo.steps[step]);

  useEffect(() => {
    setCurrentData(algo.steps[step]);
  }, [step]);

  const mapBars = () =>
    currentData.map(value => <AlgorithmDisplayBar value={value} />);

  return (
    <Card fluid onClick={() => removeAlgo(algo.key)}>
      <Card.Content>
        <p>{step}</p>
        <p>{algo.name}</p>
        {mapBars()}
      </Card.Content>
    </Card>
  );
};

export default AlgorithmCard;
