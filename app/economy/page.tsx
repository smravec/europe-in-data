'use client'

import Link from "next/link";
import { Title, useMantineTheme, Flex,SimpleGrid, Anchor } from "@mantine/core";

import OwnScore from "../components/own-score"

export default function Economy(){
    const theme = useMantineTheme()

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
        </>
    )
}