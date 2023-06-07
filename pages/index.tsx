import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from './index.module.css';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Button, Typography, Unstable_Grid2 as Grid } from '@mui/material';

export default function Home({ initialData }: { initialData: number[] }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<Grid container gap={10} marginTop={5} justifyContent='center'>
				<Grid container direction='column' gap={2} alignItems={'center'}>
					<Grid>
						<Typography fontFamily='EB Garamond' variant='h3'>
							Hugo Rydel Full Stack Developer
						</Typography>
					</Grid>
					<Grid>
						<Typography fontFamily='EB Garamond' variant='h6'>
							Through clean, performant web development, I help companies create their
							ideal products
						</Typography>
					</Grid>
					<Grid>
						<Button variant='outlined'>
							<Typography fontFamily={'EB Garamond'}>hugorydel@gmail.com</Typography>
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Layout>
	);
}

// export const getStaticProps: GetStaticProps = async () => {
// 	const initialData = getData();
// 	return {
// 		props: {
// 			initialData,
// 		},
// 	};
// };
