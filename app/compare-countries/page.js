"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { useEffect, useState } from "react";

import CountryData from "../../country-data/country-data.json";
import BackButton from "../components/back-button";

import FormatBigNumber from "../lib/format-big-number";

import { Table, Title, Flex } from "@mantine/core";

function CompareCountries() {
  const params = useSearchParams();

  const [country1, setCountry1] = useState("Austria");
  const [country2, setCountry2] = useState("Austria");

  useEffect(() => {
    const country1 = params.get("country1");
    const country2 = params.get("country2");
    if (country1) {
      setCountry1(country1[0].toUpperCase() + country1.slice(1));
      setCountry2(country2[0].toUpperCase() + country2.slice(1));
    }
  }, [params]);

  const EconomyIndicators = [
    ["Gdp per capita", 2023, "biggest", "€", 0],
    ["Gdp per capita PPP", 2023, "biggest", "€", 0],
    ["Net average monthly wage", 2023, "biggest", "€", 0],
    ["Unemployment", 2023, "smallest", "%", 2],
    ["House price to wage", 2023, "smallest", "", 1],
    ["Gdp growth past 5 years", 2023, "biggest", "%", 2],
    ["Debt to gdp", 2023, "smallest", "%", 0],
    ["Corporate tax", 2023, "smallest", "%", 1],
    ["Capital gains tax", 2023, "smallest", "%", 1],
    ["Value added tax", 2023, "smallest", "%", 1],
    ["R&D (Innovation) to gdp", 2021, "biggest", "%", 2],
  ];

  const Economy = (
    <Table.Tbody>
      {EconomyIndicators.map((indicator, index) => {
        return (
          <Table.Tr key={index}>
            <Table.Th visibleFrom="sm">{indicator[0]}</Table.Th>
            <Table.Th hiddenFrom="sm" style={{ overflow: "scroll" }}>
              {indicator[0]}
            </Table.Th>
            <Table.Td visibleFrom="sm">
              {" "}
              {FormatBigNumber(
                CountryData[country1][indicator[1]][indicator[0]].toFixed(
                  indicator[4],
                ),
              )}{" "}
              {indicator[3]}
            </Table.Td>
            <Table.Td hiddenFrom="sm" style={{ overflow: "scroll" }}>
              {" "}
              {FormatBigNumber(
                CountryData[country1][indicator[1]][indicator[0]].toFixed(
                  indicator[4],
                ),
              )}{" "}
              {indicator[3]}
            </Table.Td>
            <Table.Td visibleFrom="sm">
              {" "}
              {FormatBigNumber(
                CountryData[country2][indicator[1]][indicator[0]].toFixed(
                  indicator[4],
                ),
              )}{" "}
              {indicator[3]}
            </Table.Td>
            <Table.Td hiddenFrom="sm" style={{ overflow: "scroll" }}>
              {" "}
              {FormatBigNumber(
                CountryData[country2][indicator[1]][indicator[0]].toFixed(
                  indicator[4],
                ),
              )}{" "}
              {indicator[3]}
            </Table.Td>
            {CountryData[country1][indicator[1]][indicator[0]] <=
            CountryData[country2][indicator[1]][indicator[0]] ? (
              <Table.Td
                hiddenFrom="sm"
                style={{ color: "green", overflow: "scroll" }}
              >
                +
                {CountryData[country1][indicator[1]][indicator[0]] ==
                CountryData[country2][indicator[1]][indicator[0]]
                  ? "0"
                  : Math.trunc(
                      ((CountryData[country2][indicator[1]][indicator[0]] -
                        CountryData[country1][indicator[1]][indicator[0]]) /
                        CountryData[country1][indicator[1]][indicator[0]]) *
                        100,
                    )}{" "}
                %
              </Table.Td>
            ) : (
              <Table.Td
                hiddenFrom="sm"
                style={{ color: "red", overflow: "scroll" }}
              >
                -
                {Math.trunc(
                  ((CountryData[country2][indicator[1]][indicator[0]] -
                    CountryData[country1][indicator[1]][indicator[0]]) /
                    CountryData[country1][indicator[1]][indicator[0]]) *
                    100,
                )}{" "}
                %
              </Table.Td>
            )}
            {CountryData[country1][indicator[1]][indicator[0]] <=
            CountryData[country2][indicator[1]][indicator[0]] ? (
              <Table.Td visibleFrom="sm" style={{ color: "green" }}>
                +
                {CountryData[country1][indicator[1]][indicator[0]] ==
                CountryData[country2][indicator[1]][indicator[0]]
                  ? "0"
                  : Math.trunc(
                      ((CountryData[country2][indicator[1]][indicator[0]] -
                        CountryData[country1][indicator[1]][indicator[0]]) /
                        CountryData[country1][indicator[1]][indicator[0]]) *
                        100,
                    )}{" "}
                %
              </Table.Td>
            ) : (
              <Table.Td visibleFrom="sm" style={{ color: "red" }}>
                -
                {Math.trunc(
                  ((CountryData[country2][indicator[1]][indicator[0]] -
                    CountryData[country1][indicator[1]][indicator[0]]) /
                    CountryData[country1][indicator[1]][indicator[0]]) *
                    100,
                )}{" "}
                %
              </Table.Td>
            )}
          </Table.Tr>
        );
      })}
    </Table.Tbody>
  );

  const SocietyIndicators = [
    ["Trust in other people", 2023, "biggest", "%", 0],
    ["Voting participation", 2023, "biggest", "%", 1],
    ["Lack of corruption score", 2023, "biggest", "", 0],
    ["Religiosity", 2010, "biggest", "%", 0],
    ["Risk of poverty", 2023, "smallest", "%", 1],
    ["Tertiary education", 2023, "biggest", "%", 1],
    ["Pisa score", 2022, "biggest", "", 0],
    ["Obesity rate", 2022, "smallest", "%", 1],
    ["Fertility rate", 2022, "biggest", "", 2],
    ["Life expectancy", 2022, "biggest", "", 1],
  ];
  const Society = (
    <Table.Tbody>
      {SocietyIndicators.map((indicator, index) => {
        return (
          <Table.Tr key={index}>
            <Table.Th visibleFrom="sm">{indicator[0]}</Table.Th>
            <Table.Th hiddenFrom="sm" style={{ overflow: "scroll" }}>
              {indicator[0]}
            </Table.Th>
            <Table.Td visibleFrom="sm">
              {" "}
              {FormatBigNumber(
                CountryData[country1][indicator[1]][indicator[0]].toFixed(
                  indicator[4],
                ),
              )}{" "}
              {indicator[3]}
            </Table.Td>
            <Table.Td hiddenFrom="sm" style={{ overflow: "scroll" }}>
              {" "}
              {FormatBigNumber(
                CountryData[country1][indicator[1]][indicator[0]].toFixed(
                  indicator[4],
                ),
              )}{" "}
              {indicator[3]}
            </Table.Td>

            <Table.Td visibleFrom="sm">
              {" "}
              {FormatBigNumber(
                CountryData[country2][indicator[1]][indicator[0]].toFixed(
                  indicator[4],
                ),
              )}{" "}
              {indicator[3]}
            </Table.Td>
            <Table.Td hiddenFrom="sm" style={{ overflow: "scroll" }}>
              {" "}
              {FormatBigNumber(
                CountryData[country2][indicator[1]][indicator[0]].toFixed(
                  indicator[4],
                ),
              )}{" "}
              {indicator[3]}
            </Table.Td>

            {CountryData[country1][indicator[1]][indicator[0]] <=
            CountryData[country2][indicator[1]][indicator[0]] ? (
              <Table.Td visibleFrom="sm" style={{ color: "green" }}>
                +
                {CountryData[country1][indicator[1]][indicator[0]] ==
                CountryData[country2][indicator[1]][indicator[0]]
                  ? "0"
                  : Math.trunc(
                      ((CountryData[country2][indicator[1]][indicator[0]] -
                        CountryData[country1][indicator[1]][indicator[0]]) /
                        CountryData[country1][indicator[1]][indicator[0]]) *
                        100,
                    )}{" "}
                %
              </Table.Td>
            ) : (
              <Table.Td visibleFrom="sm" style={{ color: "red" }}>
                -
                {Math.trunc(
                  ((CountryData[country2][indicator[1]][indicator[0]] -
                    CountryData[country1][indicator[1]][indicator[0]]) /
                    CountryData[country1][indicator[1]][indicator[0]]) *
                    100,
                )}{" "}
                %
              </Table.Td>
            )}

            {CountryData[country1][indicator[1]][indicator[0]] <=
            CountryData[country2][indicator[1]][indicator[0]] ? (
              <Table.Td
                hiddenFrom="sm"
                style={{ color: "green", overflow: "scroll" }}
              >
                +
                {CountryData[country1][indicator[1]][indicator[0]] ==
                CountryData[country2][indicator[1]][indicator[0]]
                  ? "0"
                  : Math.trunc(
                      ((CountryData[country2][indicator[1]][indicator[0]] -
                        CountryData[country1][indicator[1]][indicator[0]]) /
                        CountryData[country1][indicator[1]][indicator[0]]) *
                        100,
                    )}{" "}
                %
              </Table.Td>
            ) : (
              <Table.Td
                hiddenFrom="sm"
                style={{ color: "red", overflow: "scroll" }}
              >
                -
                {Math.trunc(
                  ((CountryData[country2][indicator[1]][indicator[0]] -
                    CountryData[country1][indicator[1]][indicator[0]]) /
                    CountryData[country1][indicator[1]][indicator[0]]) *
                    100,
                )}{" "}
                %
              </Table.Td>
            )}
          </Table.Tr>
        );
      })}
    </Table.Tbody>
  );

  return (
    <Suspense>
      <Flex direction={"column"}>
        <BackButton />

        <Title hiddenFrom="sm" order={1} mb={"lg"} mt={"sm"} ta={"center"}>
          {CountryData[country1]["Icon"]} {country1} <br /> vs <br />{" "}
          {CountryData[country2]["Icon"]} {country2}
        </Title>

        <Title visibleFrom="sm" order={1} mb={"lg"} mt={"sm"} ta={"center"}>
          ({CountryData[country1]["Icon"]} {country1}) vs (
          {CountryData[country2]["Icon"]} {country2})
        </Title>

        <Title order={2} mb={"lg"}>
          Economy
        </Title>
        <Table variant="vertical" layout="fixed">
          {Economy}
        </Table>

        <Title order={2} mb={"lg"} mt={"lg"}>
          Society
        </Title>
        <Table variant="vertical" layout="fixed">
          {Society}
        </Table>
      </Flex>
    </Suspense>
  );
}

export default function CompareCountriesPage() {
  return (
    <Suspense>
      <CompareCountries />
    </Suspense>
  );
}
