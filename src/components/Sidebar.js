import Icon from "@chakra-ui/icon";
import { Img } from "@chakra-ui/image";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";
import logo from "../logo.svg";

const DashboardIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="currentColor"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
);
const BalancesIcon = (props) => <Icon {...props} />;
const CustomersIcon = (props) => <Icon {...props} />;
const AnalyticsIcon = (props) => <Icon {...props} />;
const SettingsIcon = (props) => <Icon {...props} />;
const TeamIcon = (props) => <Icon {...props} />;
const ContactIcon = (props) => <Icon {...props} />;

const pages = [
  {
    name: "Main pages",
    links: [
      {
        title: "Dashboard",
        Icon: DashboardIcon,
      },
      {
        title: "Balances",
        Icon: BalancesIcon,
      },
      {
        title: "Customers",
        Icon: CustomersIcon,
      },
      {
        title: "Analytics",
        Icon: AnalyticsIcon,
      },
    ],
  },
  {
    name: "General",
    links: [
      {
        title: "Settings",
        Icon: SettingsIcon,
      },
      {
        title: "Team",
        Icon: TeamIcon,
      },
      {
        title: "Contact",
        Icon: ContactIcon,
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
  let iconColor = active ? "#2C665D" : focus ? "#A6ABB2" : "#A6ABB2";

  const { Icon, title } = link;

  return (
    <Flex
      onMouseOver={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      onClick={handleRoute}
      px="8"
      py="4"
      bg={bg}
      color={color}
      sx={{ cursor: "pointer" }}
      alignItems="center"
    >
      <Icon color={iconColor} />
      <Text ml={3}>{title}</Text>
    </Flex>
  );
}

export function SidebarContent() {
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
        top="0"
        w="280px"
        h="calc(100vh)"
        pb="6"
        pt="3"
        overflowY="auto"
        flexShrink={0}
        display={{ base: "none", md: "block" }}
        bg="#eaeaea"
      >
        {/* Logo */}
        <Box px="8" mt="20px" mb="40px">
          <Img src={logo} alt="logo" />
        </Box>

        <SidebarContent />
      </Box>
    </>
  );
}

export default Sidebar;
