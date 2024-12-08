export const metadata = {
  title: 'Europe in data',
  description: 'Main page',
}

import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from "@mantine/core";

import AppLayout from './components/app-layout';

const theme = createTheme({
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
    <html lang="en">
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
