import Layout from '../../components/Layout';
import { Unstable_Grid2 as Grid, Link, Theme, Typography } from '@mui/material';
import WorkPreview from '../../components/WorkPreview';
import { getAllWorks } from '../../utils/api';
import { WorkType } from '../../interfaces/work';
import NextJSLink from 'next/link';
interface WorksProps {
	allWorks: WorkType[];
}

const Index: React.FC<WorksProps> = ({ allWorks }) => {
	return (
		<Layout>
			<Grid
				container
				component={'main'}
				sx={{
					marginTop: '11rem',
					paddingBottom: '5rem',
				}}
				alignItems={'center'}
				direction={'column'}>
				<Typography
					variant='secondary'
					sx={{ fontSize: ['1rem', '1.5rem'] }}
					textAlign='center'>
					Selected Works
				</Typography>
				<Typography
					sx={{
						fontSize: ['2.5rem', '3rem'],
						fontWeight: 800,
						maxWidth: '900px',
					}}
					textAlign='center'>
					A STRIKING DESIGN AND A STRONG EMPATHY FOR MY USERS MAKES FOR A MEMORABLE,
					INTUITIVE, PRODUCT
				</Typography>
				<Typography
					sx={{
						fontSize: ['.8rem', '1.4rem'],
						fontWeight: 300,
						maxWidth: ['350px', '700px'],
						margin: '0 auto',
						marginTop: '.6rem',
						// opacity: 0.8,
					}}
					textAlign='center'>
					If you're interested in collaborating or have more questions reach out to me via
					email or phone by visiting the{' '}
					<Link
						sx={theme => ({
							color: theme.palette.text.primary,
							fontWeight: 400,
						})}
						component={NextJSLink}
						href='/contact'>
						contact page
					</Link>
					{'. '}
					Looking forward to hearing from you!
				</Typography>
				<Grid
					container
					direction='row'
					sx={{
						margin: 'auto',
						marginTop: '7rem',
					}}>
					{allWorks.map(({ coverImage, title, skills, slug }, index) => (
						<WorkPreview
							coverImage={
								coverImage.includes('/public/')
									? coverImage.replace('/public/', '/')
									: coverImage
							}
							title={title}
							skills={skills}
							slug={slug}
							key={`${index}`}
						/>
					))}
				</Grid>
			</Grid>
		</Layout>
	);
};

export async function getStaticProps() {
	const allWorks = getAllWorks(['title', 'skills', 'coverImage', 'slug', 'date']);

	return {
		props: {
			allWorks,
		},
	};
}

export default Index;
