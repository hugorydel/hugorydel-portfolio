import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { GetStaticProps } from 'next';

export function getData() {
	// Get file names under /posts
	const a = [1, 2, 3];
	return a;
}

export default function Home({ initialData }: { initialData: number[] }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<div className={utilStyles.title}>
				Hi! My name’s Hugo Rydel, and I’m a Full Stack Developer
			</div>
			<div>Click To Begin!</div>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const initialData = getData();
	return {
		props: {
			initialData,
		},
	};
};
