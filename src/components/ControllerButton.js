import React from "react";
import capitalize from "lodash/capitalize";

const ControllerButton = ({ label, handleClick }) => {
  return (
    <div>
      <button onClick={() => handleClick(label)}>{capitalize(label)}</button>
    </div>
  );
};

export default ControllerButton;
