"use client";

import Link from "next/link";
import CountryData from "../../country-data/country-data.json";

import {
  Flex,
  Title,
  useMantineTheme,
  SimpleGrid,
  Anchor,
} from "@mantine/core";

export default function CountryProfiles() {
  const theme = useMantineTheme();
  const countries = Object.keys(CountryData);

  return (
    <Flex
      bg={theme.colors.gray[2]}
      direction="column"
      align="center"
      justify="center"
      w="100%"
      pt="15px"
      pb="20px"
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
  );
}
