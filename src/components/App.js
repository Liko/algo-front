import React, { useState } from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import MenuContainer from "../containers/MenuContainer";
import AlgorithmsContainer from "../containers/AlgorithmsContainer";

const App = () => {
  const [algos, setAlgos] = useState([]);

  const handleClick = algoName => {
    const newAlgos = [...algos, { name: algoName }];
    setAlgos(newAlgos);
  };

  return (
    <div className="App">
      <Container text textAlign="center">
        <Header size="huge">Algo</Header>
      </Container>
      <Container fluid>
        <Grid columns={2} stackable>
          <Grid.Column width={3}>
            <MenuContainer handleClick={handleClick} />
          </Grid.Column>
          <Grid.Column width={12}>
            <AlgorithmsContainer />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
