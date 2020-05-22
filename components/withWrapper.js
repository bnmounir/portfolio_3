import React, { createContext, useReducer } from 'react';
import { Grommet, Box } from 'grommet';
import { grommet } from 'grommet/themes';
import Head from 'next/head';

import { GlobalStyle } from '../GlobalStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const ThemeContext = createContext();

const initialState = {
    themeMode: false,
};

function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE':
            return {
                themeMode: action.data,
            };
        default:
            return initialState;
    }
}

export default (WrappedComponent) => (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <GlobalStyle />
            <ThemeContext.Provider value={{ state, dispatch }}>
                <Header />
                <Grommet theme={grommet} style={{ flex: '1 1' }}>
                    <Box
                        fill
                        pad='medium'
                        background={
                            state.themeMode
                                ? 'dark-1'
                                : 'light-1' || theme.global.colors.background
                        }
                        overflow='auto'
                    >
                        <WrappedComponent {...props} />
                        <Footer />
                    </Box>
                </Grommet>
            </ThemeContext.Provider>
        </>
    );
};
