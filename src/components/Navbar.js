import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import Icon from "@chakra-ui/icon";
import { Img } from "@chakra-ui/image";
import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import logo from "../logo.svg";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover";
import { Portal } from "@chakra-ui/portal";
import React from "react";
import { useLocation } from "react-router";
import { SidebarContent } from "./Sidebar";

const NotificationIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.038.455h-.075c-3.553 0-6.81 2.577-7.127 5.99a14.7 14.7 0 00-.044.763l-.013.628-.003.563.016-.064a4.06 4.06 0 01-.979 1.92l-.07.091a4.303 4.303 0 00-.705 2.156v.251a4.292 4.292 0 00.976 2.805 5.14 5.14 0 003.254 1.608c3.14.34 6.316.34 9.464-.001a5.061 5.061 0 003.213-1.57 4.299 4.299 0 001.018-2.631v-.426a4.233 4.233 0 00-.707-2.187l-.065-.083-.16-.187a4.142 4.142 0 01-.766-1.51l-.047-.197-.01-.207a11.914 11.914 0 01-.004-.325v-.71a8.324 8.324 0 00-.03-.682C15.848 3.03 12.59.455 9.038.455zm-.075 1.471h.075c2.845 0 5.44 2.051 5.689 4.659.015.171.021.334.023.577l.003.954a8 8 0 00.02.422l.013.098.069.29c.202.77.566 1.488 1.068 2.107l.145.17-.016-.027c.278.416.437.898.459 1.395l-.001.173a2.797 2.797 0 01-.647 1.87A3.604 3.604 0 0113.59 15.7c-3.057.332-6.13.332-9.174.002a3.675 3.675 0 01-2.318-1.124 2.801 2.801 0 01-.606-1.81v-.23l.018-.2c.045-.337.157-.677.331-.991l.088-.146a5.537 5.537 0 001.287-2.567l.015-.15.007-.969.017-.491c.008-.156.018-.303.03-.446.24-2.6 2.833-4.652 5.679-4.652zm-7.035 9.275a6.8 6.8 0 01-.047.053l.052-.06-.005.007zm9.822 7.91a.72.72 0 00-1.022.111c-.109.137-.235.26-.376.366a2.254 2.254 0 01-1.662.47 2.232 2.232 0 01-1.49-.833.72.72 0 00-1.022-.117.742.742 0 00-.115 1.034 3.687 3.687 0 005.17.618c.227-.172.442-.381.628-.615a.742.742 0 00-.11-1.035z"
      fill="currentColor"
    />
  </Icon>
);

function MenuDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>
        {/* menuIcon */}
        {/* <HamburgerIcon sx={{ display: ["block", null, "none"] }} /> */}
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            {/* Logo */}
            <Box px="8" mt="20px" mb="40px">
              <Img src={logo} alt="logo" />
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default function Navbar() {
  let location = useLocation();
  let slug = location.pathname.split("/")[1];

  return (
    <>
      <Flex justifyContent="space-between">
        <HStack spacing={5}>
          <Box sx={{ display: ["block", null, "none"] }}>
            <MenuDrawer />
          </Box>

          <Box>
            <Text
              fontSize="18px"
              fontWeight="700"
              color="#2A2A2A"
              textTransform="capitalize"
            >
              {slug}
            </Text>
            <Text fontSize="12px">Today, 19th October 2020</Text>
          </Box>
        </HStack>

        <HStack spacing={5}>
          {/* Notification */}
          <Popover>
            <PopoverTrigger>
              <Flex
                sx={{
                  borderRadius: "50%",
                  position: "relative",
                  width: "50px",
                  height: "50px",
                }}
                bg="#F5F5F5"
                justifyContent="center"
                alignItems="center"
                cursor="pointer"
              >
                <NotificationIcon color="#A6ABB2" />
                <Box
                  sx={{
                    position: "absolute",
                    top: "-8px",
                    right: "-5px",
                    borderRadius: "50%",
                    bg: "#fffff",
                    padding: "8px",
                  }}
                >
                  <Box
                    width="10px"
                    height="10px"
                    bg="red"
                    sx={{ borderRadius: "50%" }}
                  ></Box>
                </Box>
              </Flex>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Notifications</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>
                  <Text colorScheme="blue">Nothing has arrived yet :)</Text>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
          {/* avatar */}
          <Avatar src="/avatar.png" />
        </HStack>
      </Flex>
    </>
  );
}
