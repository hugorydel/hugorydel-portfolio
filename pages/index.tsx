import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import { Button, Typography, Unstable_Grid2 as Grid, Box } from '@mui/material';

const imageContainerCommonStyle = { position: 'fixed', zIndex: 0, cursor: 'pointer' };

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<Grid
				container
				gap={10}
				marginTop={'4rem'}
				justifyContent='center'
				textAlign={'center'}>
				<Grid
					container
					direction='column'
					gap={3}
					alignItems={'center'}
					marginLeft={5.5}
					sx={{ maxWidth: 700 }}>
					<Grid>
						<Typography
							fontFamily='EB Garamond'
							letterSpacing={-1}
							lineHeight={1.3}
							sx={{ fontSize: '4rem', fontWeight: 700 }}>
							Hugo Rydel <br /> Full Stack Developer
						</Typography>
					</Grid>
					<Grid maxWidth={540}>
						<Typography
							fontFamily='EB Garamond'
							letterSpacing={-0.5}
							sx={{ fontSize: '2rem', fontWeight: 600 }}>
							Through clean, performant web development, I help companies create their
							ideal products
						</Typography>
					</Grid>
					<Grid>
						<Button
							variant='outlined'
							sx={{ borderRadius: 10, padding: '.6rem 2.2rem', marginTop: 1 }}>
							<Typography
								fontFamily='EB Garamond'
								letterSpacing={0}
								sx={{ fontSize: '1.2rem', fontWeight: 500 }}>
								hugorydel@gmail.com
							</Typography>
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Box
				sx={{
					top: '70%',
					right: '10%',
					rotate: '2deg',
					...imageContainerCommonStyle,
				}}>
				<img
					style={{
						maxHeight: '130px',
						outline: '8px solid #666',
						filter: 'grayscale(.8)',
					}}
					src={`/static/hugo-with-dad.jpg`}
					srcSet={`/static/hugo-with-dad.jpg`}
					alt={'Hugo With Dad'}
				/>
			</Box>
			{/* <Box
				sx={{
					top: '68%',
					right: '12%',
					rotate: '2deg',
					...imageContainerCommonStyle,
				}}>
				<img
					style={{ maxHeight: '140px', ...imageCommonStyle }}
					src={`/static/hugo-with-dad.jpg`}
					srcSet={`/static/hugo-with-dad.jpg`}
					alt={'Hugo With Dad'}
				/>
			</Box> */}
			<Box
				sx={{
					top: '30%',
					left: '10%',
					rotate: '-2deg',
					...imageContainerCommonStyle,
				}}>
				<img
					style={{
						maxWidth: '150px',
						outline: '8px solid #ccc',
						filter: 'grayscale(.8)',
					}}
					src={`/static/hugo-profile-picture.jpg`}
					srcSet={`/static/hugo-profile-picture.jpg`}
					alt={'My Profile Image'}
				/>
			</Box>
		</Layout>
	);
}
