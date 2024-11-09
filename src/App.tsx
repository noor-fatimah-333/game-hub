import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface gameQuery {
  genre: Genre | null;
  platform: Platform | null;
}
function App() {
  const showGenreList = useBreakpointValue({ base: false, lg: true });
  const [gameQuery, setGameQuery] = useState<gameQuery>({} as gameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <GridItem area="main">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          ></PlatformSelector>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
        {showGenreList && (
          <GridItem area="aside" paddingX={"5px"}>
            <GenreList
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        )}
      </Grid>
    </>
  );
}

export default App;
