import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

import '../styles/globals.scss';
import 'macro-css';
import theme from '../styles/theme';
import { wrapper } from '../redux/store';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RJournal</title>
        <meta name='description' content='RJournal' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </>
  );
}

export default wrapper.withRedux(App);
