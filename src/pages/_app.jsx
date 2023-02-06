import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HiMoon, HiSun } from 'react-icons/hi';
import Head from 'next/head';
import Home from '.';
import GlobalStyle from '../styles/global';
import usePersistentState from '../utils/usePersistentState';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

function App() {
  const [theme, setTheme] = usePersistentState('theme', 'dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const getThemeIcon = () => (theme === 'dark' ? <HiMoon /> : <HiSun />);

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <Head>
        <title>Vitor Hugo Helmbrecht</title>
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
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <Home toggleTheme={toggleTheme} themeIcon={getThemeIcon()} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
