import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

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
        <GridItem area="aside">
          <GenreList />
        </GridItem>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
