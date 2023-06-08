import Layout from '../../components/Layout';
import { Divider, Unstable_Grid2 as Grid, Typography } from '@mui/material';

const projectList = [
	{ id: 100, title: 'Personal Brand', skills: ['Next.js', 'Typescript', 'Material UI'] },
	{ id: 101, title: 'Polymastro', skills: ['React.js', 'Typescript', 'Firebase'] },
	{ id: 102, title: 'Fox Fill', skills: ['React.js', 'Material UI', 'Firebase'] },
	{ id: 103, title: 'DevCamper API', skills: ['Node.js', 'Express.js', 'Postman'] },
];

const Index: React.FC = () => {
	return (
		<Layout>
			<Grid
				container
				justifyContent={'center'}
				alignContent={'center'}
				direction={'column'}
				gap={5}
				paddingTop={3}>
				<Typography variant='h3'>Projects & Works</Typography>
				<Grid container direction='column' gap={2}>
					{projectList.map(project => {
						return (
							<>
								<Grid container justifyContent={'space-between'}>
									<Grid>{project.title}</Grid>
									<Grid container>
										{project.skills.map(skill => {
											return <Grid>{skill}</Grid>;
										})}
									</Grid>
								</Grid>
								<Divider />
							</>
						);
					})}
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Index;
