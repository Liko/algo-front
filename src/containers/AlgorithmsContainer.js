import React, { useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import ControllerContainer from "./ControllerContainer";
import AlgorithmCard from "../components/AlgorithmCard";

const AlgorithmsContainer = ({ selectedAlgos, removeAlgo }) => {
  const [algos, setAlgos] = useState([]);
  const [step, setStep] = useState(0);

  const buildAlgorithmCards = () => {
    // Make a card for each algorithm a user has selected
    const algos = selectedAlgos;
    return algos.map(algo => {
      return (
        <Grid.Column width={8}>
          <AlgorithmCard key={algo.key} algo={algo} removeAlgo={removeAlgo} />
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
