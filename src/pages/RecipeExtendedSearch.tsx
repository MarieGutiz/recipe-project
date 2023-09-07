import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import useRecipies from "../hooks/useRecipes";
import DietSelector from "../components/searchBy/DietSelector";
import RecipeGrid from "../components/recipeGrid/RecipeGrid";

const RecipeExtendedSearch = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      gridTemplateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside"></GridItem>
      </Show>
      <GridItem area="main">
        <Box>Welcome to our recipe house</Box>
        <RecipeGrid />
      </GridItem>
    </Grid>
  );
};

export default RecipeExtendedSearch;
