import { Box } from "@chakra-ui/react";
import useRecipies from "../hooks/useRecipes";
import { useParams } from "react-router";
import DietSelector from "../components/searchBy/DietSelector";
const RecipeExtendedSearch = () => {
  const { name } = useParams();
  // search in the warehouse
  const { data, error } = useRecipies();
  if (!data || error) return null;
  console.log(data?.hits);

  const recipes = data?.hits.map((hit) => (
    <div key={hit.recipe.uri}>{hit.recipe.label}</div>
  ));
  return (
    <>
      <Box></Box>
      <Box paddingTop={40}>
        {recipes} <DietSelector />
      </Box>
      ;
    </>
  );
};

export default RecipeExtendedSearch;
