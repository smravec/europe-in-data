'use client'

import { Button, Stack, Title, useMantineTheme, Text, Anchor, ScrollArea, Flex, Space } from '@mantine/core';

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
  
                <ScrollArea h={250} type='always' w={"95%"}>
                <Stack>
                    
                    {countries.map((item, index)=>(
                    <Text key={index}>{item}</Text>
                    ))
                    }
                    
                </Stack>
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

                <Flex>
                <SelectBox/>
                <SelectBox/>
                </Flex>

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

                <Flex
                wrap={"wrap"}
                justify={"space-between"}
                gap={"30px"}
                rowGap={"10px"}  
                pr={"40px"}
                pl={"40px"}
                >

                    <Flex
                        direction={"column"}
                        align={"flex-start"}
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

                    <Flex
                        direction={"column"}
                        align={"flex-start"}
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

                    <Flex
                        direction={"column"}
                        align={"flex-start"}
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

                    <Flex
                        direction={"column"}
                        align={"flex-start"}
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
            
                    <Flex
                        direction={"column"}
                        align={"flex-start"}
                    > 
                        <Text size='28px' fw={"600"}>Climate/environment</Text>
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

                </Flex>
            </Flex>
        </Flex> 
    )
}