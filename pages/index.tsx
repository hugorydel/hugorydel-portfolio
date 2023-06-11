import Head from 'next/head';
import { siteTitle } from '../components/Layout';
import NextJSLink from 'next/link';
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import CheckBoxSharpIcon from '@mui/icons-material/CheckBoxSharp';
import CircleIcon from '@mui/icons-material/Circle';

import {
	Unstable_Grid2 as Grid,
	Container,
	Checkbox,
	Link,
	Typography,
} from '@mui/material';

const containerStyling = {
	width: '100%',
	boxSizing: 'border-box',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
};

import { Sacramento } from 'next/font/google';
import theme from '../theme';
import { lato } from './_app';
import { useState } from 'react';

export const sacramento = Sacramento({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400'],
});

export default function Home() {
	const [checked, setChecked] = useState(false);

	return (
		<Container sx={containerStyling} disableGutters maxWidth={false}>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Learn about my programming experience, skills, and values'
				/>
				<meta name='og:title' content={siteTitle} />
				<title>{siteTitle}</title>
			</Head>
			<Grid container gap={6} direction='column' position={'absolute'} top={50} left={50}>
				<Link
					sx={{
						textDecoration: 'none',
						fontSize: '2rem',
						fontWeight: '500',
						color: theme.palette.text.primary,
					}}
					component={NextJSLink}
					href='/works'>
					WORKS
				</Link>
				<Link
					sx={{
						textDecoration: 'none',
						fontSize: '2rem',
						fontWeight: '500',
						color: theme.palette.text.primary,
					}}
					component={NextJSLink}
					href='/contact'>
					CONTACT
				</Link>
				<Link
					sx={{
						textDecoration: 'none',
						fontSize: '2rem',
						fontWeight: '500',
						color: theme.palette.text.primary,
					}}
					component={NextJSLink}
					href='/info'>
					INFO
				</Link>
			</Grid>
			<Grid
				container
				sx={{ border: '2px solid #000', margin: '1rem', height: '100%' }}
				direction='row'
				justifyContent={'center'}
				alignItems={'center'}>
				<Grid container direction='column'>
					<Grid>
						<Typography className={sacramento.className} sx={{ fontSize: '2rem' }}>
							Welcome! I'm...
						</Typography>
					</Grid>
					<Grid>
						<Typography
							sx={{ fontSize: '6rem', lineHeight: 1, marginBottom: 1 }}
							fontWeight='700'
							className={lato.className}>
							HUGO RYDEL
						</Typography>
					</Grid>
					<Grid
						container
						direction='row'
						alignItems='center'
						gap={4}
						sx={{ marginLeft: 0.5, marginTop: 0.5 }}>
						<Grid fontWeight={'700'}>DESIGNER</Grid>
						<CircleIcon sx={{ fontSize: 8 }} />
						<Grid fontWeight={'700'}>FULL STACK DEVELOPER</Grid>
						<CircleIcon sx={{ fontSize: 8 }} />
						<Grid fontWeight={'700'}>STUDENT</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				container
				gap={4}
				direction='column'
				bottom={30}
				right={50}
				position='absolute'>
				<Grid
					container
					direction='row'
					alignItems='stretch'
					justifyContent='center'
					sx={{ cursor: 'pointer' }}
					onClick={() => setChecked(!checked)}>
					<Checkbox
						checked={checked}
						onSelect={() => {
							setChecked(!checked);
						}}
						icon={<CheckBoxOutlineBlankSharpIcon />}
						checkedIcon={<CheckBoxSharpIcon />}
						sx={{
							'& .MuiSvgIcon-root': {
								fontSize: '2rem',
								color: theme.palette.text.primary,
							},
						}}
					/>
					<Typography className={lato.className} margin='auto' sx={{ fontSize: '2rem' }}>
						DARK
					</Typography>
				</Grid>
			</Grid>
		</Container>
	);
}
