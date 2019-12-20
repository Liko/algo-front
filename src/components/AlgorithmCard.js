import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import AlgorithmDisplayBar from "./AlgorithmDisplayBar";

const AlgorithmCard = ({ algo, removeAlgo, step }) => {
  const [currentData, setCurrentData] = useState(algo.steps[step]);

  return (
    <Card fluid onClick={() => removeAlgo(algo.key)}>
      <Card.Content>
        <p>{step}</p>
        <p>{algo.name}</p>
        <AlgorithmDisplayBar />
        <AlgorithmDisplayBar />
      </Card.Content>
    </Card>
  );
};

export default AlgorithmCard;
