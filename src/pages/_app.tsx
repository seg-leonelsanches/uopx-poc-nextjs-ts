import * as React from 'react';

import Head from 'next/head';
import { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import '../styles/clientlib.css';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../theme';

import { createEmotionCache } from '@/components/emotion-cache';
import { Topbar } from '@/components/topbar';
import { AnalyticsProvider } from '@/providers';
import { StoreProvider, getStores } from '@/data/stores';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface UoPxPocProps extends AppProps {
  emotionCache?: EmotionCache;
  initialData: any;
}

export default function MyApp(props: UoPxPocProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps, initialData } = props;

  // During SSR, this will create new store instances so having `initialData` is crucial.
  // During the client-side hydration, same applies.
  // From then on, calls to `getStores()` return existing instances.
  const stores = getStores(initialData)
  const writeKey: string = String(process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY)

  return (
    <AnalyticsProvider writeKey={writeKey}>
      <StoreProvider value={stores}>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Topbar />
            <Container maxWidth="lg">
              <Component {...pageProps} />
            </Container>
          </ThemeProvider>
        </CacheProvider>
      </StoreProvider>
    </AnalyticsProvider>
  );
}