'use client'

import Link from "next/link";
import { Title, useMantineTheme, Flex,SimpleGrid, Anchor, Text } from "@mantine/core";

import OwnScore from "../components/own-score"

export default function Economy(){
    const theme = useMantineTheme()

    const methodology =[
        [
            "Gdp per capita", 
            "How much money is yearly in the economy per average person",
            "imf"
        ],
        [
            "Gdp per capita PPP",
            "Gdp per capita adjusted to local prices (how much can the average person buy)",
            "imf"
        ],
        [
            "Net average monthly wage",
            "Average monthly salary after tax",
            "eurostat"
        ],
        [
            "Unemployment",
            "Unemployment rate (in %)",
            "eurostat"
        ],
        [
            "House price to wage",
            "Average house price to average salary",
            "eurostat, other ..."
        ],
        [
            "Gdp growth past 5 years",
            "How much the gdp has grown past 5 years (in %)",
            "imf"
        ],
        [
            "Debt to gdp",
            "National debt compared to gdp (in %)",
            "imf"
        ],
        [
            "Corporate tax",
            "Tax on corporate profits (in %)",
            "wikipedia, other ..."
        ],
        [
            "Capital gains tax",
            "Tax on gains of stocks (in %)",
            "wikipedia, other ..."
        ],
        [
            "Value added tax",
            "Tax on goods and services",
            "wikipedia, other ..."
        ]
    ]

    return(
        <>
        <OwnScore Category={"Economy"} Order={"biggest"} Captions={"Based on economy indicators"}/>
        <Flex 
        bg={theme.colors.gray[2]}
        direction={"column"}
        align={"center"}
        justify={"center"}
        w={"100%"}
        pt={"15px"}
        pb={"20px"}
        style={{borderRadius: "8px"}}
        bd={"1px solid"  + theme.colors.gray[4]}
        mt={"sm"}
        pl={"20px"}
        >
            <Title mb={"lg"}>Economy indicators</Title>
            <SimpleGrid
            cols={{base: 1, sm:2 , md: 2, lg: 4}}
            verticalSpacing={"2px"}
            spacing={"20px"}
            >
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/economy/gdp-per-capita">Gdp per capita</Anchor>
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/economy/gdp-per-capita-ppp">Gdp per capita PPP</Anchor>
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/economy/net-average-monthly-wage">Net average monthly wage</Anchor>
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/economy/unemployment">Unemployment</Anchor>
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/economy/house-price-to-wage">House price to wage</Anchor>
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/economy/gdp-growth-past-5-years">Gdp growth past 5 years</Anchor>
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/economy/debt-to-gdp">Debt to gdp</Anchor>    
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/economy/corporate-tax">Corporate tax</Anchor>    
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/economy/capital-gains-tax">Capital gains tax</Anchor>    
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/economy/value-added-tax">Value added tax</Anchor>    
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/economy/rd-innovation-to-gdp">R&D (Innovation) to gdp</Anchor>
            </SimpleGrid> 
        </Flex>

        <Flex 
                bg={theme.colors.gray[2]}
                direction={"column"}
                align={"center"}
                justify={"center"}
                w={"100%"}
                pt={"15px"}
                pb={"20px"}
                style={{borderRadius: "8px"}}
                bd={"1px solid"  + theme.colors.gray[4]}
                mt={"sm"}
                pl={"20px"}
                >
                    <Title mb={"lg"}>Methodology</Title>
        
                    <SimpleGrid
                    cols={{base: 1, sm:2 , md: 2, lg: 4}}
                    verticalSpacing={"5px"}
                    spacing={"20px"}
                    >
                        {
                            methodology.map((item,index)=>(
                                <Flex key={index} direction={"column"} maw={"200px"} mr={"10px"} mb={"8px"}>
                                <Title order={4} ml={"0"} >{item[0]}</Title>
                                <Text size="sm">
                                    {item[1]}
                                </Text>
                                <Text  size= "sm" fs={"italic"}>Source: {item[2]}</Text>
                            </Flex>
                            ))
                        }
                    </SimpleGrid>
            </Flex>
        </>
    )
}