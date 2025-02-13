"use client";

import Link from "next/link";
import CountryData from "../../country-data/country-data.json";
import BackButton from "../components/back-button";

import {
  Flex,
  Title,
  useMantineTheme,
  SimpleGrid,
  Anchor,
  Space,
} from "@mantine/core";

export default function CountryProfiles() {
  const theme = useMantineTheme();
  const countries = Object.keys(CountryData);

  return (
    <Flex direction="column">
      <Space h="30px" hiddenFrom="sm" />

      <BackButton ReturnPage="/" />
      <Flex
        bg={theme.colors.gray[2]}
        align="center"
        justify="center"
        direction="column"
        w="100%"
        pt="15px"
        pb="20px"
        mt="sm"
        style={{ borderRadius: "8px" }}
        bd={`1px solid ${theme.colors.gray[4]}`}
      >
        <Title mb="lg">Countries</Title>
        <SimpleGrid
          cols={{ base: 2, sm: 4 }}
          verticalSpacing="2px"
          spacing="20px"
        >
          {countries.map((country) => (
            <Anchor
              component={Link}
              style={{ fontSize: "20px" }}
              href={`/country-profiles/${country.toLowerCase()}`}
              key={country}
            >
              {country}
            </Anchor>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
