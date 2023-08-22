import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { diet } from "../../hooks/useQueryRecipe";
import { SetStateAction, useState } from "react";

interface Props{
  onDietChange: (diet:string) =>void
}
const DietSelector = ({ onDietChange }:Props) => {
  const [dietType, setDiet] = useState(String);
  const handleDietChange = (selectedDiet:string) => {
    setDiet(selectedDiet);
    onDietChange(selectedDiet);
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
          <MenuItem key={dietType} onClick={() => handleDietChange(dietType)}>
            {dietType}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DietSelector;
