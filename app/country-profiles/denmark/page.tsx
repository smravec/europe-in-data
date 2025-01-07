'use client'

import { Flex, Title, List, useMantineTheme, ListItem, Table } from "@mantine/core"

import CountryData from "../../../country-data/country-data.json" 


export default function Denmark(){
    const theme = useMantineTheme()

    return(
        <Flex direction={"column"} >
            <Title order={1} mb={"lg"}>
            {CountryData["Denmark"]["Icon"]} Denmark 
            </Title>

            <Title order={2} mb={"lg"}>
                Economy
            </Title>
            <Table variant="vertical" layout="fixed" >
                <Table.Tbody>
                    <Table.Tr>
                    <Table.Th >Gdp per capita</Table.Th>
                    <Table.Td> {Math.trunc(CountryData["Denmark"]["2023"]["Gdp per capita"])} €</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Gdp per capita PPP</Table.Th>
                    <Table.Td> {Math.trunc(CountryData["Denmark"]["2023"]["Gdp per capita PPP"])} €</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Net average wage</Table.Th>
                    <Table.Td>{Math.trunc(CountryData["Denmark"]["2023"]["Net average wage"])} €</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Unemployment</Table.Th>
                    <Table.Td>{CountryData["Denmark"]["2023"]["Unemployment"]} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Home affordability</Table.Th>
                    <Table.Td>{CountryData["Denmark"]["2023"]["Home affordability"]}</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Gdp growth past 5 years</Table.Th>
                    <Table.Td>{Math.trunc(CountryData["Denmark"]["2023"]["Gdp growth past 5 years"])} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Debt to gdp</Table.Th>
                    <Table.Td>{Math.trunc(CountryData["Denmark"]["2023"]["Government debt"])} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Corporate tax</Table.Th>
                    <Table.Td>{Math.trunc(CountryData["Denmark"]["2023"]["Corporate tax"])} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Capital gains tax</Table.Th>
                    <Table.Td>{Math.trunc(CountryData["Denmark"]["2023"]["Capital gains tax"])} %</Table.Td>
                    </Table.Tr>
                    
                    <Table.Tr>
                    <Table.Th>Value added tax</Table.Th>
                    <Table.Td>{Math.trunc(CountryData["Denmark"]["2023"]["Value added tax"])} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>R&D (Innovation) spending</Table.Th>
                    <Table.Td>{Math.trunc(CountryData["Denmark"]["2021"]["R&D (Innovation) spending"] * 100) / 100} %</Table.Td>
                    </Table.Tr>
                </Table.Tbody>
            </Table>


            <Title order={2} mb={"lg"} mt={"lg"}>
                Society
            </Title>
            
            <Table variant="vertical" layout="fixed" >
                <Table.Tbody>
                    <Table.Tr>
                    <Table.Th > Trust in other people</Table.Th>
                    <Table.Td>{Math.trunc(CountryData["Denmark"]["2023"]["Trust in other people"])} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Voting participation</Table.Th>
                    <Table.Td>{Math.trunc(CountryData["Denmark"]["2023"]["Voting participation"])} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Lack of corruption</Table.Th>
                    <Table.Td>{Math.trunc(CountryData["Denmark"]["2023"]["Corruption"])}</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Religiosity</Table.Th>
                    <Table.Td>{Math.trunc(CountryData["Denmark"]["2010"]["Believe in god"])} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Risk of poverty</Table.Th>
                    <Table.Td>{Math.trunc(CountryData["Denmark"]["2023"]["Risk of poverty"])} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Tertiary education</Table.Th>
                    <Table.Td>{Math.trunc(CountryData["Denmark"]["2023"]["Tertiary education"])} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Pisa score</Table.Th>
                    <Table.Td>{Math.trunc(CountryData["Denmark"]["2022"]["Pisa results"])}</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Obesity rate</Table.Th>
                    <Table.Td>{CountryData["Denmark"]["2022"]["Obesity rate"]} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Fertility rate</Table.Th>
                    <Table.Td>{CountryData["Denmark"]["2022"]["Fertility rate"]}</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Life expectancy</Table.Th>
                    <Table.Td>{CountryData["Denmark"]["2022"]["Life expectancy"]} %</Table.Td>
                    </Table.Tr>
                </Table.Tbody>
            </Table>


        </Flex>
    )
}