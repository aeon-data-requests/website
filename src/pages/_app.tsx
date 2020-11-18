// import App from "next/app";
import Menu from 'components/Menu';
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head';

import 'styles/global.css';
import 'fontsource-ibm-plex-sans/latin-400.css';
import 'fontsource-ibm-plex-sans/latin-600.css';
import 'fontsource-inter/latin-700.css';
import Footer from 'components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
        <>
            <Head>
                <title>Aeon - Get a grip on your data</title>
                <meta name="description" content="Aeon is an app that retrieves your personal data from organizations and the internet, using the power of the GDPR"/>
            </Head>
            <Menu />
            <Component {...pageProps} />
            <Footer />
        </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
