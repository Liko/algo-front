import React, { Fragment } from "react";
import { Grid } from "semantic-ui-react";
import ControllerContainer from "./ControllerContainer";
import AlgorithmCard from "../components/AlgorithmCard";

const AlgorithmsContainer = () => {
  return (
    <Grid stackable stretched={true}>
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
  );
};

export default AlgorithmsContainer;
