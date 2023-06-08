import ProjectInquiriesForm from '../../components/ProjectInquiriesForm';
import Layout from '../../components/Layout';
import { Divider, Unstable_Grid2 as Grid, Typography } from '@mui/material';

interface IndexProps {}

const Index: React.FC<IndexProps> = ({}) => {
	return (
		<Layout>
			<Grid container direction='column'>
				<Grid
					component={'header'}
					sx={{ fontSize: 60 }}
					textAlign={'center'}
					paddingBottom={6}>
					Contact
				</Grid>
				<Grid container direction='row' justifyContent={'center'} gap={10}>
					<Grid
						container
						direction={'column'}
						justifyContent={'center'}
						alignContent={'center'}
						gap={2}
						maxWidth={300}>
						<Grid>
							<Typography variant='h5'>Project Inquiries</Typography>
						</Grid>
						<Grid container direction='column'>
							<ProjectInquiriesForm />
						</Grid>
					</Grid>
					<Grid container direction='column' gap={2}>
						<Grid>
							<Typography variant='h5'>Other Contact Options</Typography>
						</Grid>
						<Grid container direction='column' gap={2}>
							<Grid>
								<Typography variant='h6'>Direct Email</Typography>
								<Typography variant='body1'>hugorydel@gmail.com</Typography>
							</Grid>
							<Divider />
							<Grid>
								<Typography variant='h6'>Call Me</Typography>
								<Typography variant='body1'>Hours: 9am-5pm (EST), Mon-Fri</Typography>
								<Typography variant='body1'>930-333-1699</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Index;
