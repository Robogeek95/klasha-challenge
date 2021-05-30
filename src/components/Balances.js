import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { Box, Flex, Grid, HStack, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Td } from "@chakra-ui/table";
import { Tbody } from "@chakra-ui/table";
import { Thead } from "@chakra-ui/table";
import { Tr } from "@chakra-ui/table";
import { Th } from "@chakra-ui/table";
import { Table } from "@chakra-ui/table";
import React from "react";
import payoutData from "../lib/payoutData.json";

const Balances = () => {
  return (
    <>
      <Grid
        templateColumns="repeat(2, 1fr)"
        sx={{ border: "1px solid #EBEBEB", borderRadius: "10px" }}
        gap={5}
        maxWidth="685px"
      >
        <Box p={5}>
          <Flex justifyContent="space-between">
            <Text>Total account balance</Text>

            <Box>
              <Select value="USD">
                <option>USD</option>
                <option>KES</option>
                <option>NGN</option>
                <option>GHC</option>
              </Select>
            </Box>
          </Flex>

          <Text color="#2A2A2A" fontSize="36px" fontWeight="bold">
            $5,332.18
          </Text>
          <Text color="#A6ABB2" fontSize="16px">
            1 USD = 381.97 NGN
          </Text>
        </Box>
        <Box
          sx={{ border: "1px solid #EBEBEB", borderRadius: "10px" }}
          bg="#F5F5F5"
          p={5}
        >
          <Text color="#2A2A2A" fontSize="14px">
            Funds on hold
          </Text>

          <Text mt={8} color="#2A2A2A" fontSize="36px" fontWeight="bold">
            $5,332.18
          </Text>
        </Box>
      </Grid>

      <Stack spacing={5} mt={10}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text color="#2A2A2A" fontSize="18px">
            Payout table
          </Text>
          <HStack>
            <Input type="search" placeholder="search something" />
            <Input type="date" />
            <Button colorScheme="green" size="md" px={8}>
              Payout
            </Button>
          </HStack>
        </Flex>
        <Box>
          <Table variant="simple" size="lg">
            <Thead bg="#F5F5F5">
              <Tr>
                <Th>Payout ID</Th>
                <Th>Source</Th>
                <Th>Date</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody
              sx={{
                tr: { cursor: "pointer" },
                "tr:hover": { bg: "#FFFFFF", color: "#A6ABB2" },
              }}
            >
              {payoutData.map((data) => (
                <Tr>
                  <Td>{data.id}</Td>
                  <Td>{data.source}</Td>
                  <Td>{data.date}</Td>
                  <Td>{data.amount}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Button
            size="lg"
            colorScheme="green"
            variant="outline"
            isFullWidth
            sx={{ borderColor: "#EBEBEB" }}
          >
            See more
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default Balances;
