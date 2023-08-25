import { create } from "zustand";

interface RecipeQuery {
  searchText?: string;
  diet?: string;
}

interface RecipeQueryStore {
  recipeQuery: RecipeQuery;
  setSearchText: (searchText: string) => void;
  setDiet: (diet: string) => void;
}

const useRecipeQueryStore = create<RecipeQueryStore>((set) => ({
  recipeQuery: {},
  setSearchText: (searchText) => set(() => ({ recipeQuery: { searchText } })),
  setDiet: (diet) =>
    set((store) => ({ recipeQuery: { ...store.recipeQuery, diet } })),
}));

export default useRecipeQueryStore;
