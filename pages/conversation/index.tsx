import Head from 'next/head';
import Layout from '../../components/layout';
import style from './index.module.css';
import { GetStaticProps } from 'next';
import IntroBox from '../../components/IntroBox';

export function getData() {
	// Get file names under /posts
	const a = [1, 2, 3];
	return a;
}

export default function Conversation({ initialData }: { initialData: number[] }) {
	return (
		<Layout>
			<Head>
				<title>Conversation</title>
			</Head>
			<div className={style.centerContainer2}>
				<div className={style.innerContainerPage2}>
					<IntroBox />
				</div>
			</div>
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
