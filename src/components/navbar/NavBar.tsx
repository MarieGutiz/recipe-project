import { Box } from "@chakra-ui/react";
import MenuBar from "./MenuBar";
import SearchInput from "../SearchInput";
export default function NavBar() {
  return (
    <>
      <MenuBar />
      <SearchInput />
      <Box p={4}>Main Content Here</Box>
    </>
  );
}
