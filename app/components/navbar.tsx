import { Flex, Anchor, ScrollArea, useMantineTheme } from "@mantine/core";
import Link from "next/link";

export default function Navbar() {
  const theme = useMantineTheme();

  const Paths = [
    "/economy",
    "/society",
    "/country-profiles",
    "/methodology",
    "/society",
  ];

  function getPaths() {
    let FilteredPaths = Paths;
    return FilteredPaths;
  }

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
        {Paths.map((item, index) => (
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
            {item.slice(1)}
          </Anchor>
        ))}
      </Flex>
    </ScrollArea>
  );
}
