import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import { useLocation } from "react-router";

export default function Navbar() {
  let location = useLocation();
  let slug = location.pathname.split("/")[1];

  return (
    <>
      <Flex justifyContent="space-between">
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

        <HStack>
          {/* icon */}

          {/* avatar */}
          <Avatar src="/avatar.png">
            <AvatarBadge
              sx={{ top: "-12px" }}
              borderColor="papayawhip"
              bg="#FF0000"
              boxSize="1.25em"
            />
          </Avatar>
        </HStack>
      </Flex>
    </>
  );
}
