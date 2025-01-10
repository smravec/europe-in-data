'use client'

import { Flex, Title, useMantineTheme, Table, Button } from "@mantine/core"
import { useRouter } from "next/navigation"

import CountryData from "../../country-data/country-data.json" 

import FormatBigNumber from "../lib/format-big-nummber"

export default function CountryProfile( props ){
    const theme = useMantineTheme()
    const Country = props.Country

    const router = useRouter()

    return(
        <Flex direction={"column"} >
            <Button 
            onClick={()=>{router.push("/country-profiles")}} 
            variant="filled" 
            color='main'
            w={"100px"}
            mb={"lg"}>
                Back
            </Button>

            <Title order={1} mb={"lg"}>
            {CountryData[Country]["Icon"]} {Country}
            </Title>

            <Title order={2} mb={"lg"}>
                Economy
            </Title>
            <Table variant="vertical" layout="fixed" >
                <Table.Tbody>
                    <Table.Tr>
                    <Table.Th >Gdp per capita</Table.Th>
                    <Table.Td> {FormatBigNumber(Math.trunc(CountryData[Country]["2023"]["Gdp per capita"]))} €</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Gdp per capita PPP</Table.Th>
                    <Table.Td> {FormatBigNumber(Math.trunc(CountryData[Country]["2023"]["Gdp per capita PPP"]))} €</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Net average monthly wage</Table.Th>
                    <Table.Td>{FormatBigNumber(Math.trunc(CountryData[Country]["2023"]["Net average wage"] /12))} €</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Unemployment</Table.Th>
                    <Table.Td>{CountryData[Country]["2023"]["Unemployment"]} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>House price to wage</Table.Th>
                    <Table.Td>{CountryData[Country]["2023"]["House price to wage"]}</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Gdp growth past 5 years</Table.Th>
                    <Table.Td>{Math.trunc(CountryData[Country]["2023"]["Gdp growth past 5 years"])} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Debt to gdp</Table.Th>
                    <Table.Td>{Math.trunc(CountryData[Country]["2023"]["Debt to gdp"])} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Corporate tax</Table.Th>
                    <Table.Td>{Math.trunc(CountryData[Country]["2023"]["Corporate tax"])} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Capital gains tax</Table.Th>
                    <Table.Td>{Math.trunc(CountryData[Country]["2023"]["Capital gains tax"])} %</Table.Td>
                    </Table.Tr>
                    
                    <Table.Tr>
                    <Table.Th>Value added tax</Table.Th>
                    <Table.Td>{Math.trunc(CountryData[Country]["2023"]["Value added tax"])} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>R&D (Innovation) to gdp</Table.Th>
                    <Table.Td>{Math.trunc(CountryData[Country]["2021"]["R&D (Innovation) to gdp"] * 100) / 100} %</Table.Td>
                    </Table.Tr>
                </Table.Tbody>
            </Table>


            <Title order={2} mb={"lg"} mt={"lg"}>
                Society
            </Title>
            
            <Table variant="vertical" layout="fixed" >
                <Table.Tbody>
                    <Table.Tr>
                    <Table.Th> Trust in other people</Table.Th>
                    <Table.Td>{Math.trunc(CountryData[Country]["2023"]["Trust in other people"])} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Voting participation</Table.Th>
                    <Table.Td>{Math.trunc(CountryData[Country]["2023"]["Voting participation"])} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Lack of corruption score</Table.Th>
                    <Table.Td>{Math.trunc(CountryData[Country]["2023"]["Lack of corruption score"])}</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Religiosity</Table.Th>
                    <Table.Td>{Math.trunc(CountryData[Country]["2010"]["Religiosity"])} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Risk of poverty</Table.Th>
                    <Table.Td>{Math.trunc(CountryData[Country]["2023"]["Risk of poverty"])} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Tertiary education</Table.Th>
                    <Table.Td>{Math.trunc(CountryData[Country]["2023"]["Tertiary education"])} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Pisa score</Table.Th>
                    <Table.Td>{Math.trunc(CountryData[Country]["2022"]["Pisa score"])}</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Obesity rate</Table.Th>
                    <Table.Td>{CountryData[Country]["2022"]["Obesity rate"]} %</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Fertility rate</Table.Th>
                    <Table.Td>{CountryData[Country]["2022"]["Fertility rate"]}</Table.Td>
                    </Table.Tr>

                    <Table.Tr>
                    <Table.Th>Life expectancy</Table.Th>
                    <Table.Td>{CountryData[Country]["2022"]["Life expectancy"]}</Table.Td>
                    </Table.Tr>
                </Table.Tbody>
            </Table>
        </Flex>
    )
}