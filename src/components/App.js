import React, { useState } from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import MenuContainer from "../containers/MenuContainer";
import AlgorithmsContainer from "../containers/AlgorithmsContainer";
import bubbleSort from "../algos/bubbleSort";
import md5 from "md5"; // This library let's us generate a hashed key for algos

import { generateSteps } from "../util/algorithmHelper";

const App = () => {
  const [algos, setAlgos] = useState([]);

  const algoMap = {
    bubbleSort: bubbleSort()
  };

  const menuSelect = algoName => {
    const algo = { 
      name: algoName, 
      key: md5(Date.now()), 
      steps: generateSteps(algoName) 
    };

    const updatedAlgos = [...algos, algo];
    setAlgos(updatedAlgos);
  };

  const removeAlgo = algoKey => {
    const updatedAlgos = algos.filter(algo => algo.key !== algoKey);
    setAlgos(updatedAlgos);
  };

  return (
    <div className="App">
      <Container text textAlign="center">
        <Header size="huge">Algo</Header>
      </Container>
      <Container fluid>
        <Grid columns={2} stackable>
          <Grid.Column width={3}>
            <MenuContainer menuSelect={menuSelect} />
          </Grid.Column>
          <Grid.Column width={12}>
            <AlgorithmsContainer algos={algos} removeAlgo={removeAlgo} />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
