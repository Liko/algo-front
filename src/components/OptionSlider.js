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
      <Grid.Column width={12}>
        <Segment>
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
      <GridColumn width={4}>
        <Label color="orange">
          <p>{label}</p>
          <p>{labelInfo} </p>
        </Label>
      </GridColumn>
    </Grid>
  );
};

export default OptionSlider;
