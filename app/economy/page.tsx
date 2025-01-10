'use client'

import Link from "next/link";
import { Title, useMantineTheme, Flex,SimpleGrid } from "@mantine/core";

export default function Economy(){
    const theme = useMantineTheme()

    return(
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
        >
            <Title mb={"lg"}>Countries</Title>
            <SimpleGrid
            cols={{base: 2, sm:4}}
            verticalSpacing={"2px"}
            spacing={"20px"}
            >
                <Link href="/economy/gdp-per-capita">Gdp per capita</Link>
                <Link href="/economy/gdp-per-capita-ppp">Gdp per capita PPP</Link>
                <Link href="/economy/net-average-monthly-wage">Net average monthly wage</Link>
                <Link href="/economy/unemployment">Unemployment</Link>
                <Link href="/economy/house-price-to-wage">House price to wage</Link>
                <Link href="/economy/gdp-growth-past-5-years">Gdp growth past 5 years</Link>
                <Link href="/economy/debt-to-gdp">Debt to gdp</Link>    
                <Link href="/economy/corporate-tax">Corporate tax</Link>    
                <Link href="/economy/capital-gains-tax">Capital gains tax</Link>    
                <Link href="/economy/value-added-tax">Value added tax</Link>    
                <Link href="/economy/rd-innovation-to-gdp">R&D (Innovation) to gdp</Link>
            </SimpleGrid> 
        </Flex>
    )
}