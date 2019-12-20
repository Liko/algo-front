import React from "react";
import { Button } from "semantic-ui-react";
import IntervalSlider from "../components/IntervalSlider";

const ControllerContainer = ({ intervalSpeed, setIntervalSpeed }) => {
  return (
    <div>
      <Button fluid>ControllerContainer</Button>
      <IntervalSlider
        intervalSpeed={intervalSpeed}
        setIntervalSpeed={setIntervalSpeed}
      />
    </div>
  );
};

export default ControllerContainer;
