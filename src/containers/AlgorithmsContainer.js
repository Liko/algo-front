import React from "react";
import { Container, Grid } from "semantic-ui-react";

import ControllerContainer from "./ControllerContainer";
import AlgorithmCard from "../components/AlgorithmCard";

const AlgorithmsContainer = ({
  algos,
  removeAlgo,
  intervalSpeed,
  setIntervalSpeed
}) => {
  // const reset = () => {
  //   // set all algos step to 0
  //   setStep(0);
  // };

  const reset = algo => {
    // set the algo step to 0
    algo.currentStep = 0;
  };

  const buildAlgorithmCards = () => {
    // Make a card for each algorithm a user has selected

    return algos.map(algo => {
      return (
        <Grid.Column key={algo.key} width={8}>
          <button onClick={() => reset(algo)}>Reset</button>
          <AlgorithmCard
            algo={algo}
            removeAlgo={removeAlgo}
            step={[algo.currentStep]}
          />
        </Grid.Column>
      );
    });
  };

  return (
    <Container>
      <Grid stackable stretched={true}>
        {/* <button onClick={reset}>Reset</button> */}
        <Grid.Column width={16}>
          <ControllerContainer
            intervalSpeed={intervalSpeed}
            setIntervalSpeed={setIntervalSpeed}
            key={"ControllerContainer"}
          />
        </Grid.Column>

        {buildAlgorithmCards()}
      </Grid>
    </Container>
  );
};

export default AlgorithmsContainer;
