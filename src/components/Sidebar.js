import Icon from "@chakra-ui/icon";
import { Img } from "@chakra-ui/image";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";
import logo from "../logo.svg";

const logoutIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="#A6ABB2"
      fill-rule="evenodd"
      d="M7.49823.51612c1.78443 0 3.24087 1.40545 3.32267 3.16968l.0036.15657v.69975c0 .31066-.2519.5625-.5625.5625-.28479 0-.52014-.21161-.55739-.48617l-.00513-.07633v-.69975c0-1.17217-.91651-2.13055-2.07192-2.19751l-.12933-.00374H3.84198c-1.17154 0-2.12981.9166-2.19676 2.07193l-.00374.12932v8.34753c0 1.1721.91643 2.1305 2.07124 2.1975l.12926.0037h3.66375c1.16802 0 2.12328-.9132 2.19002-2.0641l.00373-.1289v-.7072c0-.3107.25184-.5625.56252-.5625.2848 0 .5201.2116.5573.4861l.0052.0764v.7072c0 1.7784-1.40012 3.2303-3.15801 3.3142l-.16076.0038H3.84198c-1.78383 0-3.24012-1.4056-3.32188-3.1697l-.00362-.1565V3.84237c0-1.78429 1.40532-3.24085 3.16898-3.32263l.15652-.00362h3.65625zM15.7464 7.61c.1067.10238.1732.24645.1732.40605 0 .16126-.0679.30667-.1766.40924l-2.1852 2.17622c-.2201.2193-.5763.2185-.7955-.0016-.1993-.2001-.2168-.5126-.0529-.73252l.0546-.06298 1.23-1.22585H6.32635c-.31066 0-.5625-.25185-.5625-.56251 0-.28477.21161-.52011.48617-.55736l.07633-.00514h7.66895L12.764 6.22835c-.2001-.19925-.219-.51171-.0561-.73228l.0543-.06321c.1993-.20015.5118-.219.7323-.0561l.0632.05433 2.1887 2.1789z"
      clip-rule="evenodd"
    />
  </Icon>
);

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
