import React from "react";
import { Grid, Segment, Label, GridColumn } from "semantic-ui-react";
import { Slider } from "react-semantic-ui-range";

const IntervalSlider = ({ intervalSpeed, setIntervalSpeed }) => {
  return (
    <div>
      <Grid stackable stretched={true}>
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
      </Grid>
    </div>
  );
};

export default IntervalSlider;
