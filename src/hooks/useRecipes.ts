import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useRecipeQueryStore from "../store";

const apiClient = new APIClient("/recipes");

const useRecipies = () => {
  const recipeQuery = useRecipeQueryStore((r) => r.recipeQuery);
  // console.log("useRecipes " + recipeQuery.dietLabels);
  return useQuery<FetchResponse, Error>({
    queryKey: ["hits", "recipe", recipeQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          ...(recipeQuery.searchText !== undefined && { q: recipeQuery.searchText }),
          ...(recipeQuery.dietLabels !== undefined && { diet: recipeQuery.dietLabels })
        },
      }),
    enabled: Boolean(recipeQuery),
    staleTime: 6000,
  });
};

export default useRecipies;
