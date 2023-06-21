import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import NextJSLink from 'next/link';
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import CheckBoxSharpIcon from '@mui/icons-material/CheckBoxSharp';
import CircleIcon from '@mui/icons-material/Circle';
import { Unstable_Grid2 as Grid, Checkbox, Link, Typography, Theme } from '@mui/material';
import { useColorMode } from '../theme';

const fontSizesAtBreakpoints = (theme: Theme) => {
	return {
		color: theme.palette.text.primary,
		[theme.breakpoints.up(1000)]: {
			fontSize: '1.4rem',
			fontWeight: '900',
		},
		[theme.breakpoints.between('md', 1000)]: {
			fontSize: '1.1rem',
			fontWeight: '900',
		},
		[theme.breakpoints.down('md')]: {
			fontSize: '1.1rem',
			fontWeight: '500',
		},
	};
};

const subtitleSkillsStyling = (theme: Theme) => {
	return {
		fontSize: '1rem',
		fontWeight: '900',
		[theme.breakpoints.between(0, 700)]: {
			fontSize: '.75rem',
			fontWeight: '700',
		},
		[theme.breakpoints.between(0, 320)]: {
			fontSize: '.6rem',
			fontWeight: '900',
		},
	};
};

export default function Home() {
	const { mode, toggleColorMode } = useColorMode();
	// const [checked, setChecked] = useState(false);

	return (
		<Layout home>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Learn about my programming experience, skills, and values'
				/>
				<meta name='og:title' content={siteTitle} />
				<title>{siteTitle}</title>
			</Head>
			<Grid
				display={['none', 'none', 'flex']}
				container
				gap={6}
				direction='column'
				position={'absolute'}
				top={50}
				left={50}>
				<Link sx={fontSizesAtBreakpoints} component={NextJSLink} href='/works'>
					WORKS
				</Link>
				<Link sx={fontSizesAtBreakpoints} component={NextJSLink} href='/contact'>
					CONTACT
				</Link>
				<Link sx={fontSizesAtBreakpoints} component={NextJSLink} href='/info'>
					INFO
				</Link>
			</Grid>
			<Grid
				container
				sx={theme => ({
					border: [
						'none',
						'none',
						`2px solid ${theme.palette.mode === 'dark' ? '#f3f3f3' : '#000'}`,
					],
					margin: [0, '1rem'],
					height: '100%',
				})}
				direction='row'
				justifyContent={'center'}
				alignItems={'center'}>
				<Grid
					container
					direction='column'
					alignItems={{
						xs: 'center',
						sm: 'center',
						md: 'center',
						lg: 'center',
					}}>
					<Typography
						variant='secondary'
						sx={{
							fontSize: { xs: '1.25rem', sm: '1.75rem', md: '1.75rem', lg: '2rem' },
						}}>
						Welcome! I'm...
					</Typography>
					<Typography
						variant='body2'
						sx={{
							fontSize: {
								xs: '5rem',
								sm: '7rem',
								md: '7rem',
								lg: '9rem',
								xl: '9rem',
							},
							lineHeight: 1,
							letterSpacing: [-3, -7],
							marginBottom: 1.5,
							textAlign: 'center',
						}}
						fontWeight='900'>
						HUGO RYDEL
					</Typography>
					<Grid
						container
						alignItems='center'
						gap={[1, 3, 4]}
						sx={{
							margin: ['0 auto', '0 0 0 3px'],
						}}>
						<Typography sx={subtitleSkillsStyling} textAlign={'center'}>
							DESIGNER
						</Typography>
						<CircleIcon sx={{ fontSize: [5, 8] }} />
						<Typography sx={subtitleSkillsStyling}>FULL STACK DEVELOPER </Typography>
						<CircleIcon sx={{ fontSize: [5, 8] }} />
						<Typography sx={subtitleSkillsStyling}>STUDENT </Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				container
				gap={4}
				direction='column'
				bottom={[10, 30]}
				right={['auto', 50]}
				left={[10, 'auto']}
				position='absolute'>
				<Grid
					container
					direction='row'
					alignItems='stretch'
					justifyContent='center'
					sx={{ cursor: 'pointer' }}
					onClick={() => toggleColorMode()}>
					<Checkbox
						checked={mode === 'dark' ? true : false}
						onSelect={() => {
							toggleColorMode();
						}}
						icon={<CheckBoxOutlineBlankSharpIcon />}
						checkedIcon={<CheckBoxSharpIcon />}
						sx={theme => ({
							'& .MuiSvgIcon-root': {
								fontSize: ['1rem', '1.5rem'],
								color: theme.palette.text.primary,
							},
						})}
					/>
					<Typography sx={fontSizesAtBreakpoints} margin='auto'>
						DARK
					</Typography>
				</Grid>
			</Grid>
		</Layout>
	);
}
