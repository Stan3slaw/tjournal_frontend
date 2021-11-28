import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

import '../styles/globals.scss';
import 'macro-css';
import theme from '../styles/theme';
import { wrapper } from '../redux/store';
import { parseCookies } from 'nookies';
import { UserApi } from '../utils/api/user';
import { setUserData } from '../redux/slices/user';
import { Api } from '../utils/api';

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

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {
  try {
    const userData = await Api(ctx).user.getMe();
    store.dispatch(setUserData(userData));
  } catch (err) {
    if (ctx.asPath === '/write') {
      ctx.res?.writeHead(302, {
        location: '/403',
      });
      ctx.res?.end();
    }
    console.log(err);
  }
  return {
    pageProps: Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {},
  };
});

export default wrapper.withRedux(App);
