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
			border: `2px solid ${theme.palette.mode === 'dark' ? '#FFF' : '#000'}`,
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
						marginTop: '10rem',
						padding: '1rem',
						paddingBottom: '5rem',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
						maxWidth: '550px',
					}}>
					<Head>
						<title>{siteTitle}</title>
						<meta property='og:image' content={work.ogImage.url} />
					</Head>

					<Link component={NextJSLink} sx={{ textDecoration: 'none' }} href={`/works`}>
						<Typography
							sx={theme => ({
								fontSize: '1rem',
								color: theme.palette.text.primary,
								marginBottom: 1,
							})}>
							{`<--`} Go Back
						</Typography>
					</Link>
					<Typography variant='h3' display='block'>
						{work.title} | {work.date}
					</Typography>
					<Grid
						component={'article'}
						container
						display='column'
						gap={3}
						marginTop={4}
						alignItems={'center'}
						justifyContent='stretch'>
						<ReactMarkdown
							components={{
								h1: props => <Typography children={props.children} variant='h1' />,
								h2: props => <Typography children={props.children} variant='h2' />,
								h3: props => <Typography children={props.children} variant='h3' />,
								p: props => <Typography children={props.children} variant='body1' />,
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
											style={{ width: '100%', height: 'auto' }}
										/>
									);
								},
							}}>
							{work.content}
						</ReactMarkdown>
					</Grid>
					<Grid
						container
						direction='row'
						justifyContent={'space-between'}
						width={'100%'}
						marginTop={10}>
						{moreWorks.before ? (
							<Link
								sx={theme => buttonStyling(theme)}
								component={NextJSLink}
								href={`/works/${moreWorks.before}`}>
								<Typography
									sx={theme => ({ fontSize: '1rem', color: theme.palette.text.primary })}>
									{`<--`} Previous
								</Typography>
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
									sx={theme => ({ fontSize: '1rem', color: theme.palette.text.primary })}>
									Next {`-->`}
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
