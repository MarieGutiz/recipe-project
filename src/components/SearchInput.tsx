import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import DietSelector from "./searchBy/DietSelector";
import { useNavigate } from "react-router-dom";
import useRecipeQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useRecipeQueryStore((r) => r.setSearchText);
  const navigate = useNavigate();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (ref.current) {
      setSearchText(ref.current.value);
      navigate("/recipe/" + ref.current.value);
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
        <DietSelector navigateTo={true} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
