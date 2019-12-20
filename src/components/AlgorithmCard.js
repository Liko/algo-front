import React from "react";
import { Card } from "semantic-ui-react";
import AlgorithmDisplayBar from "./AlgorithmDisplayBar";

const AlgorithmCard = ({ algo, removeAlgo, step }) => {
  return (
    <Card fluid onClick={() => removeAlgo(algo.key)}>
      <Card.Content>
        <p>{algo.name}</p>
        <AlgorithmDisplayBar />
        <AlgorithmDisplayBar />
      </Card.Content>
    </Card>
  );
};

export default AlgorithmCard;
