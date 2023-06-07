import ProjectInquiriesForm from '../../components/ProjectInquiriesForm';
import Layout from '../../components/layout';
import { Unstable_Grid2 as Grid, TextField, Typography } from '@mui/material';

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
	return (
		<Layout>
			<Grid container direction='column'>
				<Grid component={'header'} sx={{ fontSize: 60 }} textAlign={'center'}>
					Contact
				</Grid>
				<Grid container direction='row' justifyContent={'space-between'}>
					<Grid
						container
						direction={'column'}
						justifyContent={'center'}
						alignContent={'center'}
						maxWidth={300}>
						<Grid>
							<Typography variant='h5'>Project Inquiries</Typography>
						</Grid>
						<Grid component={'form'} container direction='column'>
							<ProjectInquiriesForm />
						</Grid>
					</Grid>
					<Grid>
						<Grid>
							<Typography variant='h5'>Other Contact Options</Typography>
						</Grid>
						<Grid>
							<Grid>Paragraph 1 - Email Me</Grid>
							<Grid>Paragraph 2 - Phone Me</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Index;
