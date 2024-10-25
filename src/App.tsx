import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="main" bg="green">
          Main
        </GridItem>
        <Show when={{ base: false, lg: true }}>
          <GridItem area="aside" bg="blue">
            Aside
          </GridItem>
        </Show>
        <GridItem area="nav">
          <NavBar />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
