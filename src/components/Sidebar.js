import { Img } from "@chakra-ui/image";
import { Box, Stack, Text } from "@chakra-ui/layout";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";
import logo from "../logo.svg";

const pages = [
  {
    name: "Main pages",
    links: [
      {
        title: "Dashboard",
        icon: "",
      },
      {
        title: "Balances",
        icon: "",
      },
      {
        title: "Customers",
        icon: "",
      },
      {
        title: "Analytics",
        icon: "",
      },
    ],
  },
  {
    name: "General",
    links: [
      {
        title: "Settings",
        icon: "",
      },
      {
        title: "Team",
        icon: "",
      },
      {
        title: "Contact",
        icon: "",
      },
    ],
  },
];

function NavLink({ link }) {
  const [active, setActive] = useState(false);
  const [focus, setFocus] = useState(false);
  const location = useLocation();
  let history = useHistory();

  useEffect(() => {
    let slug = location.pathname.split("/")[1];
    if (slug.toLowerCase() === link.title.toLowerCase()) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [link.title, location.pathname]);

  function handleRoute() {
    history.push(`${link.title.toLowerCase()}`);
  }

  let bg = active ? "#F5F5F5" : focus ? "#FFFFFF" : "";
  let color = active ? "#2A2A2A" : focus ? "#A6ABB2" : "";

  return (
    <Box
      onMouseOver={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      onClick={handleRoute}
      px="8"
      py="4"
      bg={bg}
      color={color}
      sx={{ cursor: "pointer" }}
    >
      {link.title}
    </Box>
  );
}

function SidebarContent() {
  return (
    <Stack spacing={10}>
      {pages.map((page) => (
        <Stack>
          <Text mb={2} sx={{ fontWeight: "600" }} px="8">
            {page.name}
          </Text>
          {page.links.map((link) => (
            <NavLink link={link} />
          ))}
        </Stack>
      ))}
    </Stack>
  );
}

function Sidebar() {
  const ref = useRef();

  return (
    <>
      {/* sidebar */}
      <Box
        ref={ref}
        as="nav"
        aria-label="Main Navigation"
        pos="sticky"
        sx={{
          overscrollBehavior: "contain",
        }}
        top="6.5rem"
        w="280px"
        h="calc(100vh)"
        pb="6"
        pt="4"
        overflowY="auto"
        flexShrink={0}
        display={{ base: "none", md: "block" }}
        bg="#eaeaea"
      >
        {/* Logo */}
        <Box px="8" mt="40px" mb="40px">
          <Img src={logo} alt="logo" />
        </Box>

        <SidebarContent />
      </Box>
    </>
  );
}

export default Sidebar