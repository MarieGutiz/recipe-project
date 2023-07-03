import { Box } from "@chakra-ui/react";
import MenuBar from "./MenuBar";

export default function NavBar() {
  return (
    <>
      <MenuBar />

      <Box p={4}>Main Content Here</Box>
    </>
  );
}
