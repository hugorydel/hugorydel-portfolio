import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import {
	AppBar,
	Box,
	Container,
	Unstable_Grid2 as Grid,
	SvgIcon,
	Toolbar,
	Typography,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Dancing_Script } from 'next/font/google';

export const dancingScript = Dancing_Script({ subsets: ['latin'] });

export const siteTitle = 'Hugo Rydel - Portfolio';
const containerStyling = {
	width: '100%',
	boxSizing: 'border-box',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
	padding: '0rem 5rem',
};
const appBarHeight = 90;

export default function Layout({
	children,
	home,
}: {
	children: React.ReactNode;
	home?: boolean;
}) {
	return (
		<Container sx={containerStyling} disableGutters>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Learn about my programming experience, skills, and values'
				/>
				<meta name='og:title' content={siteTitle} />
			</Head>
			<Grid
				container
				justifyContent={'space-between'}
				alignItems={'center'}
				sx={{ minHeight: appBarHeight, maxHeight: appBarHeight }}>
				<Grid container gap={4} fontFamily='EB Garamond'>
					<Grid>
						<Link href='/works'>Works</Link>
					</Grid>
					<Grid>
						<Link href='/about'>About</Link>
					</Grid>
					<Grid>
						<Link href='/contact'>Contact</Link>
					</Grid>
				</Grid>
				<Grid>
					<Typography
						fontWeight={900}
						fontSize='1.5rem'
						role='heading'
						className={dancingScript.className}>
						<Link href='/'>HR</Link>
					</Typography>
				</Grid>
				<Grid container gap={3}>
					<a
						href='https://www.youtube.com/channel/UCBHItuCUkntcf_xWZE4373Q'
						target='_blank'>
						<IconButton aria-label='YouTube channel link'>
							<YouTubeIcon />
						</IconButton>
					</a>
					<a href='https://www.linkedin.com/in/hugo-rydel-229604266/' target='_blank'>
						<IconButton aria-label='Linked In page link'>
							<LinkedInIcon />
						</IconButton>
					</a>
					<a href='https://github.com/hugorydel' target='_blank'>
						<IconButton aria-label='Github link'>
							<GitHubIcon />
						</IconButton>
					</a>
				</Grid>
			</Grid>
			<Box
				component={'main'}
				sx={{ height: `calc(100% - ${appBarHeight}px)`, overflow: 'auto' }}>
				{children}
			</Box>
		</Container>
	);
}
