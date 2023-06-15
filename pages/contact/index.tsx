import ProjectInquiriesForm from '../../components/ProjectInquiriesForm';
import Layout from '../../components/Layout';
import { Divider, Unstable_Grid2 as Grid, Typography } from '@mui/material';

const Index = () => {
	return (
		<Layout>
			<Grid container direction='column' marginTop={8}>
				<Grid
					container
					direction='row'
					justifyContent={'center'}
					gap={17}
					sx={{ margin: '5rem 2rem 0rem 2rem' }}
					marginTop={10}>
					<Grid
						container
						direction={'column'}
						justifyContent={'center'}
						alignContent={'center'}
						gap={2.5}
						maxWidth={400}>
						<Grid>
							<Typography variant='h4' fontWeight={'600'}>
								Submit Inquiry
							</Typography>
						</Grid>
						<Grid container direction='column'>
							<ProjectInquiriesForm />
						</Grid>
					</Grid>
					<Grid container direction='column' gap={2.5} width={400}>
						<Grid>
							<Typography variant='h4' fontWeight={'600'}>
								Contact Me
							</Typography>
						</Grid>
						<Grid container direction='column' gap={2.2}>
							<Grid container direction='column' rowGap={1}>
								<Typography variant='body1' fontWeight={700}>
									Email
								</Typography>
								<Typography variant='body1'>hugorydel@gmail.com</Typography>
							</Grid>
							<Divider />
							<Grid container direction='column' rowGap={1}>
								<Typography variant='body1' fontWeight={700}>
									Phone
								</Typography>
								<Typography variant='body1'>Hours: 9am-5pm (EST), Mon-Fri</Typography>
								<Typography variant='body1'>930-333-1699</Typography>
							</Grid>
							<Divider />
							<Grid container direction='column' rowGap={1}>
								<Typography variant='body1' fontWeight={700}>
									Discord
								</Typography>
								<Typography variant='body1'>Hugo Rydel - Johnston#7557</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Index;
