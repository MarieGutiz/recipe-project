import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import useRecipies from "../../hooks/useRecipes";
import RecipeCardContainer from "./RecipeCardContainer";
import RecipeCardSkeleton from "./RecipeCardSkeleton";
import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeGrid = () => {
  const { data: recipe, isLoading, error } = useRecipies();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error.message}</Text>;
  return (
    <Box>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <RecipeCardContainer key={skeleton}>
              <RecipeCardSkeleton />
            </RecipeCardContainer>
          ))}
        <React.Fragment>
          {recipe?.hits.map((r, index) => (
            <RecipeCardContainer key={index}>
              <RecipeCard recipe={r.recipe}></RecipeCard>
            </RecipeCardContainer>
          ))}
        </React.Fragment>
      </SimpleGrid>
    </Box>
  );
};

export default RecipeGrid;
