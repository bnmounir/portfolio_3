import React from 'react';
import Head from 'next/head';

import { Heading, Box, Image, Paragraph } from 'grommet';
import withWrapper from '../components/withWrapper';

const projectsArray = [
    {
        title: 'Data structure and Front-end Technology',
        body:
            'Blockchain · Angular 2 · Typescript \n This was my final project at a coding bootcamp. The presentation slideshow is @ bit.ly/2GBMWwY',
        imgUrl:
            'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/51/1057186/ee339236805d812fed72bc02b77d94d4-original.png',
        projectLink: 'https://good-shawarma.netlify.com/',
    },
    {
        title: 'Authentication Flow',
        body:
            'ExpressJS · Node.js · Passport-Jwt \n This is a full stack application that uses a token-based authentication flow.',
        imgUrl:
            'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/99/1115273/b1c3a0cc0427a9fb7549df2c134f31c4-original.png',
        projectLink: 'https://auth-react-owl.netlify.com/#/',
    },

    {
        title: 'YouTube API & React',
        body:
            'React, YouTube API, Axios \n A small interface for searching YouTube videos.',
        imgUrl:
            'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/51/1057230/8c8a0b2697af65179d209a256ed5a7e3-original.png',
        projectLink: 'https://github.com/bnmounir/youtube-api-react',
    },
    {
        title: 'Server Side Rendering',
        body:
            'React · NextJS · Bitcoin Api  \n A tiny app demonstrating isomorphic rendering and fetching data on top of NextJS framework',
        imgUrl:
            'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/db/1057182/8d504115bf46667874b9e66002673235-original.png',
        projectLink: 'https://next-bitcoin.netlify.com/',
    },
    {
        title: 'Continuous Deployment',
        body:
            "The code for this app is hosted on Github, I'm using Netlify's built-in tools for continuous deployment, It's extremely useful for productivity, I just specified the Github repo and the build command and Netlify handles the rest.",
        imgUrl:
            'https://s3.amazonaws.com/poly-screenshots.angel.co/Project/c0/1057255/580f07fc2c53d54072f72c3fba5570df-original.png',
        projectLink: 'https://github.com/bnmounir/portfolio_3',
    },
];

const ProjectBoxList = () =>
    projectsArray.map((Project) => (
        <Box
            a11yTitle={Project.title}
            key={Project.title}
            direction='row-responsive'
            gap='large'
            justify='between'
            align='center'
            margin='large'
            elevation='xsmall'
            pad='small'
            round='small'
            hoverIndicator={true}
            onClick={() => window.open(Project.projectLink, '_blank')}
            animation='fadeIn'
        >
            <Box
                height='medium'
                width='medium'
                justify='center'
                align='center'
                fill='horizontal'
                margin='none'
            >
                <Heading size='small' textAlign='center'>
                    {Project.title}
                </Heading>
                <Paragraph textAlign='center'>{Project.body}</Paragraph>
            </Box>

            <Box
                margin='none'
                height='medium'
                width='medium'
                border={{
                    color: '#7D4CDB',
                    size: 'medium',
                }}
                overflow='hidden '
                round='small'
                fill='horizontal'
            >
                <Image src={Project.imgUrl} fit='cover' />
            </Box>
        </Box>
    ));

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>

            <Box pad='medium'>
                <Head>
                    <title>Projects</title>
                </Head>
                <Box
                    animation='fadeIn'
                    direction='column'
                    pad='medium'
                    align='center'
                >
                    <Box pad='medium'>
                        <Heading margin={{ top: 'none' }}>Projects</Heading>
                    </Box>
                </Box>
                {ProjectBoxList()}
            </Box>
        </>
    );
}
