import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import MenuContainer from "../containers/MenuContainer";
import AlgorithmsContainer from "../containers/AlgorithmsContainer";

const App = () => {
  const handleClick = () => {
    console.log("Click!");
  };

  return (
    <div className="App">
      <Container text textAlign="center">
        <Header size="huge">Algo</Header>
      </Container>
      <Container columns={2}>
        <Grid stackable>
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
