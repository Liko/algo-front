import React from "react";
import { Grid, Button } from "semantic-ui-react";
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
  s;
  const currentlyRunning = label => {
    return (label !== "play" && isRunning) || (label !== "pause" && !isRunning);
  };

  const currentlyDisabled = label => {
    return (
      (label === "forward" || label === "back" || label === "reset") &&
      isRunning
    );
  };

  const emphasisMap = {
    play: "primary",
    pause: "primary",
    forward: "secondary",
    back: "secondary",
    reset: "secondary"
  };

  const iconMap = {
    play: "play",
    pause: "pause",
    forward: "right chevron",
    back: "left chevron",
    reset: "undo"
  };

  const mapButtons = () => {
    return Object.keys(controls).map(label => {
      return (
        currentlyRunning(label) && (
          <ControllerButton
            label={label}
            disabled={currentlyDisabled(label)}
            handleClick={handleClick}
            emphasis={emphasisMap[label]}
            icon={iconMap[label]}
          />
        )
      );
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
      <Grid fluid="true" stackable stretched={true}>
        <Grid.Column width={16}>
          <Button.Group labeled icon widths="4">
            {mapButtons()}
          </Button.Group>
        </Grid.Column>
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
