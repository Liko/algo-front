import React from "react";
import MenuContainer from "../containers/MenuContainer";
import AlgorithmsContainer from "../containers/AlgorithmsContainer";

function App() {
  return (
    <div className="App">
      <div className="ui container">
        <MenuContainer />
        <AlgorithmsContainer />
      </div>
    </div>
  );
}

export default App;
