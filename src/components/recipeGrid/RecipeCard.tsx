import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import Recipe from "../../entities/Recipies";

interface Props {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: Props) => {
  return (
    <Card>
      <Image src={recipe.image} />
      <CardBody>
        <Heading>{recipe.label}</Heading>
      </CardBody>
    </Card>
  );
};

export default RecipeCard;
