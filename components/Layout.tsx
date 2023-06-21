import Head from 'next/head';
import {
	Container,
	Unstable_Grid2 as Grid,
	Typography,
	IconButton,
	Link,
	Theme,
	alpha,
} from '@mui/material';
import NextJSLink from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';

export const siteTitle = 'Hugo Rydel - Portfolio';

export default function Layout({
	children,
	home = false,
}: {
	children: React.ReactNode;
	home?: boolean;
}) {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	const handleMenuOpen = () => {
		setIsOpenMenu(!isOpenMenu);
	};

	const containerStyling = {
		width: '100%',
		boxSizing: 'border-box',
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
	};

	const fontSizesAtBreakpoints = (theme: Theme) => {
		return {
			textDecoration: 'none',
			color: theme.palette.text.primary,
			fontSize: '2rem',
			fontWeight: '900',
		};
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
				<meta property='og:image' content={'/assets/static/open-graph-home.png'} />
			</Head>
			{isOpenMenu ? (
				<Grid
					container
					direction={'column'}
					justifyContent={'stretch'}
					alignItems={'center'}
					textAlign={'center'}
					sx={theme => ({
						backgroundColor: theme.palette.secondary.main,
						zIndex: 1000,
						position: 'absolute',
						width: '100%',
						boxSizing: 'border-box',
						height: '100vh',
					})}>
					<Grid
						container
						direction='column'
						alignItems={'flex-end'}
						width={'100%'}
						sx={{ padding: ['.5rem 1.2rem', '1.3rem 2.5rem'] }}>
						<IconButton
							onClick={handleMenuOpen}
							sx={{
								fontSize: ['16px', '34px'],
							}}>
							<CloseIcon />
						</IconButton>
					</Grid>
					<Grid container sx={{ margin: 'auto 0' }} gap={6} direction='column'>
						<Typography variant='secondary' sx={{ fontSize: '2rem' }}>
							Explore
						</Typography>
						<Link
							sx={theme => fontSizesAtBreakpoints(theme)}
							component={NextJSLink}
							href='/works'>
							WORKS
						</Link>
						<Link
							sx={theme => fontSizesAtBreakpoints(theme)}
							component={NextJSLink}
							href='/contact'>
							CONTACT
						</Link>
						<Link
							sx={theme => fontSizesAtBreakpoints(theme)}
							component={NextJSLink}
							href='/info'>
							INFO
						</Link>
					</Grid>
				</Grid>
			) : (
				<>
					<Grid
						container
						justifyContent={'space-between'}
						alignItems={'center'}
						sx={theme => ({
							...(home && { display: { md: 'none', lg: 'none', xl: 'none' } }),
							height: 'auto',
							padding: ['.5rem .9rem', '1rem 2rem'],
							position: 'fixed',
							width: '100%',
							top: 0,
							zIndex: 999,
							borderBottom:
								theme.palette.mode === 'dark'
									? `1px solid ${theme.palette.background.default}`
									: '1px solid #fff',

							background: theme.palette.background.default,
							...(!home && {
								background: alpha(theme.palette.background.default, 0.5),
								backdropFilter: 'blur(8px)',
							}),

							transition: theme.transitions.create(
								['padding', 'borderBottom', 'borderColor'],
								{
									easing: theme.transitions.easing.easeOut,
									duration: theme.transitions.duration.leavingScreen,
								}
							),
							// Transition the app bar to the right when the menu is opened on PC - when persistent
							...(scrollPosition > 15 && {
								transition: theme.transitions.create(
									['padding', 'borderBottom', 'borderColor'],
									{
										easing: theme.transitions.easing.easeOut,
										duration: theme.transitions.duration.enteringScreen,
									}
								),
								padding: ['.3rem 1.35rem', '.5rem 2rem'],

								borderBottom:
									theme.palette.mode === 'dark'
										? `1px solid #fff`
										: `1px solid ${theme.palette.background.default}`,
							}),
						})}>
						<Link sx={{ textDecoration: 'none' }} component={NextJSLink} href='/'>
							<Typography
								variant='secondary'
								sx={theme => ({
									fontSize: ['1.5rem', '2rem'],
									color: theme.palette.text.primary,
								})}>
								hugo r.
							</Typography>
						</Link>
						<IconButton onClick={handleMenuOpen} sx={{ fontSize: ['16px', '34px'] }}>
							<MenuIcon />
						</IconButton>
					</Grid>
					{children}
				</>
			)}
		</Container>
	);
}
