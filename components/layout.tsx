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

export const dancingScript = Dancing_Script({
	subsets: ['latin'],
	// display: 'swap',
	// variable: '--font-sans',
});

export const siteTitle = 'Hugo Rydel - Portfolio';

const containerStyling = {
	width: '100%',
	boxSizing: 'border-box',
	height: '100vh',
	display: 'flex',
	flexDirection: 'column',
};
const appBarHeight = 90;

export default function Layout({
	children,
	home,
}: {
	children: React.ReactNode;
	home?: boolean;
}) {
	const router = useRouter();

	const isSetUnderlineStyle = (path: '/works' | '/about' | '/contact') => {
		return {
			borderBottom: router.asPath.includes(path)
				? '2px solid #000'
				: `2px solid ${theme.palette.background.default}`,
			transition: 'borderBottom',
		};
	};

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
				sx={{
					minHeight: appBarHeight,
					maxHeight: appBarHeight,
					padding: '3rem 7rem',
				}}>
				<Grid container gap={4} fontFamily='EB Garamond'>
					<Grid sx={isSetUnderlineStyle('/works')}>
						<Link
							sx={{ textDecoration: 'none' }}
							fontWeight={'600'}
							component={NextJSLink}
							href='/works'>
							Works
						</Link>
					</Grid>
					<Grid sx={isSetUnderlineStyle('/about')}>
						<Link
							sx={{ textDecoration: 'none' }}
							fontWeight={'600'}
							component={NextJSLink}
							href='/about'>
							About
						</Link>
					</Grid>
					<Grid sx={isSetUnderlineStyle('/contact')}>
						<Link
							sx={{ textDecoration: 'none' }}
							fontWeight={'600'}
							component={NextJSLink}
							href='/contact'>
							Contact
						</Link>
					</Grid>
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
			<Box
				component={'main'}
				sx={{ height: `calc(100% - ${appBarHeight}px)`, overflow: 'auto' }}>
				{children}
			</Box>
		</Container>
	);
}
