import Layout from '../../components/Layout';
import { Unstable_Grid2 as Grid, Typography } from '@mui/material';

const Index = () => {
	return (
		<Layout>
			<Grid
				container
				alignContent={'center'}
				direction={'column'}
				gap={3}
				marginTop={22}
				padding={[1, 2]}>
				<Typography variant='h3' fontWeight={700}>
					My Story
				</Typography>
				<Grid
					container
					sx={{ maxWidth: [650], paddingBottom: 15 }}
					direction='row'
					gap={3}>
					<div>
						<div
							style={{
								fontWeight: 500,
								fontSize: '1.2rem',
								padding: '.5rem 0 .75rem 0',
							}}>
							Experience:{' '}
						</div>
						<p>
							I am a skilled full stack developer with 3 years of experience in the
							industry. Through my career, I collaborated with clients, developers, and
							customers to create exceptional products. My expertise spans both front-end
							and back-end development, and I have leveraged modern technologies such as
							React, Next.js, Typescript, and Node.js to build visually appealing and
							well-structured applications... in style. In all, I have completed 14 tools
							and published 4 sites that showcase my technical skills and attention to
							detail
						</p>
					</div>
					<div>
						<div
							style={{
								fontWeight: 500,
								fontSize: '1.2rem',
								padding: '.5rem 0 .75rem 0',
							}}>
							Strengths:{' '}
						</div>
						<p>
							One of my prime strengths is the ability to communicate effectively. I
							regularly engage with clients and developers to ensure successful project
							completion - and I love doing it! Only with its help can I meet client
							expectations and make something they really enjoy, so I'm glad to have it.
						</p>
					</div>
					<div>
						<div
							style={{
								fontWeight: 500,
								fontSize: '1.2rem',
								padding: '.5rem 0 .75rem 0',
							}}>
							Work Goal:
						</div>
						<p>
							Currently, I'm looking for a remote position as a junior to medium full
							stack developer. I am excited to contribute my skills and expertise to a new
							team and take on fresh challenges. Good luck with your search!
						</p>
					</div>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default Index;
