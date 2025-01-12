'use client'

import Link from "next/link";
import { Title, useMantineTheme, Flex,SimpleGrid, Anchor } from "@mantine/core";
import OwnScore from "../components/own-score";

export default function Society(){
    const theme = useMantineTheme()

    return(
        <>
        <OwnScore Category={"Society"} Order={"biggest"} Captions={"Based on society indicators"} />
        
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
            <Title mb={"lg"}>Society indicators</Title>
            <SimpleGrid
            cols={{base: 1, sm:2 , md: 2, lg: 4}}
            verticalSpacing={"2px"}
            spacing={"20px"}
            >
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/society/trust-in-other-people">Trust in other people</Anchor>
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/society/voting-participation">Voting participation</Anchor>
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/society/lack-of-corruption-score">Lack of corruption score</Anchor>
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/society/religiosity">Religiosity</Anchor>
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/society/tertiary-education">Tertiary education</Anchor>
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/society/pisa-score">Pisa score</Anchor>
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/society/obesity-rate">Obesity rate</Anchor>
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/society/fertility-rate">Fertility rate</Anchor>    
                <Anchor component={Link}  style={{fontSize: "20px", whiteSpace: "nowrap"}} href="/society/life-expectancy">Life expectancy</Anchor>    
            </SimpleGrid> 
        </Flex>
        </>

    )
}