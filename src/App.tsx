import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="main">
          <GameGrid></GameGrid>
        </GridItem>
        {/* <Show when={{ base: false, lg: true }}>
          <GridItem area="aside">Aside</GridItem>
        </Show> */}
        <GridItem area="nav">
          <NavBar />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
