import React from "react";
import capitalize from "lodash/capitalize";

const ControllerButton = ({ label, handleClick, disabled }) => {
  return (
    <div>
      <button disabled={disabled} onClick={() => handleClick(label)}>
        {capitalize(label)}
      </button>
    </div>
  );
};

export default ControllerButton;
