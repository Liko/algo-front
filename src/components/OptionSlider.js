import React from "react";
import { Grid, Segment, Label, GridColumn } from "semantic-ui-react";
import { Slider } from "react-semantic-ui-range";

const OptionSlider = ({
  value,
  setValue,
  label,
  labelInfo,
  min,
  max,
  step
}) => {
  return (
    <Grid stackable stretched={true}>
      <GridColumn width={6} style={{ height: "60px" }}>
        <Label color="orange">
          <p>
            {label}
            {labelInfo}
          </p>
        </Label>
      </GridColumn>
      <Grid.Column width={10} style={{ height: "60px" }}>
        <Segment style={{ padding: "2px" }}>
          <Slider
            color="orange"
            inverted={false}
            settings={{
              start: value,
              min: min,
              max: max,
              step: step,
              onChange: value => setValue(value)
            }}
          />
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default OptionSlider;
