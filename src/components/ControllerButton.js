import React from "react";
import capitalize from "lodash/capitalize";
import { Button, Icon } from "semantic-ui-react";

const ControllerButton = ({ label, handleClick, disabled, emphasis, icon }) => {
  return (
    <Button className={`animated vertical ${emphasis}`}>
      <Button.Content className="visible" disabled={disabled}>
        {capitalize(label)}
      </Button.Content>
      <Button.Content
        className="hidden"
        disabled={disabled}
        onClick={() => handleClick(label)}
      >
        <Icon name={icon} />
      </Button.Content>
    </Button>
  );
};

export default ControllerButton;
