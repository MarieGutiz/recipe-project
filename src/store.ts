import { create } from "zustand";

interface RecipeQuery {
  searchText?: string;
  dietLabels?: string;
}

interface RecipeQueryStore {
  recipeQuery: RecipeQuery;
  setSearchText: (searchText: string) => void;
  setDiet: (dietLabels: string) => void;
}

const useRecipeQueryStore = create<RecipeQueryStore>((set) => ({
  recipeQuery: {},
  setSearchText: (searchText) => set(() => ({ recipeQuery: { searchText } })),
  setDiet: (dietLabels) =>
    set((store) => ({ recipeQuery: { ...store.recipeQuery, dietLabels } })),
}));

export default useRecipeQueryStore;
