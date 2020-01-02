import React from "react";
import { Grid, GridColumn, Button } from "semantic-ui-react";
import OptionSlider from "../components/OptionSlider";
import ControllerButton from "../components/ControllerButton";

const ControllerContainer = ({
  intervalSpeed,
  setIntervalSpeed,
  controls,
  handleClick,
  arraySize,
  setArraySize,
  isRunning
}) => {
  const currentlyRunning = label => {
    return (label !== "play" && isRunning) || (label !== "pause" && !isRunning);
  };

  const currentlyDisabled = label => {
    return (
      (label === "forward" || label === "back" || label === "reset") &&
      isRunning
    );
  };

  const mapButtons = () => {
    return Object.keys(controls).map(label => {
      if (currentlyRunning(label)) {
        return (
          <ControllerButton
            label={label}
            disabled={currentlyDisabled(label)}
            handleClick={handleClick}
          />
        );
      }
    });
  };

  const intervalOptions = {
    value: intervalSpeed,
    setValue: setIntervalSpeed,
    min: 100,
    max: 2000,
    step: 100,
    label: "Interval: ",
    labelInfo: `${intervalSpeed / 1000}s`
  };

  const arraySizeOptions = {
    value: arraySize,
    setValue: setArraySize,
    min: 5,
    max: 25,
    step: 1,
    label: "Array Size: ",
    labelInfo: arraySize
  };

  return (
    <div>
      <Button fluid>ControllerContainer</Button>
      {mapButtons()}
      <Grid stackable stretched={true}>
        <Grid.Column width={8}>
          <OptionSlider {...intervalOptions} />
        </Grid.Column>
        <Grid.Column width={8}>
          <OptionSlider {...arraySizeOptions} />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ControllerContainer;
