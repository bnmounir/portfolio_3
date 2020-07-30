import React from 'react';
import Head from 'next/head';
import { Box, Button, Text, Heading, Anchor } from 'grommet';

import withWrapper from '../components/withWrapper';

export default function index() {
    return (
        <div style={{ textAlign: 'center' }}>
            <Head>
                <title>Mounir's Portfolio</title>
            </Head>
            <style jsx>
                {`
                    .container {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        width: 95vw;
                        margin-top: 50px;
                        min-height: 65vh;
                    }
                    .main-box {
                        margin-top: 50px;
                        max-width: 400px;
                    }
                    .main-image {
                        min-width: 320px;
                        height: 400px;
                        background: url('./me.png') no-repeat;
                        background-size: contain;
                    }
                    @media screen and (max-width: 700px) {
                        .container {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            width: 95vw;
                            min-height: 65vh;
                        }
                        .main-image {
                            margin: 30px 0;
                        }
                    }
                `}
            </style>
            <div className='container'>
                <div className='main-box'>
                    <Box
                        animation='fadeIn'
                        direction='column'
                        pad='medium'
                        justify='around'
                    >
                        <Heading margin='xsmall' level='2'>
                            Hi 👋! I'm Mounir, a Software Engineer
                        </Heading>
                        <Heading margin='xsmall' level='4'>
                            I work on user experience, building applications,
                            and making reliable software products. I can help
                            you solve technical challenge you are facing
                        </Heading>
                        <Box>
                            <div>
                                <Anchor
                                    a11yTitle='schedule a meeting'
                                    onClick={() =>
                                        window.open(
                                            'https://calendly.com/bnmounir/30min',
                                            '_blank'
                                        )
                                    }
                                >
                                    <Button
                                        default
                                        label="Let's Talk"
                                        color='brand'
                                    />
                                </Anchor>
                            </div>
                        </Box>
                    </Box>
                </div>
                <div>
                    <Box
                        animation='fadeIn'
                        direction='row'
                        pad='medium'
                        justify='around'
                    >
                        <div className='main-image'></div>
                    </Box>
                </div>
            </div>
        </div>
    );
}
