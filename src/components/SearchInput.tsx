import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import DietSelector from "./searchBy/DietSelector";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedDiet, setSelectedDiet] = useState("");

  const handleDietSelector = (diet: string) => {
    setSelectedDiet(diet);
  };
  

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (ref.current) {
      console.log(ref.current.value);
      console.log("select diet -> " + selectedDiet);
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
        <DietSelector onDietChange={handleDietSelector} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
