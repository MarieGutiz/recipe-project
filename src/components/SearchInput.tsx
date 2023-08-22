import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import useRecipies from "../hooks/useRecipes";
import DietSelector from "./searchBy/DietSelector";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const { data, error } = useRecipies(search);
  const [selectedDiet, setSelectedDiet] = useState("");
  if (error) return null;

  const handleDietSelector = (diet: string) => {
    setSelectedDiet(diet);
  };
  // console.log(data?.hits);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log("select diet -> " + selectedDiet);
    if (ref.current) {
      console.log(ref.current.value);
      console.log("select diet -> " + selectedDiet);
      // setSearch(ref.current.value);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup width="100%">
        <InputLeftElement color={"red"} children={<BsSearch />} />
        <Input
          w={"80%"}
          style={{ backgroundColor: "white", color: "black" }}
          ref={ref}
          placeholder="What to cook today?.."
          variant="filled"
          borderRadius={20}
        />
        <DietSelector onDietChange={handleDietSelector} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
