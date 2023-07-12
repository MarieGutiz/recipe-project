import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import useRecipies from "../hooks/useRecipes";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState("");
  const { data, error } = useRecipies(search);

  if (error) return null;

  console.log(data?.hits);
  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        if (ref.current) {
          console.log(ref.current.value);
          setSearch(ref.current.value);
          
        }
      }}
    >
      <InputGroup width="50%">
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          placeholder="What to cook today?...."
          variant="filled"
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
