import React from 'react';

import { Github, Twitter, Linkedin } from 'grommet-icons';
import { Anchor, Box, Footer, Text } from 'grommet';

const Media = () => (
    <Box direction='row' gap='xxsmall' justify='center'>
        <Anchor
            a11yTitle='Follow me on Twitter'
            icon={<Twitter />}
            onClick={() =>
                window.open('https://twitter.com/bnmounir7', '_blank')
            }
        />
        <Anchor
            a11yTitle='Connect with me on Linkedin'
            icon={<Linkedin />}
            onClick={() =>
                window.open('https://www.linkedin.com/in/bnmounir/', '_blank')
            }
        />
        <Anchor
            a11yTitle='Follow me on Github'
            icon={<Github />}
            onClick={() => window.open('https://github.com/bnmounir', '_blank')}
        />
    </Box>
);

export default () => {
    return (
        <Footer pad='large'>
            <Box align='center' direction='row' gap='xsmall'>
                <Text textAlign='center' size='xsmall'>
                    made with ❤️ and open source
                    <br />
                    <Anchor
                        a11yTitle='NEXT JS'
                        label='NEXT.JS'
                        onClick={() =>
                            window.open('https://nextjs.org/', '_blank')
                        }
                    />{' '}
                    +{' '}
                    <Anchor
                        a11yTitle='Grommet'
                        label='Grommet'
                        onClick={() =>
                            window.open('https://v2.grommet.io/', '_blank')
                        }
                    />{' '}
                    +{' '}
                    <Anchor
                        a11yTitle='unDraw'
                        label='unDraw'
                        onClick={() =>
                            window.open('https://undraw.co/', '_blank')
                        }
                    />
                    <br />
                </Text>
            </Box>
            <Box align='center'>
                <Anchor
                    onClick={() =>
                        window.open(
                            'https://docs.google.com/document/d/12Y5dM9nNhmpoXS1prscPWY_ZO-_tsnR4VVAJPi4gFyc/edit?usp=sharing',
                            '_blank'
                        )
                    }
                    a11yTitle='Resume'
                >
                    <Box
                        height='xxsmall'
                        width='xxsmall'
                        a11yTitle='resume'
                        round='full'
                        // eslint-disable-next-line max-len
                        background='url(/avatar.jpg)'
                    />
                    <Text size='xsmall'>Resume</Text>
                </Anchor>
            </Box>

            <Media />
        </Footer>
    );
};
