import React from "react";
import { Card } from "semantic-ui-react";
import AlgorithmDisplayBar from "./AlgorithmDisplayBar";

const AlgorithmCard = () => {
  return (
    <Card>
      <Card.Content>
        <p>AlgorithmCard</p>
        <AlgorithmDisplayBar />
      </Card.Content>
    </Card>
  );
};

export default AlgorithmCard;
