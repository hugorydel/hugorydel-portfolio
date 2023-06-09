import Head from 'next/head';
import NextJSLink from 'next/link';
import { Box, Container, Unstable_Grid2 as Grid, Typography, Link } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Dancing_Script } from 'next/font/google';
import { useRouter } from 'next/router';
import theme from '../theme';
import { useEffect, useState } from 'react';

export const dancingScript = Dancing_Script({ subsets: ['latin'] });

export const siteTitle = 'Hugo Rydel - Portfolio';

const containerStyling = {
	width: '100%',
	boxSizing: 'border-box',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	const router = useRouter();

	const isSetUnderlineStyle = (path: '/works' | '/about' | '/contact') => {
		return {
			borderBottom: router.asPath.includes(path)
				? '2px solid #000'
				: `2px solid ${theme.palette.background.default}`,
			transition: 'borderBottom',
		};
	};
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	const navbarTransitionStyling = {
		height: 'auto',
		padding: '2rem 7rem',
		position: 'fixed',
		width: '100%',
		top: 0,
		zIndex: 999,
		borderBottom: '1px solid #fff',

		background: theme.palette.background.default,
		transition: theme.transitions.create(['padding', 'borderBottom'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.leavingScreen,
		}),
		// Transition the app bar to the right when the menu is opened on PC - when persistent
		...(scrollPosition > 15 && {
			transition: theme.transitions.create(['padding', 'borderBottom'], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			padding: '1rem 7rem',
			borderBottom: '1px solid #000',
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
			</Head>
			<Grid
				container
				justifyContent={'space-between'}
				alignItems={'center'}
				sx={navbarTransitionStyling}>
				<Grid container gap={4} fontFamily='EB Garamond'>
					<Link
						sx={{ textDecoration: 'none', ...isSetUnderlineStyle('/works') }}
						fontWeight={'600'}
						component={NextJSLink}
						href='/works'>
						Works
					</Link>

					<Link
						sx={{ textDecoration: 'none', ...isSetUnderlineStyle('/about') }}
						fontWeight={'600'}
						component={NextJSLink}
						href='/about'>
						About
					</Link>
					<Link
						sx={{ textDecoration: 'none', ...isSetUnderlineStyle('/contact') }}
						fontWeight={'600'}
						component={NextJSLink}
						href='/contact'>
						Contact
					</Link>
				</Grid>
				<Grid>
					<Link sx={{ textDecoration: 'none' }} component={NextJSLink} href='/'>
						<Typography
							fontWeight={800}
							fontSize='1.5rem'
							role='heading'
							className={dancingScript.className}>
							HR
						</Typography>
					</Link>
				</Grid>
				<Grid container gap={4}>
					<Link href='https://github.com/hugorydel' target='_blank'>
						<IconButton
							aria-label='Github link'
							size='small'
							sx={{ background: theme.palette.background.default }}>
							<GitHubIcon
								sx={{
									maxWidth: 20,
									maxHeight: 20,
									color: theme.palette.getContrastText(theme.palette.background.default),
								}}
							/>
						</IconButton>
					</Link>
					<Link href='https://www.linkedin.com/in/hugo-rydel-229604266/' target='_blank'>
						<IconButton
							aria-label='Linked In page link'
							size='small'
							sx={{ background: theme.palette.background.default }}>
							<LinkedInIcon
								sx={{
									maxWidth: 22,
									maxHeight: 22,
									color: theme.palette.getContrastText(theme.palette.background.default),
								}}
							/>
						</IconButton>
					</Link>
					<Link
						href='https://www.youtube.com/channel/UCBHItuCUkntcf_xWZE4373Q'
						target='_blank'>
						<IconButton aria-label='YouTube channel link' size='small'>
							<YouTubeIcon
								sx={{
									color: theme.palette.getContrastText(theme.palette.background.default),
								}}
							/>
						</IconButton>
					</Link>
				</Grid>
			</Grid>
			<Box component={'main'} sx={{ marginTop: '7rem' }}>
				{children}
			</Box>
		</Container>
	);
}
