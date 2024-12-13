'use client'

import { Button, Stack, Title, useMantineTheme, Text, Anchor, ScrollArea, Flex, Space, Grid, GridCol } from '@mantine/core';

//import leaflet component this way cause of old libs
import dynamic from "next/dynamic";
const EuropeMap = dynamic(() => import("./components/europe-map"), { ssr: false });

import { countries } from './components/country-names';
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
            >
                <Title >
                    European countries overall ranking 
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
            >
                <Title>
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
            >
                <Title>
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
                            <Text size='28px' fw={"600"}>Economy</Text>
                            <Space h={"xs"}/>
                            <Anchor>Gdp per capita</Anchor>
                            <Anchor>Gdp per capita ppp</Anchor>
                            <Anchor>Net average wage</Anchor>
                            <Anchor>Unemployment</Anchor>
                            <Anchor>Home affordability</Anchor>
                            <Anchor>Gdp growth past 5 years</Anchor>
                            <Anchor>Debt to gdp</Anchor>
                            <Anchor>Corporate tax</Anchor>
                            <Anchor>Capital gains tax</Anchor>
                            <Anchor>Value added tax</Anchor>
                        </Flex>
                    </GridCol>
                    
                    <GridCol span={{base:12,md:6, lg:3}}>
                        <Flex
                            direction={"column"}
                        > 
                            <Text size='28px' fw={"600"}>Society</Text>
                            <Space h={"xs"}/>
                            <Anchor>Trust in institutions</Anchor>
                            <Anchor>Trust in other people</Anchor>
                            <Anchor>Voting participation</Anchor>
                            <Anchor>Corruption</Anchor>
                            <Anchor>Secondary education</Anchor>
                            <Anchor>Tertiary education</Anchor>
                            <Anchor>Pisa results</Anchor>
                            <Anchor>Obesity rate</Anchor>
                            <Anchor>Fertility rate</Anchor>
                            <Anchor>Average lifespan</Anchor>
                        </Flex>
                    </GridCol>

                    <GridCol span={{base:12,md:6, lg:3}}>
                        <Flex
                            direction={"column"}
                        > 
                            <Text size='28px' fw={"600"}>Government</Text>
                            <Space h={"xs"}/>
                            <Anchor>Rule of law</Anchor>
                            <Anchor>Freedom of press</Anchor>
                            <Anchor>Availabity of healthcare</Anchor>
                            <Anchor>Egovernment</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                        </Flex>
                    </GridCol>
                    

                    <GridCol span={{base:12,md:6, lg:3}}>
                        <Flex
                            direction={"column"}
                        >
                            <Text size='28px' fw={"600"}>Ease of integration</Text>
                            <Space h={"xs"}/>
                            <Anchor>Learning the local language</Anchor>
                            <Anchor>English proficiency</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                        </Flex>
                    </GridCol>
            
                    <GridCol span={{base:12,md:6, lg:3}}>
                        <Flex
                            direction={"column"}
                        >
                            <Text size='28px' fw={"600"}>Environment</Text>
                            <Space h={"xs"}/>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                            <Anchor>Economy</Anchor>
                        </Flex>
                    </GridCol>

                </Grid>
            </Flex>
        </Flex> 
    )
}