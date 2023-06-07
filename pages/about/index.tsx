import Layout from '../../components/layout';
import { Unstable_Grid2 as Grid, Typography } from '@mui/material';

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
	return (
		<Layout>
			<Grid
				container
				justifyContent={'center'}
				direction={'column'}
				gap={5}
				paddingTop={3}>
				<Typography variant='h3'>About</Typography>
				<Grid container direction='row' gap={3}>
					<Grid xs={12} md={5.5}>
						<Typography fontWeight={'bold'}>
							What are you currently working on?
						</Typography>
						<Typography>
							<div>
								<div>1. XYZ divnked</div>
								<div>2. ABC.com divnked</div>
								<div>3. Learning D</div>
							</div>
						</Typography>
					</Grid>
					<Grid xs={12} md={5.5}>
						<Typography fontWeight={'bold'}>What is important to you at work?</Typography>
						<Typography>
							It was popularised in the 195.50s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop publishing
							software like Aldus PageMaker including versions of Lorem Ipsum
						</Typography>
					</Grid>
					<Grid xs={12} md={5.5}>
						<Typography fontWeight={'bold'}>What is you life outside of work?</Typography>
						<Typography>
							It has survived not only five centuries, but also the leap into electronic
							typesetting, remaining essentially unchanged.
						</Typography>
					</Grid>
					<Grid xs={12} md={5.5}>
						<Typography fontWeight={'bold'}>What is you life outside of work?</Typography>
						<Typography>
							It has survived not only five centuries, but also the leap into electronic
							typesetting, remaining essentially unchanged.
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Index;
