export const metadata = {
  title: 'Europe in data',
  description: 'Main page',
}

import { Roboto } from 'next/font/google';
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from "@mantine/core";

import AppLayout from './components/app-layout';

const roboto = Roboto({
  subsets: ['latin'], // Add subsets as needed (e.g., 'latin', 'cyrillic', etc.)
  weight: ['400', '700'], // Specify font weights
});

const theme = createTheme({
  fontFamily: 'Roboto, sans-serif',
  colors: {
    'main': [
      '#e7f0ff',
      '#cedbff',
      '#9bb4ff',
      '#648bff',
      '#3867fe',
      '#1c51fe',
      '#0946ff',
      '#0038e4',
      '#0031cd',
      '#002ab5'
    ]
  },
  black:"#313233",
  white: "#ffffff"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className} 
    >
    <link
      rel="icon"
      href="./favicon.png"
      type="image/<generated>"
    />
      <body>
      <MantineProvider theme={theme} defaultColorScheme='light' >
        <AppLayout>
          {children}
        </AppLayout>
      </MantineProvider>
      </body>
    </html>
  )
}
