import { Box, Center, Grid, Text } from "@chakra-ui/layout";
import React from "react";
import { Route, Switch, useLocation } from "react-router";
import Balances from "../components/Balances";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Landing = () => {
  let location = useLocation();
  let slug = location.pathname.split("/")[1];
  return (
    <>
      <Grid templateColumns="auto 1fr">
        {/* sidebar */}
        <Sidebar />

        <Grid templateRows="auto 1fr" px={8} py={5}>
          {/* navbar */}
          <Navbar />

          {/* main */}
          <Box mt={10}>
            <Switch>
              <Route path="/balances" component={Balances} />

              <Route>
                <Center>
                  <Text fontSize="24px">
                    <Text
                      as="span"
                      sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                    >
                      {slug}
                    </Text>{" "}
                    appears here
                  </Text>
                </Center>
              </Route>
            </Switch>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Landing;
