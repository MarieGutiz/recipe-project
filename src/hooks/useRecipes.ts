import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useRecipeQueryStore from "../store";

const apiClient = new APIClient("/recipes");
// const recipeQuery = useRecipeQueryStore(r => r.recipeQuery);
const useRecipies = (quest: string | undefined) =>

  useQuery<FetchResponse, Error>({
    queryKey: ["hits", "recipe", quest],
    queryFn: () =>
      apiClient.getAll({
        params: {
          q: quest,
        },
      }),
    enabled: Boolean(quest),
    staleTime: 24 * 1000 * 10,
  });

export default useRecipies;
