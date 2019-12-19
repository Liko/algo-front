import React from "react";
import MenuContainer from "../containers/MenuContainer";
import AlgorithmsContainer from "../containers/AlgorithmsContainer";

const App = () => {
  const handleClick = () => {
    console.log("Click!");
  };

  return (
    <div className="App">
      <MenuContainer handleClick={handleClick} />
      <AlgorithmsContainer />
    </div>
  );
};

export default App;
