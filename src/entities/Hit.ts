import Recipe, { Links2 } from "./Recipies";

export default interface Hit {
  recipe: Recipe;
  _links: Links2;
}
