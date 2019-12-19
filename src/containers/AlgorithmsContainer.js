import React from "react";
import { Container, Grid } from "semantic-ui-react";
import ControllerContainer from "./ControllerContainer";
import AlgorithmCard from "../components/AlgorithmCard";

const AlgorithmsContainer = () => {
  return (
    <Container>
      <p>AlgorithmsContainer</p>
      <ControllerContainer />
      <Grid columns="two">
        <Grid.Column>
          <AlgorithmCard />
          <AlgorithmCard />
        </Grid.Column>
        <Grid.Column>
          <AlgorithmCard />
          <AlgorithmCard />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default AlgorithmsContainer;
