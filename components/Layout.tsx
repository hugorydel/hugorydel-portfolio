import Head from 'next/head';
import {
	Container,
	Unstable_Grid2 as Grid,
	Typography,
	IconButton,
	Link,
	SxProps,
	Theme,
	alpha,
} from '@mui/material';
import NextJSLink from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../theme';
import { useEffect, useState } from 'react';
import { sacramento } from '../utils/fonts';

export const siteTitle = 'Hugo Rydel - Portfolio';

const containerStyling = {
	width: '100%',
	boxSizing: 'border-box',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	const navbarTransitionStyling: SxProps<Theme> = {
		height: 'auto',
		padding: '1rem 2rem',
		position: 'fixed',
		width: '100%',
		top: 0,
		zIndex: 999,
		borderBottom:
			theme.palette.mode === 'dark'
				? `1px solid ${theme.palette.background.default}`
				: '1px solid #fff',

		background: alpha(theme.palette.background.default, 0.5),
		backdropFilter: 'blur(8px)',
		transition: theme.transitions.create(['padding', 'borderBottom', 'borderColor'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.leavingScreen,
		}),
		// Transition the app bar to the right when the menu is opened on PC - when persistent
		...(scrollPosition > 15 && {
			transition: theme.transitions.create(['padding', 'borderBottom', 'borderColor'], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			padding: '.5rem 2rem',
			borderBottom:
				theme.palette.mode === 'dark'
					? `1px solid #fff`
					: `1px solid ${theme.palette.background.default}`,
		}),
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Container sx={containerStyling} disableGutters maxWidth={false}>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Learn about my programming experience, skills, and values'
				/>
				<meta name='og:title' content={siteTitle} />
				<meta property='og:image' content={'/assets/static/home-og-image.png'} />
			</Head>
			<Grid
				container
				justifyContent={'space-between'}
				alignItems={'center'}
				sx={navbarTransitionStyling}>
				<Link sx={{ textDecoration: 'none' }} component={NextJSLink} href='/'>
					<Typography
						className={sacramento.className}
						sx={{ fontSize: '2rem', color: theme.palette.text.primary }}>
						hugo r.
					</Typography>
				</Link>
				<IconButton>
					<MenuIcon fontSize='large' />
				</IconButton>
			</Grid>
			{children}
		</Container>
	);
}
