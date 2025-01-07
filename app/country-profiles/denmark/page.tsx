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
                    <Table.Td>{Math.trunc(CountryData["Denmark"]["2023"]["Home affordability"])}</Table.Td>
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
                    <Table.Td>{Math.trunc(CountryData["Denmark"]["2023"]["Trust in other people"])}</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Status</Table.Th>
                    <Table.Td>Open</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Total issues</Table.Th>
                    <Table.Td>135</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Total story points</Table.Th>
                    <Table.Td>874</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Last updated at</Table.Th>
                    <Table.Td>September 26, 2024 17:41:26</Table.Td>
                    </Table.Tr>
                </Table.Tbody>
            </Table>


        </Flex>
    )
}