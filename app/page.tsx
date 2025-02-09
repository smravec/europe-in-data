"use client";

import {
  Button,
  Title,
  useMantineTheme,
  Text,
  Anchor,
  Flex,
  Space,
  Grid,
  GridCol,
} from "@mantine/core";

import Link from "next/link";

//import leaflet component this way cause of old libs
//import dynamic from "next/dynamic";
//const EuropeMap = dynamic(() => import("./components/europe-map"), { ssr: false });

import { useRouter } from "next/navigation";
import { useState } from "react";

import SelectBox from "./components/select-box";
import OwnScore from "./components/own-score";

export default function Home() {
  const theme = useMantineTheme();
  const router = useRouter();

  const [country1, setCountry1] = useState("");
  const [country2, setCountry2] = useState("");

  return (
    <Flex
      bg="none"
      gap="md"
      justify="flex-start"
      align="center"
      direction="column"
      wrap="nowrap"
      pt="10px"
    >
      {/* <EuropeMap/> */}

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
        <Title fz={{ base: "28px", xs: "34px" }} ta="center">
          Overall country ranking
        </Title>
        <Text ml="20px" mr="20px" ta="center" c={theme.colors.gray[7]}>
          Ranking based on indicators from
          <Anchor component={Link} href="/economy">
            {" economy "}
          </Anchor>
          and
          <Anchor component={Link} href="/society">
            {" society "}
          </Anchor>
          pages. <br /> Learn more at the
          <Anchor component={Link} href="/methodology">
            {" methodology "}
          </Anchor>
          page
        </Text>
        <Space h="xs" />
        <OwnScore
          Category="Overall"
          Order="biggest"
          Captions="Based on society and economy indicators"
        />
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
        pl="10px"
        pr="10px"
      >
        <Title fz={{ base: "28px", xs: "34px" }}>Compare countries</Title>

        <Space h="md" />

        <Flex>
          <SelectBox SetCountry={setCountry1} />
          <Space w="sm" />
          <SelectBox SetCountry={setCountry2} />
        </Flex>

        <Space h="md" />

        <Button
          variant="filled"
          color="main"
          onClick={() => {
            if (country1 !== "" && country2 !== "") {
              router.push(
                `/compare-countries?country1=${country1.toLowerCase()}&country2=${country2.toLowerCase()}`,
              );
            }
          }}
        >
          Compare
        </Button>
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
        pl="10px"
        pr="10px"
      >
        <Title fz={{ base: "28px", xs: "34px" }}>All categories</Title>

        <Space h="md" />

        <Grid pr="40px" pl={{ base: "25%", lg: "40px" }}>
          <GridCol span={{ base: 12, md: 6, lg: 3 }}>
            <Flex direction="column">
              <Text size="28px" fw="600" fz={{ base: "24px", xs: "28px" }}>
                Economy
              </Text>
              <Space h="xs" />
              <Anchor component={Link} href="/economy/gdp-per-capita">
                Gdp per capita
              </Anchor>
              <Anchor component={Link} href="/economy/gdp-per-capita-ppp">
                Gdp per capita PPP
              </Anchor>
              <Anchor component={Link} href="/economy/net-average-monthly-wage">
                Net average monthly wage
              </Anchor>
              <Anchor component={Link} href="/economy/unemployment">
                Unemployment
              </Anchor>
              <Anchor component={Link} href="/economy/house-price-to-wage">
                House price to wage
              </Anchor>
              <Anchor component={Link} href="/economy/gdp-growth-past-5-years">
                Gdp growth past 5 years
              </Anchor>
              <Anchor component={Link} href="/economy/debt-to-gdp">
                Debt to gdp
              </Anchor>
              <Anchor component={Link} href="/economy/corporate-tax">
                Corporate tax
              </Anchor>
              <Anchor component={Link} href="/economy/capital-gains-tax">
                Capital gains tax
              </Anchor>
              <Anchor component={Link} href="/economy/value-added-tax">
                Value added tax
              </Anchor>
              <Anchor component={Link} href="/economy/rd-innovation-of-gdp">
                R&D (Innovation) of gdp
              </Anchor>
            </Flex>
          </GridCol>

          <GridCol span={{ base: 12, md: 6, lg: 3 }}>
            <Flex direction="column">
              <Text size="28px" fw="600" fz={{ base: "24px", xs: "28px" }}>
                Society
              </Text>
              <Space h="xs" />
              <Anchor component={Link} href="/society/trust-in-other-people">
                Trust in other people
              </Anchor>
              <Anchor component={Link} href="/society/voting-participation">
                Voting participation
              </Anchor>
              <Anchor component={Link} href="/society/lack-of-corruption-score">
                Lack of corruption score
              </Anchor>
              <Anchor component={Link} href="/society/religiosity">
                Religiosity
              </Anchor>
              <Anchor component={Link} href="/society/risk-of-poverty">
                Risk of poverty
              </Anchor>
              <Anchor component={Link} href="/society/tertiary-education">
                Tertiary education
              </Anchor>
              <Anchor component={Link} href="/society/pisa-score">
                Pisa score
              </Anchor>
              <Anchor component={Link} href="/society/obesity-rate">
                Obesity rate
              </Anchor>
              <Anchor component={Link} href="/society/fertility-rate">
                Fertility rate
              </Anchor>
              <Anchor component={Link} href="/society/life-expectancy">
                Life expectancy
              </Anchor>
            </Flex>
          </GridCol>

          <GridCol span={{ base: 12, md: 6, lg: 3 }}>
            <Flex direction="column">
              <Text size="28px" fw="600" fz={{ base: "24px", xs: "28px" }}>
                Government
              </Text>
              <Space h="xs" />
              <Anchor component={Link} href="/government">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/government">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/government">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/government">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/government">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/government">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/government">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/government">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/government">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/government">
                Coming soon
              </Anchor>
            </Flex>
          </GridCol>

          <GridCol span={{ base: 12, md: 6, lg: 3 }}>
            <Flex direction="column">
              <Text size="28px" fw="600" fz={{ base: "24px", xs: "28px" }}>
                Ease of integration
              </Text>
              <Space h="xs" />
              <Anchor component={Link} href="/ease-of-integration">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/ease-of-integration">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/ease-of-integration">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/ease-of-integration">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/ease-of-integration">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/ease-of-integration">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/ease-of-integration">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/ease-of-integration">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/ease-of-integration">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/ease-of-integration">
                Coming soon
              </Anchor>
            </Flex>
          </GridCol>

          <GridCol span={{ base: 12, md: 6, lg: 3 }}>
            <Flex direction="column">
              <Text size="28px" fw="600" fz={{ base: "24px", xs: "28px" }}>
                Environment
              </Text>
              <Space h="xs" />
              <Anchor component={Link} href="/environment">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/environment">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/environment">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/environment">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/environment">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/environment">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/environment">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/environment">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/environment">
                Coming soon
              </Anchor>
              <Anchor component={Link} href="/environment">
                Coming soon
              </Anchor>
            </Flex>
          </GridCol>
        </Grid>
      </Flex>
    </Flex>
  );
}
