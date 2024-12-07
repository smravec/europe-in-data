'use client';

import { AppShell, Burger, Button, Stack, Title, useMantineTheme, Text, Anchor, NavLink, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';



import { Flex } from '@mantine/core';

import { Image } from '@mantine/core';

//import leaflet component this way cause of old libs
import dynamic from "next/dynamic";
const EuropeMap = dynamic(() => import("./europe-map.js"), { ssr: false });

import SelectBox from './select-box';

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
          <Title size={"25px"} c={"white"}> Living in europe</Title>
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
          gap={"none"}
          >
            <NavLink
            variant='filled'
            active
            label="Economy"
            color={theme.colors.gray[5]}
            c={"black"}
          
            ></NavLink>

            <NavLink
            variant='filled'
            active
            label="Economy"
            color={theme.colors.gray[5]}
            c={"black"}
          

            ></NavLink>

            <NavLink
            variant='filled'
            active
            label="Climate"
            color={theme.colors.gray[5]}
            c={"black"}


            ></NavLink>

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

            <Stack>
              <Text>item1</Text>
              <Text>item1</Text>
              <Text>item1</Text>
              <Text>item1</Text>
              <Text>item1</Text>
              <Text>item1</Text>

            </Stack>

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