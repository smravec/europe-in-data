export const metadata = {
  title: "Europe in Data - Most Relevant EU Stats",
  description:
    "Europe in Data is a database of statistics about European countries, cutting through the noise and showing only the most relevant ones.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://europeindata.eu",
    title: "Europe in Data - Most Relevant EU Stats",
    description:
      "Europe in Data is a one-stop site for all the relevant stats on EU countries. Instead of searching the internet and multiple sources for data, you'll find all the essential statistics—economic measures, social indicators, and other key numbers organized in one place for easy exploration. You can start at the economy and society pages.",
    images: [
      {
        url: "/whole-logo.png",
        alt: "Europe in Data Logo",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Europe in Data - Most Relevant EU Stats",
    description:
      "Explore the most relevant economic and societal indicators of European countries.",
    images: ["/whole-logo.png"],
  },
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body>
        <script
          data-goatcounter="https://europeindata.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        />
        <MantineProvider theme={theme} defaultColorScheme="light">
          <AppLayout>{children}</AppLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
