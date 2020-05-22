import React, { useContext } from 'react';
import Link from 'next/link';

import { ThemeContext } from './withWrapper';
import { Grommet, Header, Box, CheckBox, Anchor, grommet } from 'grommet';

import { hp } from 'grommet-theme-hp';

export default () => {
    const { state, dispatch } = useContext(ThemeContext);
    const changeTheme = (Bool) => {
        dispatch({ type: 'TOGGLE', data: Bool });
    };

    return (
        <Grommet theme={hp}>
            <Header background={{ color: '#69306d' }} pad='small'>
                <Box direction='row' align='center' gap='small'>
                    <Link href='/'>
                        <a>Main</a>
                    </Link>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                    <Link href='/projects'>
                        <a>Projects</a>
                    </Link>
                </Box>

                <Box direction='row' align='center' gap='small'>
                    <CheckBox
                        label='Dark Mode'
                        checked={state.themeMode}
                        onChange={() => changeTheme(!state.themeMode)}
                    />
                </Box>
            </Header>
        </Grommet>
    );
};
