import { Flex, ScrollArea, Text, useMantineTheme } from "@mantine/core";
import {
  FaTree,
  FaLandmark,
  FaMoneyBill,
  FaFlag,
  FaNewspaper,
  FaFileExport,
} from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { redirect, usePathname } from "next/navigation";
import { useHover } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";

interface NavigationItemProps {
  item: any;
  theme: any;
  redirect: (path: string) => void;
  Icon: React.ComponentType;
}

function NavigationItem({ item, theme, redirect, Icon }: NavigationItemProps) {
  const { hovered, ref } = useHover();

  return (
    <Flex
      ref={ref}
      align="center"
      bd={`1px solid ${theme.colors.gray[5]}`}
      pl="4px"
      pr="4px"
      style={{ borderRadius: "5px", whiteSpace: "nowrap" }}
      bg={hovered ? "#efefef" : "#ffffff"}
      c="#0946ff"
      onClick={() => redirect(item)}
    >
      <Icon />
      <Text ml="3px">{item.slice(1)}</Text>
    </Flex>
  );
}

export default function Navbar() {
  const theme = useMantineTheme();
  const pathname = usePathname();
  const [hidden, toggle] = useState(false);

  // Define your paths and icon mapping
  const Paths = ["/economy", "/society", "/country-profiles", "/methodology"];

  type IconsType = {
    [key: string]: IconType;
  };
  const Icons: IconsType = {
    "/economy": FaMoneyBill,
    "/society": IoPerson,
    "/country-profiles": FaFlag,
    "/methodology": FaNewspaper,
    "/environment": FaTree,
    "/export-stats": FaFileExport,
    "/government": FaLandmark,
  };

  useEffect(() => {
    if (Paths.includes(pathname) || pathname === "/") {
      toggle(false);
    } else {
      toggle(true);
    }
  }, [pathname]);

  return (
    <ScrollArea hidden={hidden} w="100%" type="never">
      <Flex
        bg="#ffffff"
        direction="row"
        gap="md"
        wrap="nowrap"
        style={{
          overflowX: "auto",
          borderBottom: `1px solid ${theme.colors.gray[5]}`,
        }}
        hiddenFrom="sm"
        pl="5px"
        pb="5px"
        pt="5px"
        justify="space-around"
      >
        {Paths.filter((item) => item !== pathname).map((item) => {
          const Icon = Icons[item];
          return (
            <NavigationItem
              key={item}
              item={item}
              theme={theme}
              redirect={redirect}
              Icon={Icon}
            />
          );
        })}
      </Flex>
    </ScrollArea>
  );
}
