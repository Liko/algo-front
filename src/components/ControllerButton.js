import React from "react";
import capitalize from "lodash/capitalize";
import { Button, Icon } from "semantic-ui-react";

const ControllerButton = ({ label, handleClick, disabled, emphasis, icon }) => {
  return (
    <Button
      className={`animated vertical ${emphasis}`}
      disabled={disabled}
      onClick={() => handleClick(label)}
    >
      <Button.Content className="visible">{capitalize(label)}</Button.Content>
      <Button.Content className="hidden">
        <Icon name={icon} />
      </Button.Content>
    </Button>
  );
};

export default ControllerButton;
