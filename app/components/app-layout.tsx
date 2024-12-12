'use client';

//Mantine
import { AppShell, Burger, Title, useMantineTheme, NavLink, Flex, Image} from '@mantine/core';
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

export default function AppLayout({ children }: { children: React.ReactNode }) {
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
          wrap={"nowrap"}
        >
          
          <Flex
            align={"center"}
          >
            <Image 
              src="./logo11.png"
              fit='contain'
              h="24px"
              w="auto"
              ml={"14px"}
            />
          
            <Title 
            size={"25px"} 
            c={"white"}
            mt={"9px"}
            ml={"15px"}
            > 
              Europe in data
            </Title>
          
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
            {children}
      </AppShell.Main>

    </AppShell>
  );
}