import React from "react";
import { Button } from "semantic-ui-react";
import IntervalSlider from "../components/IntervalSlider";
import ControllerButton from "../components/ControllerButton";

const ControllerContainer = ({
  intervalSpeed,
  setIntervalSpeed,
  controls,
  handleClick,
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
  return (
    <div>
      <Button fluid>ControllerContainer</Button>
      {mapButtons()}
      <IntervalSlider
        intervalSpeed={intervalSpeed}
        setIntervalSpeed={setIntervalSpeed}
      />
    </div>
  );
};

export default ControllerContainer;
