import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getWorkBySlug, getAllWorks } from '../../utils/api';
import Head from 'next/head';
import markdownToHtml from '../../utils/markdownToHtml';
import { WorkType } from '../../interfaces/work';
import Layout from '../../components/Layout';
import { Box } from '@mui/material';

interface WorkProps {
	work: WorkType;
}

export default function Work({ work }: WorkProps) {
	const router = useRouter();
	const title = `${work.title} | Works`;
	if (!router.isFallback && !work?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<Layout>
			{router.isFallback ? (
				<div>Loading…</div>
			) : (
				<Box
					component={'article'}
					sx={{
						margin: 'auto',
						marginTop: '10rem',
						paddingBottom: '5rem',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						maxWidth: '550px',
					}}>
					<Head>
						<title>{title}</title>
						<meta property='og:image' content={work.ogImage.url} />
					</Head>
					<h1>
						{work.coverImage} {title} {work.date}
					</h1>
					<div>
						<div
							// className={markdownStyles['markdown']}
							dangerouslySetInnerHTML={{ __html: work.content }}
						/>
					</div>
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
	const content = await markdownToHtml(work.content || '');

	return {
		props: {
			work: {
				...work,
				content,
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
