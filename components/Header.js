import React, { useContext } from 'react';
import Link from 'next/link';

import { ThemeContext } from './withWrapper';
import { Grommet, Header, Box, CheckBox, Anchor } from 'grommet';
import { grommet } from 'grommet/themes';

export default () => {
    return (
        <Header
            background='brand'
            direction='row'
            pad='small'
            justify='between'
            align='center'
            gap='small'
        >
            {/* <Box direction='row' justify='between' align='center' gap='small'> */}
            <Box>
                <Link href='/'>
                    <a>Mounir Benabderrahmane</a>
                </Link>
            </Box>
            <Box>
                <Box direction='row' align='center' gap='small'>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                    <Link href='/projects'>
                        <a>Projects</a>
                    </Link>
                </Box>
            </Box>
            {/* </Box> */}
        </Header>
    );
};
