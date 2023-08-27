import { diet } from "./useQueryRecipe";

const useDiet = (dietType?: string) => {
  return diet.find((d) => d === dietType);
};
export default useDiet;
