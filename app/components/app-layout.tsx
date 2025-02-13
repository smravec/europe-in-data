"use client";

//Mantine
import {
  AppShell,
  Burger,
  Title,
  useMantineTheme,
  NavLink,
  Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

//Icons
import { IoIosArrowForward } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaPassport } from "react-icons/fa";
import {
  FaTree,
  FaLandmark,
  FaMoneyBill,
  FaFlag,
  FaNewspaper,
  FaFileExport,
} from "react-icons/fa6";

//Next
import Link from "next/link";

// import Navbar from "./navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const theme = useMantineTheme();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Flex
          bg="#0946ff"
          h="100%"
          align="center"
          direction="row"
          justify="space-between"
          pl="5px"
          pr="0px"
          wrap="nowrap"
        >
          <Flex align="center">
            <Link
              href="/"
              onClick={() => {
                if (opened === true) {
                  toggle();
                }
              }}
              style={{ textDecoration: "none" }}
            >
              <Title size="25px" c="white" mt="2px" ml="15px">
                Europeindata.eu
              </Title>
            </Link>
          </Flex>

          <Burger
            opened={opened}
            onClick={toggle}
            size="md"
            hiddenFrom="sm"
            color="white"
            mr="10px"
          />
        </Flex>
        {/* <Navbar /> */}
      </AppShell.Header>

      <AppShell.Navbar>
        <Flex w="100%" direction="column" gap="0px">
          <NavLink
            component={Link}
            href="/economy"
            onClick={toggle}
            variant="filled"
            active
            label="Economy"
            color={theme.colors.gray[1]}
            c="black"
            leftSection={<FaMoneyBill />}
            rightSection={<IoIosArrowForward />}
            fz="22px"
            styles={() => ({
              label: {
                fontSize: "20px",
                fontWeight: 500,
              },
            })}
          />

          <NavLink
            component={Link}
            href="/society"
            onClick={toggle}
            variant="filled"
            active
            label="Society"
            color={theme.colors.gray[2]}
            c="black"
            leftSection={<IoPerson />}
            rightSection={<IoIosArrowForward />}
            fz="22px"
            styles={() => ({
              label: {
                fontSize: "20px",
                fontWeight: 500,
              },
            })}
          />

          <NavLink
            component={Link}
            href="/government"
            onClick={toggle}
            variant="filled"
            active
            label="Government"
            color={theme.colors.gray[1]}
            c="black"
            leftSection={<FaLandmark />}
            rightSection={<IoIosArrowForward />}
            fz="22px"
            styles={() => ({
              label: {
                fontSize: "20px",
                fontWeight: 500,
              },
            })}
          />

          <NavLink
            component={Link}
            href="/ease-of-integration"
            onClick={toggle}
            variant="filled"
            active
            label="Ease of integration"
            color={theme.colors.gray[2]}
            c="black"
            leftSection={<FaPassport />}
            rightSection={<IoIosArrowForward />}
            fz="22px"
            styles={() => ({
              label: {
                fontSize: "20px",
                fontWeight: 500,
              },
            })}
          />

          <NavLink
            component={Link}
            href="/environment"
            onClick={toggle}
            variant="filled"
            active
            label="Environment"
            color={theme.colors.gray[1]}
            c="black"
            leftSection={<FaTree />}
            rightSection={<IoIosArrowForward />}
            fz="22px"
            styles={() => ({
              label: {
                fontSize: "20px",
                fontWeight: 500,
              },
            })}
          />

          <NavLink
            component={Link}
            href="/country-profiles"
            onClick={toggle}
            variant="filled"
            active
            label="Country profiles"
            color={theme.colors.gray[2]}
            c="black"
            leftSection={<FaFlag />}
            rightSection={<IoIosArrowForward />}
            fz="22px"
            styles={() => ({
              label: {
                // Style for the main label
                fontSize: "20px",
                fontWeight: 500,
              },
            })}
          />

          <NavLink
            component={Link}
            href="/methodology"
            onClick={toggle}
            variant="filled"
            active
            label="Methodology"
            color={theme.colors.gray[1]}
            c="black"
            leftSection={<FaNewspaper />}
            rightSection={<IoIosArrowForward />}
            fz="22px"
            styles={() => ({
              label: {
                // Style for the main label
                fontSize: "20px",
                fontWeight: 500,
              },
            })}
          />

          <NavLink
            component={Link}
            href="/export-stats"
            onClick={toggle}
            variant="filled"
            active
            label="Export stats"
            color={theme.colors.gray[2]}
            c="black"
            leftSection={<FaFileExport />}
            rightSection={<IoIosArrowForward />}
            fz="22px"
            styles={() => ({
              label: {
                // Style for the main label
                fontSize: "20px",
                fontWeight: 500,
              },
            })}
          />
        </Flex>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
