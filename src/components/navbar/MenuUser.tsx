import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import randomUser from "../../data/randomUser";

const user = randomUser();

const MenuUser = () => {
  return (
    <Flex alignItems={"center"}>
      <Button
        variant={"solid"}
        colorScheme={"teal"}
        size={"sm"}
        mr={4}
        leftIcon={<RiAddLine />}
      >
        Add recipe
      </Button>
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
        >
          <Avatar size={"md"} src={user.Photos[0].Url} />
        </MenuButton>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuDivider />
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default MenuUser;
