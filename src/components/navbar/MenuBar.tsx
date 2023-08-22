import {
  Box,
  HStack,
  IconButton,
  Link,
  useDisclosure,
  Image,
  Stack,
  Flex,
  Button,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo/recipe.png";
import MenuUser from "./MenuUser";

const Links = ["My recipies", "Organize my week preps"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    textColor={"text_hover"}
    _hover={{
      textDecoration: "none",
      bg: "secondary",
      textColor: "text_hover",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const MenuBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box px={6} py={2}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            padding={3}
            size={"md"}
            icon={isOpen ? <RiCloseLine /> : <AiOutlineBars />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              backgroundColor="#FAD87A"
              as={Button}
              rounded={"base"}
              variant={"link"}
              cursor={"pointer"}
              p={1}
            >
              <Image
                src={logo}
                boxSize={{ base: "40px", sm: "30px", md: "60px" }}
                objectFit="cover"
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>

          <MenuUser />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} bgColor={"blackAlpha.800"} borderRadius={5}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default MenuBar;
