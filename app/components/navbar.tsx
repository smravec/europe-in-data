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

export default function Navbar() {
  const theme = useMantineTheme();
  const pathname = usePathname();
  const [hidden, toggle] = useState(false);

  //Add paths later
  const Paths = ["/economy", "/society", "/country-profiles", "/methodology"];
  const Icons: Record<string, any> = {
    "/economy": FaMoneyBill,
    "/society": IoPerson,
    "/country-profiles": FaFlag,
    "/methodology": FaNewspaper,
    "/environment": FaTree,
    "/export-stats": FaFileExport,
    "/government": FaLandmark,
  };

  useEffect(() => {
    console.log("URL changed to:", pathname);
    if (Paths.includes(pathname) || pathname === "/") {
      toggle(false);
    } else {
      toggle(true);
    }
  }, [pathname]);

  return (
    <ScrollArea hidden={hidden} w="100%" type="scroll">
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
        {Paths.map((item, index) => {
          const Icon = Icons[item];
          const { hovered, ref } = useHover();
          return (
            <Flex
              ref={ref}
              key={index}
              align="center"
              bd={`1px solid ${theme.colors.gray[5]}`}
              pl="4px"
              pr="4px"
              style={{ borderRadius: "5px", whiteSpace: "nowrap" }}
              bg={hovered ? "#efefef" : "#ffffff"}
              c="#0946ff"
              onClick={() => {
                redirect(item);
              }}
            >
              <Icon />
              <Text ml="3px">{item.slice(1)}</Text>
            </Flex>
          );
        })}
      </Flex>
    </ScrollArea>
  );
}
