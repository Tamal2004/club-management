import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import Layout from '@components/Layout';
import { theme } from '@theme';
import { store } from '@store';

// Types
import type { AppProps } from 'next/app';

function BaseApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Head>
                    <meta
                        name='viewport'
                        content='initial-scale=1, viewport-fit=cover, user-scalable=no'
                    />
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </Provider>
    );
}

export default BaseApp;
