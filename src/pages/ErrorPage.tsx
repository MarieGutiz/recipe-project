import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import {BiErrorAlt} from "react-icons/bi";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
     <Box padding={5}>
     <Heading>Oops!</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page does not exist"
          : "An unexpected error occurred"}
      </Text>
      <BiErrorAlt boxSize={6} color="red.500" />
     </Box>
    </>
  );
};

export default ErrorPage;
