import React, { useState, useEffect, useRef } from "react";
import { Container, Grid } from "semantic-ui-react";
import ControllerContainer from "./ControllerContainer";
import AlgorithmCard from "../components/AlgorithmCard";

const AlgorithmsContainer = ({ algos, removeAlgo }) => {
  const [step, setStep] = useState(0);
  let intervalSpeed = 1000;

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      const stepTick = () => {
        savedCallback.current();
      };
      if (delay !== null) {
        let id = setInterval(stepTick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    setStep(step + 1);
  }, intervalSpeed);

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
