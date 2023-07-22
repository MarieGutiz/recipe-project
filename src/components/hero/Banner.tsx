import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Box,
  Center,
} from "@chakra-ui/react";
import Features from "../features/Features";
import NavBar from "../navbar/NavBar";
import SearchInput from "../SearchInput";

export default function Banner() {
 
  return (
    <>
      <Flex
        w={"full"}
        h={"80vh"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fGZvb2R8ZW58MHx8fHwxNjg5MTUxOTczfDA&ixlib=rb-4.0.3&w=1200)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Box w={"full"} position="absolute" top={0} left={0}>
            <NavBar />
          </Box>
          <Stack maxW={"2xl"} align={"center"} spacing={2} marginTop={20}>
            <Text
              color={"white"}
              fontWeight={700}
              align={"center"}
              lineHeight={0.9}
              fontFamily={"Karla"}
              fontSize={useBreakpointValue({
                base: "3xl",
                md: "4xl",
                lg: "6xl",
              })}
            >
              Cook healthy meals like a pro!
            </Text>
            <Center w={"full"}>
              <Text color={"whitesmoke"} align={"center"} fontSize="18px" fontFamily={"Karla"}>
                Find a recipe to prepare with love to yours!
              </Text>
            </Center>

            <Stack direction={"row"}>
              <Box
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
                padding={3}
              >
                <SearchInput />
              </Box>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Features />
    </>
  );
}
