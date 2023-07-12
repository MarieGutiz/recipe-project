import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient("/recipes");

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
