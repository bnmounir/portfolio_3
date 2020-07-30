import { Grommet, Box } from 'grommet';
import { grommet } from 'grommet/themes';
import Head from 'next/head';

import { GlobalStyle } from '../GlobalStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <GlobalStyle />
            <Grommet theme={grommet}>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </Grommet>
        </>
    );
}

export default MyApp;
