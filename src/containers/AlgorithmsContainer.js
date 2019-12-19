import React from "react";
import { Grid } from "semantic-ui-react";
import ControllerContainer from "./ControllerContainer";
import AlgorithmCard from "../components/AlgorithmCard";

const AlgorithmsContainer = () => {
  const buildAlgorithmCards = (algos = [1, 2, 3, 4]) => {
    // Make a card for each algorithm a user has selected
    return algos.map(algo => {
      return (
        <Grid.Column width={8}>
          <AlgorithmCard key={algo} algo={algo} />
        </Grid.Column>
      );
    });
  };

  return (
    <Grid stackable stretched={true}>
      <Grid.Column width={16}>
        <ControllerContainer key={"ControllerContainer"} />
      </Grid.Column>
      {buildAlgorithmCards()}
    </Grid>
  );
};

export default AlgorithmsContainer;
