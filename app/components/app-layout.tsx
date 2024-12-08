'use client';

//Mantine
import { AppShell, Burger, Button, Stack, Title, useMantineTheme, Text, Anchor, NavLink, ScrollArea, Flex, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

//Icons
import { IoIosArrowForward } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaPassport } from "react-icons/fa";
import { FaTree } from "react-icons/fa6";
import { FaLandmark } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";





//import leaflet component this way cause of old libs
import dynamic from "next/dynamic";
const EuropeMap = dynamic(() => import("./europe-map.js"), { ssr: false });

import SelectBox from './select-box';
import { countries } from './country-names';

export default function AppLayout() {
  const [opened, { toggle }] = useDisclosure();
  const theme = useMantineTheme();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened},
      }}
      padding="md"
    >
      <AppShell.Header>
       
        <Flex
        bg={"#0946ff"}
        h="100%"
        align="center"
        direction="row"
        justify={"space-between"}
        pl="5px"
        pr="0px"
        wrap={"nowrap"}>
          <Flex
          align={"center"}
          >
          <Image 
            src="./eu-flag.png"
            fit='contain'
            h="50px"
            w="auto"
          />
          <Title size={"25px"} c={"white"}> Europe in data</Title>
          </Flex>
          
          <Burger
          opened={opened}
          onClick={toggle}
          size="md"
          hiddenFrom='sm'
          color={"white"}
          mr={"10px"}
          />
        </Flex>
         
      </AppShell.Header>

      <AppShell.Navbar>
          <Flex
          w={"100%"}
          direction={"column"}
          gap={"0px"}
          >
            <NavLink
            variant='filled'
            active
            label="Economy"
            color={theme.colors.gray[1]}
            c={"black"}
            leftSection={<FaMoneyBill/>}
            rightSection={<IoIosArrowForward/>}
            fz={"22px"}
            styles={() => ({
              label: {
                fontSize: '20px',
                fontWeight: 500,
              },
            })}
            />

            <NavLink
            variant='filled'
            active
            label="Society"
            color={theme.colors.gray[2]}
            c={"black"}
            leftSection={<IoPerson/>}
            rightSection={<IoIosArrowForward/>}
            fz={"22px"}
            styles={() => ({
              label: {
                // Style for the main label
                fontSize: '20px',
                fontWeight: 500,
              },
            })}
            />

            <NavLink
            variant='filled'
            active
            label="Government"
            color={theme.colors.gray[1]}
            c={"black"}
            leftSection={<FaLandmark/>}
            rightSection={<IoIosArrowForward/>}
            fz={"22px"}
            styles={() => ({
              label: {
                // Style for the main label
                fontSize: '20px',
                fontWeight: 500,
              },
            })}
            />

            <NavLink
            variant='filled'
            active
            label="Ease of integration"
            color={theme.colors.gray[2]}
            c={"black"}
            leftSection={<FaPassport/>}
            rightSection={<IoIosArrowForward/>}
            fz={"22px"}
            styles={() => ({
              label: {
                // Style for the main label
                fontSize: '20px',
                fontWeight: 500,
              },
            })}
            />

            <NavLink
            variant='filled'
            active
            label="Climate/environment"
            color={theme.colors.gray[1]}
            c={"black"}
            leftSection={<FaTree/>}
            rightSection={<IoIosArrowForward/>}
            fz={"22px"}
            styles={() => ({
              label: {
                // Style for the main label
                fontSize: '20px',
                fontWeight: 500,
              },
            })}
            />

          <NavLink
            variant='filled'
            active
            label="Country profiles"
            color={theme.colors.gray[2]}
            c={"black"}
            leftSection={<FaFlag/>}
            rightSection={<IoIosArrowForward/>}
            fz={"22px"}
            styles={() => ({
              label: {
                // Style for the main label
                fontSize: '20px',
                fontWeight: 500,
              },
            })}
            />

          <NavLink
            variant='filled'
            active
            label="News"
            color={theme.colors.gray[1]}
            c={"black"}
            leftSection={<FaNewspaper/>}
            rightSection={<IoIosArrowForward/>}
            fz={"22px"}
            styles={() => ({
              label: {
                // Style for the main label
                fontSize: '20px',
                fontWeight: 500,
              },
            })}
            />

          </Flex>
          
      </AppShell.Navbar>

      <AppShell.Main>
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
          >
            <Title>
              Compare countries
            </Title>

            <Flex>
              <SelectBox></SelectBox>
              <SelectBox></SelectBox>

            </Flex>

            <Button variant="filled" color='main' >
              Compare
            </Button>

          </Flex>

          <Flex
            direction={"column"}
            align={"center"}
            bg={theme.colors.gray[2]}
          >
            <Title>
              All ranking categories
            </Title>
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
            <Anchor>Economy</Anchor>
            <Anchor>Economy</Anchor>
            <Anchor>Economy</Anchor>
            <Anchor>Economy</Anchor>
            <Anchor>Economy</Anchor>
            <Anchor>Economy</Anchor>

          </Flex>

        </Flex>
      </AppShell.Main>
    </AppShell>
  );
}