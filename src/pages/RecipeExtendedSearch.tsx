import { Box } from "@chakra-ui/react";
import useRecipies from "../hooks/useRecipes";
import { useParams } from "react-router";
const RecipeExtendedSearch = () => {
  const { name } = useParams();

  const { data, error } = useRecipies(name);
  if (error) return null;
  if (!data) return null;
  console.log(data?.hits);

  const recipes = data?.hits.map((hit) => (
    <div key={hit.recipe.label}> 
      {hit.recipe.label}
    </div>
  ));
  return <Box paddingTop={40}>{recipes}</Box>;
};

export default RecipeExtendedSearch;
