import Layout from '../../components/Layout';
import { Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { sacramento } from '../../utils/fonts';
import WorkPreview, { workPreviewContainerWidth } from '../../components/WorkPreview';
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
				sx={{ marginTop: '10rem', paddingBottom: '5rem' }}
				alignContent={'center'}
				direction={'column'}>
				<Typography
					className={sacramento.className}
					sx={{ fontSize: '1.4rem' }}
					textAlign='center'>
					Selected Works
				</Typography>
				<Typography sx={{ fontSize: '3.5rem', fontWeight: 800 }} textAlign='center'>
					SIMPLE, BOLD, & FUNCTIONAL
				</Typography>
				<Typography
					sx={{ fontSize: '1.2rem', fontWeight: 800, maxWidth: '550px', margin: 'auto' }}
					textAlign='center'>
					THE BELOW PROJECTS BEST ILLUSTRATE THESE QUALITIES IN MY RECENT WORK
				</Typography>
				<Grid
					container
					direction='row'
					sx={{ maxWidth: workPreviewContainerWidth * 3, margin: 'auto', marginTop: 7 }}>
					{allWorks.map(({ coverImage, title, skills, slug }, index) => (
						<WorkPreview
							coverImage={coverImage}
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
	const allWorks = getAllWorks(['title', 'skills', 'coverImage', 'slug']);

	return {
		props: {
			allWorks,
		},
	};
}

export default Index;
