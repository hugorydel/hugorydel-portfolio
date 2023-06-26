import Layout from '../../components/Layout';
import { Unstable_Grid2 as Grid, Typography } from '@mui/material';
import WorkPreview from '../../components/WorkPreview';
import { getAllWorks } from '../../utils/api';
import { WorkType } from '../../interfaces/work';

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
					sx={{ fontSize: ['1rem', '1.4rem'] }}
					textAlign='center'>
					Selected Works
				</Typography>
				<Typography
					sx={{
						fontSize: ['2.5rem', '3.5rem'],
						fontWeight: 800,
					}}
					textAlign='center'>
					SIMPLE, BOLD, & FUNCTIONAL
				</Typography>
				<Typography
					sx={{
						fontSize: ['.8rem', '1.2rem'],
						fontWeight: 800,
						maxWidth: ['350px', '550px'],
						margin: '0 auto',
						marginTop: '.5rem',
					}}
					textAlign='center'>
					THE BELOW PROJECTS BEST ILLUSTRATE THESE QUALITIES IN MY RECENT WORK
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
