"use client";

import Link from "next/link";
import {
  Title,
  useMantineTheme,
  Flex,
  SimpleGrid,
  Anchor,
  Text,
  Space,
} from "@mantine/core";
import OwnScore from "../components/own-score";
import BackButton from "../components/back-button";

export default function Society() {
  const theme = useMantineTheme();

  const methodology = [
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
      "Score of 16 year olds in math science and literature1",
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

  return (
    <Flex direction="column">
      <Space h="30px" hiddenFrom="sm" />

      <BackButton ReturnPage="/" />
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
        mt="sm"
        pl="20px"
      >
        <Title mb="lg">Society indicators</Title>
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 2, lg: 4 }}
          verticalSpacing="2px"
          spacing="20px"
        >
          <Anchor
            component={Link}
            style={{ fontSize: "20px", whiteSpace: "nowrap" }}
            href="/society/trust-in-other-people"
          >
            Trust in other people
          </Anchor>
          <Anchor
            component={Link}
            style={{ fontSize: "20px", whiteSpace: "nowrap" }}
            href="/society/voting-participation"
          >
            Voting participation
          </Anchor>
          <Anchor
            component={Link}
            style={{ fontSize: "20px", whiteSpace: "nowrap" }}
            href="/society/lack-of-corruption-score"
          >
            Lack of corruption score
          </Anchor>
          <Anchor
            component={Link}
            style={{ fontSize: "20px", whiteSpace: "nowrap" }}
            href="/society/religiosity"
          >
            Religiosity
          </Anchor>
          <Anchor
            component={Link}
            style={{ fontSize: "20px", whiteSpace: "nowrap" }}
            href="/society/tertiary-education"
          >
            Tertiary education
          </Anchor>
          <Anchor
            component={Link}
            style={{ fontSize: "20px", whiteSpace: "nowrap" }}
            href="/society/pisa-score"
          >
            Pisa score
          </Anchor>
          <Anchor
            component={Link}
            style={{ fontSize: "20px", whiteSpace: "nowrap" }}
            href="/society/life-expectancy"
          >
            Life expectancy
          </Anchor>
          <Anchor
            component={Link}
            style={{ fontSize: "20px", whiteSpace: "nowrap" }}
            href="/society/risk-of-poverty"
          >
            Risk of poverty
          </Anchor>
          <Anchor
            component={Link}
            style={{ fontSize: "20px", whiteSpace: "nowrap" }}
            href="/society/fertility-rate"
          >
            Fertility rate
          </Anchor>
          <Anchor
            component={Link}
            style={{ fontSize: "20px", whiteSpace: "nowrap" }}
            href="/society/life-expectancy"
          >
            Life expectancy
          </Anchor>
        </SimpleGrid>
      </Flex>

      <Space h="lg" />
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
        mt="sm"
        pl="10px"
        pr="10px"
      >
        <Title ta="center">Overall society ranking</Title>
        <Text ml="20px" mr="20px" ta="center" c={theme.colors.gray[7]}>
          Ranking calculated from the following indicators: <br />
          <Anchor component={Link} href="/society/fertility-rate">
            Fertility rate
          </Anchor>
          ,
          <Anchor component={Link} href="/society/obesity-rate">
            {" Obesity rate"}
          </Anchor>
          ,
          <Anchor component={Link} href="/society/life-expectancy">
            {" Life expectancy"}
          </Anchor>
          ,
          <Anchor component={Link} href="/society/lack-of-corruption-score">
            {" Lack of corruption score"}
          </Anchor>
          ,
          <Anchor component={Link} href="/society/trust-in-other-people">
            {" Trust in other people"}
          </Anchor>
          ,
          <Anchor component={Link} href="/society/pisa-score">
            {" Pisa score"}
          </Anchor>
          ,
          <Anchor component={Link} href="/society/risk-of-poverty">
            {" Risk of poverty"}
          </Anchor>
          <br /> Learn more at the
          <Anchor component={Link} href="/methodology">
            {" methodology "}
          </Anchor>
          page
        </Text>
        <Space h="xs" />
        <OwnScore Category="Society" Order="biggest" Captions="" />
      </Flex>

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
        mt="sm"
        pl="20px"
      >
        <Title mb="lg">Methodology</Title>

        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 2, lg: 4 }}
          verticalSpacing="5px"
          spacing="20px"
        >
          {methodology.map((item, index) => (
            <Flex key={index} direction="column" maw="200px" mr="10px" mb="8px">
              <Title order={4} ml="0">
                {item[0]}
              </Title>
              <Text size="sm">{item[1]}</Text>
              <Text size="sm" fs="italic">
                Source: {item[2]}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
