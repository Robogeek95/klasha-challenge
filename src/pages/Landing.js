import { Center, Grid, Text } from "@chakra-ui/layout";
import React from "react";
import { Route, Switch, useLocation } from "react-router";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";

const Landing = () => {
  let location = useLocation();
  let slug = location.pathname.split("/")[1];
  return (
    <>
      <Grid templateColumns="auto 1fr">
        {/* sidebar */}
        <Sidebar />

        {/* main */}
        <Switch>
          <Route path="/dashboard" component={Dashboard} />

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
      </Grid>
    </>
  );
};

export default Landing;
