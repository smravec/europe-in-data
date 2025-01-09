'use client'

import Link from "next/link";
import { Title, useMantineTheme, Flex,SimpleGrid } from "@mantine/core";

export default function Society(){
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
                <Link href="/society/trust-in-other-people">Trust in other people</Link>
                <Link href="/society/voting-participation">Voting participation</Link>
                <Link href="/society/lack-of-corruption">Lack of corruption</Link>
                <Link href="/society/religiosity">Religiosity</Link>
                <Link href="/society/tertiary-education">Tertiary education</Link>
                <Link href="/society/pisa-score">Pisa score</Link>
                <Link href="/society/obesity-rate">Obesity rate</Link>
                <Link href="/society/fertility-rate">Fertility rate</Link>    
                <Link href="/society/life-expectancy">Life expectancy</Link>    
            </SimpleGrid> 
        </Flex>
    )
}