"use client";

import { Flex, Title, useMantineTheme, List, SegmentedControl, Text, SimpleGrid, ListItem } from "@mantine/core";
import { useState } from "react";
import Economy from "../economy/page";
import BackButton from "../components/back-button";

export default function Methodology() {
  const theme = useMantineTheme();
  const [value, setValue] = useState("Home")


  const methodology_economy = [
    [
      "Gdp per capita",
      "The amount of money the economy produces each year for every person, on average",
      "imf",
    ],
    [
      "Gdp per capita PPP",
      "Gdp per capita adjusted to local prices (how much can the average person buy)",
      "imf",
    ],
    [
      "Net average monthly wage",
      "Average monthly salary after tax",
      "eurostat",
    ],
    [
      "Unemployment",
      "How much of the eligible workforce is unemployed (in %)",
      "eurostat",
    ],
    [
      "House price to wage",
      "Average house price to average salary",
      "eurostat, other ...",
    ],
    [
      "Gdp growth past 5 years",
      "How much the gdp has grown past 5 years (in %)",
      "imf",
    ],
    ["Debt to gdp", "National debt compared to gdp (in %)", "imf"],
    [
      "Corporate tax",
      "Tax on corporate profits (in %)",
      "wikipedia, other ...",
    ],
    [
      "Capital gains tax",
      "Tax on gains of stocks (in %)",
      "wikipedia, other ...",
    ],
    [
      "Value added tax",
      "Tax on goods and services (in %)",
      "wikipedia, other ...",
    ],
    [
      "R&D (Innovation) to gdp",
      "How much money is the country speding on research and development to gdp",
      "eurostat",
    ],
  ];

  const methodology_society = [
    [
      "Trust in other people",
      "How much people would say people can generally be trusted (in %)",
      "eurostat",
    ],
    [
      "Voting participation",
      "Voter turnout in the last parliamentary elections (in %)",
      "politico",
    ],
    [
      "Lack of corruption score",
      "How much corruption is percieved by public (higher score = less corruption)",
      "transparency international",
    ],
    [
      "Religiosity",
      'Number of people responding yes to "I believe there is a God" (in %)',
      "eurobarometer",
    ],
    [
      "Tertiary education",
      "Percentage of population that completed tertiary(university) education (in %)",
      "eurostat",
    ],
    [
      "Pisa score",
      "Score of 16 year olds in math, science and literature",
      "oecd",
    ],
    [
      "Obesity rate",
      "Percentage of population that is considered obese (in %)",
      "eurostat",
    ],
    [
      "Fertility rate",
      "How much children does the average woman have",
      "eurostat",
    ],
    ["Life expectancy", "Expected life expentancy at birth", "eurostat"],
  ];


  return <>
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
  pl={"md"}
  pr={"md"}>

    <Title>
      Methodology
    </Title>

    <SegmentedControl  styles={{
        label: { color: '#0946ff' }, 
      }} 
      value={value} 
      onChange={setValue} 
      data={["Home","Economy","Society"]}
      />

      {value === "Economy" ? 
      
      <Flex direction={"column"}>
      
      <Flex direction="column" w={"100%"} mb={"xl"} mt={"lg"} >
        <Title order={2} mb={"xs"}>Economy Leaderboard</Title>
        <Text mb={"xs"}>Indicator weights, total max score 1.0 (all add up to 1.0). <br/>Max score in category = country with the best score</Text>
        <List>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 4 }}
        verticalSpacing="5px"
        spacing="20px">
          <ListItem>Gdp per capita ppp - <strong>0.2</strong></ListItem>
          <ListItem>Unemployment - <strong>0.1</strong></ListItem>
          <ListItem>Debt to gdp - <strong>0.075</strong></ListItem>
          <ListItem>R&D to gdp - <strong>0.175</strong></ListItem>
          <ListItem>Taxes - <strong>0.05</strong></ListItem>
          <ListItem>Net average wage - <strong>0.3</strong></ListItem>
          <ListItem>House price to wage - <strong>0.05</strong></ListItem>
          <ListItem>Gdp growth past 5 years - <strong>0.05</strong></ListItem>
          </SimpleGrid>

        </List>
      </Flex>

      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 2, lg: 4 }}
        verticalSpacing="5px"
        spacing="20px"
      >
      {methodology_economy.map((item, index) => (
        <Flex key={index} direction="column" maw="200px" mr="10px" mb="8px">
          <Title order={4} ml="0">
            {item[0]}
          </Title>
          <Text >{item[1]}</Text>
          <Text fs="italic">
            Source: {item[2]}
          </Text>
        </Flex>
      ))}
      </SimpleGrid>
      </Flex>
      : 
      (value === "Society" ? 

      <Flex direction={"column"}>

      <Flex direction="column" w={"100%"} mb={"xl"} mt={"lg"} >
      <Title order={2} mb={"xs"}> Society Leaderboard</Title>
      <Text mb={"xs"}>Indicator weights, total max score 1.0 (all add up to 1.0). <br/>Max score in category = country with the best score</Text>
      <List>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 4 }}
      verticalSpacing="5px"
      spacing="20px">
        <ListItem>Fertility rate - <strong>0.05</strong></ListItem>
        <ListItem>Obesity rate - <strong>0.1</strong></ListItem>
        <ListItem>Life expectancy - <strong>0.25</strong></ListItem>
        <ListItem>Lack of corruption - <strong>0.2</strong></ListItem>
        <ListItem>Trust in other people - <strong>0.1</strong></ListItem>
        <ListItem>Pisa score - <strong>0.2</strong></ListItem>
        <ListItem>Risk of poverty - <strong>0.1</strong></ListItem>
        </SimpleGrid>

      </List>
    </Flex>

    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 2, lg: 4 }}
      verticalSpacing="5px"
      spacing="20px"
    >
    {methodology_society.map((item, index) => (
      <Flex key={index} direction="column" maw="200px" mr="10px" mb="8px">
        <Title order={4} ml="0">
          {item[0]}
        </Title>
        <Text >{item[1]}</Text>
        <Text fs="italic">
          Source: {item[2]}
        </Text>
      </Flex>
    ))}
    </SimpleGrid>
    </Flex>
      :
      <Flex direction={"column"} >
      <Flex direction="column" w={"100%"} mb={"xl"} mt={"lg"} >

        <Title order={2} mb={"xs"}>Main leaderboard</Title>
        <Text mb={"xs"}>Ranking methodology on the main leaderboard, total max score 1.0 (all add up to 1.0). <br/>Max score in category = country with the best score</Text>
        
        <List>
        <SimpleGrid cols={{ base: 1}}
        verticalSpacing="5px"
        spacing="20px">
          <ListItem>Overall score on the economy leaderboard - <strong>0.5</strong></ListItem>
          <ListItem>Overall score on the society leaderboard - <strong>0.5</strong></ListItem>
        </SimpleGrid>
        </List>
      </Flex>
      </Flex>
    ) }
  </Flex>
  </>;
}
