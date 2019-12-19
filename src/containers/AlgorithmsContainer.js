import React from "react";
import { Container, Grid } from "semantic-ui-react";
import ControllerContainer from "./ControllerContainer";
import AlgorithmCard from "../components/AlgorithmCard";

const AlgorithmsContainer = () => {
  return (
    <div>
      <Grid stackable>
        <Grid.Column width={16}>
          <ControllerContainer />
        </Grid.Column>
        <Grid.Column width={8}>
          <AlgorithmCard />
        </Grid.Column>
        <Grid.Column width={8}>
          <AlgorithmCard />
        </Grid.Column>
        <Grid.Column width={8}>
          <AlgorithmCard />
        </Grid.Column>
        <Grid.Column width={8}>
          <AlgorithmCard />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default AlgorithmsContainer;
