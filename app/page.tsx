'use client'

import { Button, Stack, Title, useMantineTheme, Text, Anchor, ScrollArea, Flex, Space, Grid, GridCol } from '@mantine/core';

import Link from 'next/link';

//import leaflet component this way cause of old libs
import dynamic from "next/dynamic";
const EuropeMap = dynamic(() => import("./components/europe-map"), { ssr: false });

import { countries } from './lib/country-names';
import SelectBox from './components/select-box';

export default function Home(){
    const theme = useMantineTheme();

    return (
        <Flex
         bg="none"
         gap="md"
         justify="flex-start"
         align="center"
         direction="column"
         wrap="nowrap"
         pt="10px"
        >
          {/* <EuropeMap/> */}
          
            <Flex
                bg={theme.colors.gray[2]}
                direction={"column"}
                align={"center"}
                maw={"1000px"}
                w={"100%"}
                pt={"15px"}
                pb={"20px"}
                style={{borderRadius: "8px"}}
                bd={"1px solid"  + theme.colors.gray[4]}
            >
                <Title fz={{ base:"28px", xs:"34px"}} ta={"center"}  >
                    Overall country ranking 
                </Title>

                <Space h={"lg"}/>
  
                <ScrollArea h={250} type='always' w={"95%"}>
                <Flex>
                    <Flex
                    w={"80%"}
                    miw={"fit-content"}
                    >
                        <Flex
                            direction={"column"}
                            align={"center"}
                            w={"30%"}
                        >
                            <Text pl={"4px"}  bg={"main"} fw={"600"} c={"white"} fz={"20px"} w={"100%"}>Rank</Text>
                            {countries.map((item, index)=>(
                                (index % 2 == 0) 
                                ? <Text pl={"4px"} w={"100%"} bg={theme.colors.gray[1]} key={index}>{index + 1}</Text> : 
                                <Text pl={"4px"} w={"100%"} bg={"white"} key={index}>{index + 1}</Text>
                            ))}
                        </Flex>

                        <Flex
                            direction={"column"}
                            w={"69.9%"}
                        >
                            <Text bg={"main"} fw={"600"} c={"white"} fz={"20px"} w={"100%"}>Country</Text>
                            {countries.map((item, index)=>(
                                (index % 2 == 0) 
                                ? <Anchor w={"100%"} bg={theme.colors.gray[1]} key={index}>{item}</Anchor> : 
                                <Anchor w={"100%"} bg={"white"} key={index}>{item}</Anchor>  
                            ))}
                        </Flex>
                    </Flex>

                    <Flex
                    direction={"column"}
                    align={"flex-end"}
                    w={"20%"}
                    miw={"fit-content"}
                    bg={"yellow"}
                    >
                        <Text bg={"main"} fw={"600"} c={"white"} fz={"20px"} w={"100%"} ta={"center"} >Score</Text>
                        {countries.map((item, index)=>(
                             (index % 2 == 0) 
                             ? <Text w={"100%"} ta={"center"} bg={theme.colors.gray[1]} key={index}>0</Text> : 
                             <Text w={"100%" } ta={"center"} bg={"white"} key={index}>0</Text>  
                        ))}
                    </Flex>
                </Flex>
                </ScrollArea>
            </Flex>
        
            <Flex
                direction={"column"}
                align={"center"}
                bg={theme.colors.gray[2]}
                maw={"1000px"}
                w={"100%"}
                pt={"15px"}
                pb={"15px"}
                pl={"3px"}
                pr={"3px"}
                style={{borderRadius: "8px"}}
                bd={"1px solid"  + theme.colors.gray[4]}
            >
                <Title fz={{ base:"28px", xs:"34px"}}>
                    Compare countries
                </Title>

                <Space h={"md"}/>

                <Flex>
                    <SelectBox/>
                    <Space w={"sm"}/>
                    <SelectBox/>
                </Flex>

                <Space h={"md"}/>

                <Button variant="filled" color='main' >
                    Compare
                </Button>
            </Flex>

            <Flex
                direction={"column"}
                align={"center"}
                bg={theme.colors.gray[2]}
                maw={"1000px"}
                w={"100%"}
                pt={"15px"}
                pb={"15px"}
                style={{borderRadius: "8px"}}
                bd={"1px solid"  + theme.colors.gray[4]}
            >
                <Title fz={{ base:"28px", xs:"34px"}}>
                    All categories
                </Title>

                <Space h={"md"}/>

                <Grid
                pr={"40px"}
                pl={{ base:"25%" , lg:"40px" }}

                >

                    <GridCol span={{base:12,md:6, lg:3}}>
                        <Flex
                            direction={"column"}
                        > 
                            <Text size='28px' fw={"600"} fz={{ base:"24px", xs:"28px"}}>Economy</Text>
                            <Space h={"xs"}/>
                            <Anchor component={Link} href={"/economy/gdp-per-capita"} >Gdp per capita</Anchor>
                            <Anchor component={Link} href={"/economy/gdp-per-capita-ppp"}>Gdp per capita PPP</Anchor>
                            <Anchor component={Link} href={"/economy/net-average-wage"}>Net average wage</Anchor>
                            <Anchor component={Link} href={"/economy/unemployment"}>Unemployment</Anchor>
                            <Anchor component={Link} href={"/economy/house-price-to-wage"}>House price to wage</Anchor>
                            <Anchor component={Link} href={"/economy/gdp-growth-past-5-years"}>Gdp growth past 5 years</Anchor>
                            <Anchor component={Link} href={"/economy/debt-to-gpd"}>Debt to gdp</Anchor>
                            <Anchor component={Link} href={"/economy/corporate-tax"}>Corporate tax</Anchor>
                            <Anchor component={Link} href={"/economy/capital-gains-tax"}>Capital gains tax</Anchor>
                            <Anchor component={Link} href={"/economy/value-added-tax"}>Value added tax</Anchor>
                            <Anchor component={Link} href={"/economy/rd-innovation-of-gdp"}>R&D (Innovation) of gdp</Anchor>
                        </Flex>
                    </GridCol>
                    
                    <GridCol span={{base:12,md:6, lg:3}}>
                        <Flex
                            direction={"column"}
                        > 
                            <Text size='28px' fw={"600"} fz={{ base:"24px", xs:"28px"}}>Society</Text>
                            <Space h={"xs"}/>
                            <Anchor component={Link} href={"/society/trust-in-other-people"}>Trust in other people</Anchor>
                            <Anchor component={Link} href={"/society/voting-participation"}>Voting participation</Anchor>
                            <Anchor component={Link} href={"/society/lack-of-corruption-score"}>Lack of corruption score</Anchor>
                            <Anchor component={Link} href={"/society/religiosity"}>Religiosity</Anchor>
                            <Anchor component={Link} href={"/society/risk-of-poverty"}>Risk of poverty</Anchor>
                            <Anchor component={Link} href={"/society/tertiary-education"}>Tertiary education</Anchor>
                            <Anchor component={Link} href={"/society/pisa-score"}>Pisa score</Anchor>
                            <Anchor component={Link} href={"/society/obesity-rate"}>Obesity rate</Anchor>
                            <Anchor component={Link} href={"/society/fertility-rate"}>Fertility rate</Anchor>
                            <Anchor component={Link} href={"/society/life-expectancy"}>Life expectancy</Anchor>
                        </Flex>
                    </GridCol>

                    <GridCol span={{base:12,md:6, lg:3}}>
                        <Flex
                            direction={"column"}
                        > 
                            <Text size='28px' fw={"600"} fz={{ base:"24px", xs:"28px"}}>Government</Text>
                            <Space h={"xs"}/>
                            <Anchor component={Link} href={"/government"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/government"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/government"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/government"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/government"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/government"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/government"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/government"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/government"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/government"}>Coming soon</Anchor>
                        </Flex>
                    </GridCol>
                    

                    <GridCol span={{base:12,md:6, lg:3}}>
                        <Flex
                            direction={"column"}
                        >
                            <Text size='28px' fw={"600"} fz={{ base:"24px", xs:"28px"}}>Ease of integration</Text>
                            <Space h={"xs"}/>
                            <Anchor component={Link} href={"/ease-of-integration"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/ease-of-integration"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/ease-of-integration"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/ease-of-integration"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/ease-of-integration"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/ease-of-integration"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/ease-of-integration"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/ease-of-integration"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/ease-of-integration"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/ease-of-integration"}>Coming soon</Anchor>
                        </Flex>
                    </GridCol>
            
                    <GridCol span={{base:12,md:6, lg:3}}>
                        <Flex
                            direction={"column"}
                        >
                            <Text size='28px' fw={"600"} fz={{ base:"24px", xs:"28px"}}>Environment</Text>
                            <Space h={"xs"}/>
                            <Anchor component={Link} href={"/environment"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/environment"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/environment"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/environment"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/environment"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/environment"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/environment"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/environment"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/environment"}>Coming soon</Anchor>
                            <Anchor component={Link} href={"/environment"}>Coming soon</Anchor>
                        </Flex>
                    </GridCol>

                </Grid>
            </Flex>
        </Flex> 
    )
}