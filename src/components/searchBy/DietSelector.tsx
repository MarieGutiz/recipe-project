import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { diet } from "../../hooks/useQueryRecipe";
import useRecipeQueryStore from "../../store";
import useDiet from "../../hooks/useDiet";
import { useNavigate } from "react-router-dom";

interface Props {
  navigateTo?: boolean;
}
const DietSelector = ({ navigateTo }: Props) => {
  const selectedDiet = useRecipeQueryStore((r) => r.recipeQuery.dietLabels);
  const dietType = useDiet(selectedDiet);
  const setSelectedDiet = useRecipeQueryStore((r) => r.setDiet);
  const navigate = useNavigate();

  const handleSelectedDiet = (dietType: string) => {
    setSelectedDiet(dietType.toLowerCase());

    if (navigateTo) {
      navigate("/recipe/diet/" + dietType);
    }
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        marginLeft={2}
        w={"25%"}
        fontSize={{ base: "0.6rem", md: "md" }}
        color={"green.700"}
        backgroundColor={"white"}
      >
        {dietType || "Diet "}
      </MenuButton>
      <MenuList color={"black"}>
        {diet.map((dietType) => (
          <MenuItem
            key={dietType}
            onClick={() => handleSelectedDiet(dietType.toLowerCase())}
          >
            {dietType}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DietSelector;
