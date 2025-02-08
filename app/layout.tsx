export const metadata = {
  title: "Europe in Data - Country Stats and Insights",
  description:
    "Explore economic and societal indicators of European countries. Compare nations and discover trends.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

import { Roboto } from "next/font/google";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";

import AppLayout from "./components/app-layout";

const roboto = Roboto({
  subsets: ["latin"], // Add subsets as needed (e.g., 'latin', 'cyrillic', etc.)
  weight: ["400", "700"], // Specify font weights
});

const theme = createTheme({
  fontFamily: "Roboto, sans-serif",
  colors: {
    main: [
      "#e7f0ff",
      "#cedbff",
      "#9bb4ff",
      "#648bff",
      "#3867fe",
      "#1c51fe",
      "#0946ff",
      "#0038e4",
      "#0031cd",
      "#002ab5",
    ],
  },
  black: "#313233",
  white: "#ffffff",
  breakpoints: {
    xs: "350px",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em",
    xss: "1em",
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <script
        data-goatcounter="https://europeindata.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      />

      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <AppLayout>{children}</AppLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
