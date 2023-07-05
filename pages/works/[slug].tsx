import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getWorkBySlug, getAllWorks } from '../../utils/api';
import Head from 'next/head';
import { WorkType } from '../../interfaces/work';
import Layout from '../../components/Layout';
import { Box, Unstable_Grid2 as Grid, Link, Typography } from '@mui/material';
import NextJSLink from 'next/link';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface WorkProps {
	work: WorkType;
	moreWorks: { before: string | null; after: string | null };
}

export default function Work({ work, moreWorks }: WorkProps) {
	const router = useRouter();
	const siteTitle = `${work.title} | Works`;
	if (!router.isFallback && !work?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	const buttonStyling = theme => {
		return {
			textDecoration: 'none',
			border: `1px solid ${theme.palette.mode === 'dark' ? '#FFF' : '#333'}`,
			padding: '.5rem 1rem',
			borderRadius: '5px',
		};
	};

	return (
		<Layout>
			{router.isFallback ? (
				<div>Loading…</div>
			) : (
				<Box
					sx={{
						margin: 'auto',
						marginTop: '7rem',
						padding: '1rem',
						paddingBottom: '5rem',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						maxWidth: '650px',
					}}>
					<Head>
						<title>{siteTitle}</title>
						<meta property='og:image' content={work.ogImage.url} />
					</Head>

					<Link
						component={NextJSLink}
						sx={{
							textDecoration: 'none',
						}}
						href={`/works`}>
						<Box
							sx={theme => ({
								fontSize: '1rem',
								color: theme.palette.text.primary,
								marginBottom: 0.5,
								display: 'flex',
								direction: 'row',
								gap: 0.5,
								alignItems: 'center',
							})}>
							<ArrowBackIcon fontSize='small' />
							<div>Go Back</div>
						</Box>
					</Link>
					<Typography
						variant='h4'
						display='block'
						sx={{ fontWeight: 900, margin: '0rem 0 .5rem 0' }}>
						{work.title}
					</Typography>
					<Typography fontSize={14}>By: Hugo Rydel; Completed: {work.date} </Typography>
					<Grid component={'article'} container gap={2} marginTop={3}>
						<ReactMarkdown
							components={{
								h1: props => (
									<Typography children={props.children} width='100%' variant='h3' />
								),
								h2: props => (
									<Typography children={props.children} width='100%' variant='h4' />
								),
								h3: props => (
									<Typography
										children={props.children}
										width='100%'
										variant='h5'
										sx={{ margin: '.1rem 0', fontWeight: 600 }}
									/>
								),
								p: props => (
									<Typography
										children={props.children}
										variant='body1'
										sx={{ fontSize: '1rem' }}
									/>
								),
								img: props => {
									return (
										<Image
											src={
												props.src.includes('/public/')
													? props.src.replace('/public/', '/')
													: props.src
											}
											alt={props.alt}
											width={0}
											height={0}
											sizes='100vw'
											style={{
												width: '100%',
												height: 'auto',
												margin: '1rem 0 1rem 0',
											}}
										/>
									);
								},
								ul: props => (
									<Box
										sx={{
											paddingLeft: 2.3,
											direction: 'column',
											fontSize: '1.15rem',
										}}
										component='ul'
										children={props.children}
									/>
								),
								ol: props => (
									<Box
										sx={{
											paddingLeft: 2.3,
											direction: 'column',
											fontSize: '1.15rem',
										}}
										component='ol'
										children={props.children}
									/>
								),
								li: props => (
									<Box
										sx={{
											paddingLeft: 1,
											marginTop: 0.5,
										}}
										children={props.children}
										component='li'
									/>
								),
							}}>
							{work.content}
						</ReactMarkdown>
					</Grid>
					<Grid
						container
						direction='row'
						justifyContent='space-between'
						width='100%'
						marginTop={10}>
						{moreWorks.before ? (
							<Link
								sx={theme => buttonStyling(theme)}
								component={NextJSLink}
								href={`/works/${moreWorks.before}`}>
								<Box
									sx={theme => ({
										fontSize: '1rem',
										color: theme.palette.text.primary,
										display: 'flex',
										direction: 'row',
										fontWeight: 'bold',
										gap: 0.5,
										justifyContent: 'center',
									})}>
									<ArrowBackIcon />
									<div>Previous</div>
								</Box>
							</Link>
						) : (
							<div></div>
						)}
						{moreWorks.after ? (
							<Link
								sx={theme => buttonStyling(theme)}
								component={NextJSLink}
								href={`/works/${moreWorks.after}`}>
								<Typography
									sx={theme => ({
										fontSize: '1rem',
										color: theme.palette.text.primary,
										display: 'flex',
										direction: 'row',
										fontWeight: 'bold',
										gap: 0.5,
										justifyContent: 'center',
									})}>
									Next <ArrowForwardIcon />
								</Typography>
							</Link>
						) : (
							<div></div>
						)}
					</Grid>
				</Box>
			)}
		</Layout>
	);
}

type Params = {
	params: {
		slug: string;
	};
};

export async function getStaticProps({ params }: Params) {
	const work = getWorkBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'skills',
		'content',
		'ogImage',
		'coverImage',
	]);
	const works = getAllWorks(['slug']);
	const indexOfWork = works.findIndex(value => value.slug === params.slug);

	return {
		props: {
			work,
			moreWorks: {
				before: works[indexOfWork - 1]?.slug || works[works.length - 1]?.slug || null,
				after: works[indexOfWork + 1]?.slug || works[0]?.slug || null,
			},
		},
	};
}

export async function getStaticPaths() {
	const works = getAllWorks(['slug']);

	return {
		paths: works.map(work => {
			return {
				params: {
					slug: work.slug,
				},
			};
		}),
		fallback: false,
	};
}
