import React, { useState, useEffect, useRef } from "react";
import { Container, Grid, Segment, Label, GridColumn } from "semantic-ui-react";
import { Slider } from "react-semantic-ui-range";
import ControllerContainer from "./ControllerContainer";
import AlgorithmCard from "../components/AlgorithmCard";

const AlgorithmsContainer = ({ algos, removeAlgo }) => {
  const [step, setStep] = useState(0);
  const [intervalSpeed, setIntervalSpeed] = useState(500);

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

  const reset = () => {
    setStep(0);
  };

  const getSafeStep = algo => {
    let safeStep = step;
    if (step >= algo.steps.length) safeStep = [algo.steps.length - 1];
    return safeStep;
  };

  const buildAlgorithmCards = () => {
    // Make a card for each algorithm a user has selected
    return algos.map(algo => {
      const safeStep = getSafeStep(algo);
      return (
        <Grid.Column key={algo.key} width={8}>
          <AlgorithmCard algo={algo} removeAlgo={removeAlgo} step={safeStep} />
        </Grid.Column>
      );
    });
  };

  return (
    <Container>
      <Grid stackable stretched={true}>
        <button onClick={reset}>Reset</button>
        <Grid.Column width={16}>
          <ControllerContainer key={"ControllerContainer"} />
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment>
            <p>
              <Slider
                color="orange"
                inverted={false}
                settings={{
                  start: intervalSpeed,
                  min: 100,
                  max: 2000,
                  step: 100,
                  onChange: value => setIntervalSpeed(value)
                }}
              />
            </p>
          </Segment>
        </Grid.Column>
        <GridColumn width={4}>
          <Label color="orange">
            <p>Interval:</p>
            <p>{intervalSpeed / 1000}s </p>
          </Label>
        </GridColumn>
        {buildAlgorithmCards()}
      </Grid>
    </Container>
  );
};

export default AlgorithmsContainer;
