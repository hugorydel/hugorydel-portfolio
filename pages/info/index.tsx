import Layout from '../../components/Layout';
import { Unstable_Grid2 as Grid, Typography } from '@mui/material';

const Index = () => {
	return (
		<Layout>
			<Grid
				container
				alignContent={'center'}
				direction={'column'}
				gap={5}
				marginTop={15}
				padding={[1, 3]}>
				<Typography variant='h3'>A bit about me...</Typography>
				<Grid container direction='row' gap={3}>
					XYZ
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Index;
