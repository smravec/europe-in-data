"use client";

import { Flex, Title, Text, useMantineTheme, Space } from "@mantine/core";

import Leaderboard from "./leaderboard";
import CountryData from "../../country-data/country-data.json";
import MethodologyData from "../../country-data/methodology.json"
import BackButton from "./back-button";

export default function Indicator(props) {
  const theme = useMantineTheme();

  const Year = props.Year;
  const Indicator = props.Indicator;
  const Order = props.Order;
  const DecimalPlaces = props.DecimalPlaces;
  const Units = props.Units;
  const ReturnPage = props.ReturnPage;

  let data = {
    units: Units,
    order: Order,
    headers: ["Rank", "Country", Indicator],
    body: [],
  };

  function getData(indicator, year) {
    let data_to_return = [];
    const countries = Object.keys(CountryData);

    countries.forEach((country) => {
      data_to_return.push([
        1,
        CountryData[country]["Icon"] + " " + country,
        CountryData[country][year][indicator].toFixed(DecimalPlaces),
      ]);
    });

    return data_to_return;
  }

  data.body = getData(Indicator, Year.toString());

  return (
    <Flex direction="column">
      <BackButton ReturnPage={ReturnPage} />
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
        <Title ta={"center"}>
          {data.headers[2]} {data.units === "" ? "" : `in ${data.units}`}
        </Title>
        <Text size="lg">
          {data.headers[2] !== "Religiosity"
            ? data.order === "biggest"
              ? "(Bigger is better)"
              : "(Smaller is better)"
            : ""}
        </Text>

        <Text ta={"center"} >{MethodologyData[Indicator]["methodology"]}</Text>
        <Space h={"sm"}/>

        <Leaderboard height={510} data={data} />
      </Flex>
    </Flex>
  );
}
