import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Center,
} from "@chakra-ui/react";
import { FcMultipleInputs, FcReading } from "react-icons/fc";
import { FaUtensils } from "react-icons/fa";
import RippleAnimation from "./RippleAnimation";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack
      id="feat"
      backgroundColor={"beige"}
      rounded={"md"}
      padding={2}
      paddingX={4}
    >
      <Center w={"full"} backgroundColor={"#fbd87c"} padding={1}>
        <Box
          as={Flex}
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          mb={1}
          position="relative"
          overflow="hidden"
        >
          <Box position="absolute" borderRadius="50%">
            <RippleAnimation />
          </Box>
          <Box position={"absolute"} zIndex={"100"}>
            {icon}
          </Box>
        </Box>
      </Center>

      <Text fontWeight={700} align={"center"} color={"red"}>
        {title}
      </Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Box p={4} backgroundColor="#397c53">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcReading} w={10} h={10} />}
          title={"How It Works"}
          text={`Fill in any combination of the search criteria based on your preferences. You can search for recipes using just one criterion or combine multiple criteria for a more refined result.\n\nClick the "Search" button, and our website will handle the rest. We'll send your search criteria to our powerful Recipe API, which will fetch and display the most relevant and delicious recipes matching your inputs.`}
        />
        <Feature
          icon={<Icon as={FcMultipleInputs} w={10} h={10} />}
          title={"Start Exploring"}
          text={
            "Get ready to embark on a delightful culinary journey! Use our Recipe Search to unearth mouthwatering dishes that suit your taste, lifestyle, and dietary needs. Whether you're an experienced chef or a novice in the kitchen, our recipe collection has something for everyone."
          }
        />
        <Feature
          icon={<Icon as={FaUtensils} w={10} h={10} color={"facebook.900"} />}
          title={"Bon Appétit!"}
          text={`A delicious food always unite us!.. Get along with yours. So, whether it's a hearty breakfast, a wholesome lunch, or an indulgent dinner, "Bon Appétit!" has you covered.

Get Cooking Today!`}
        />
      </SimpleGrid>
    </Box>
  );
}
