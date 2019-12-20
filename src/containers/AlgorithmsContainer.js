import React, { useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import ControllerContainer from "./ControllerContainer";
import AlgorithmCard from "../components/AlgorithmCard";

const AlgorithmsContainer = ({ algos, removeAlgo }) => {
  const [step, setStep] = useState(0);

  const buildAlgorithmCards = () => {
    // Make a card for each algorithm a user has selected
    return algos.map(algo => {
      return (
        <Grid.Column key={algo.key} width={8}>
          <AlgorithmCard algo={algo} removeAlgo={removeAlgo} step={step} />
        </Grid.Column>
      );
    });
  };

  return (
    <Container>
      <Grid stackable stretched={true}>
        <Grid.Column width={16}>
          <ControllerContainer key={"ControllerContainer"} />
        </Grid.Column>
        {buildAlgorithmCards()}
      </Grid>
    </Container>
  );
};

export default AlgorithmsContainer;
