import { Flex, Anchor, ScrollArea, useMantineTheme } from "@mantine/core";
import {
  FaTree,
  FaLandmark,
  FaMoneyBill,
  FaFlag,
  FaNewspaper,
  FaFileExport,
} from "react-icons/fa6";
import Link from "next/link";

export default function Navbar() {
  const theme = useMantineTheme();

  const Paths = ["/economy", "/society", "/country-profiles", "/methodology"];
  const Icons = {
    "/economy": FaMoneyBill,
    "/society": FaMoneyBill,
    "/country-profiles": FaMoneyBill,
    "/methodology": FaMoneyBill,
  };

  function getPaths() {
    let FilteredPaths = Paths;
    return FilteredPaths;
  }

  function isHidden() {}

  return (
    <ScrollArea w="100%" type="scroll">
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
          return (
            <Anchor
              component={Link}
              key={index}
              href={item}
              bg="#ffffff"
              bd={`1px solid ${theme.colors.gray[5]}`}
              pl="4px"
              pr="4px"
              style={{ borderRadius: "5px", whiteSpace: "nowrap" }}
            >
              <Icon />
              {item.slice(1)}
            </Anchor>
          );
        })}
      </Flex>
    </ScrollArea>
  );
}
