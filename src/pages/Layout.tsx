import { Box } from "@chakra-ui/react";
import NavBar from "../components/navbar/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Box w={"full"} position="absolute" top={0} left={0} zIndex={"100"}>
        <NavBar />
      </Box>
      <Box>
        <Outlet />
      </Box>

    </>
  );
};

export default Layout;
