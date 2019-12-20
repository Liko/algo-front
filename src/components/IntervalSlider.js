import React from "react";
import { Grid, Segment, Label, GridColumn } from "semantic-ui-react";
import { Slider } from "react-semantic-ui-range";

const IntervalSlider = ({ intervalSpeed, setIntervalSpeed }) => {
  return (
    <Grid stackable stretched={true}>
      <Grid.Column width={12}>
        <Segment>
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
        </Segment>
      </Grid.Column>
      <GridColumn width={4}>
        <Label color="orange">
          <p>Interval:</p>
          <p>{intervalSpeed / 1000}s </p>
        </Label>
      </GridColumn>
    </Grid>
  );
};

export default IntervalSlider;
