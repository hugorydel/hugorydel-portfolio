import { Box, Grid, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import theme from '../theme';
import Image from 'next/image';
import Link from 'next/link';
import { WorkPreviewType } from '../interfaces/work';

export const workPreviewContainerWidth = 300;

// image exact size: container (300px) - container padding (1 rem x 2 sides = 32px) - border (1px x 2 sides) = 266px
// image aspect ratio: 290 height / 266 width = 145 / 133

const WorkPreview: React.FC<WorkPreviewType> = ({ title, skills, coverImage, slug }) => {
	const image = (
		<Image
			src={coverImage}
			alt={`Cover Image for ${title} Project`}
			width={0}
			height={0}
			sizes='100vw'
			style={{ width: '100%', height: 'auto' }}
		/>
	);

	return (
		<Grid
			container
			direction={'column'}
			justifyContent='start'
			alignItems='start'
			gap={0.4}
			sx={{
				border: theme.palette.mode === 'dark' ? '1px solid #fff' : '1px solid #000',
				maxWidth: workPreviewContainerWidth,
				height: 'auto',
				padding: '1rem',
			}}>
			<Link as={`/works/${slug}`} href='/works/[slug]' aria-label={title}>
				<Box
					sx={{
						height: 290,
						display: 'flex',
						alignItems: 'center',
						background: theme.palette.common.white,
					}}>
					{image}
				</Box>
			</Link>
			<Typography sx={{ fontSize: '1.2rem', fontWeight: 900, marginTop: 0.2 }}>
				{title}
			</Typography>
			<Grid
				container
				direction='row'
				alignItems='center'
				columnGap={1}
				rowGap={0.2}
				sx={{ width: workPreviewContainerWidth - 48 }}>
				{skills.map((skill, index) => {
					return (
						<Box
							display={'flex'}
							flexDirection={'row'}
							columnGap={1}
							alignItems={'center'}
							key={index}>
							<Typography sx={{ fontWeight: 900, fontSize: '.65rem' }}>
								{skill.toUpperCase()}
							</Typography>
							{skills.length - 1 > index ? <CircleIcon sx={{ fontSize: 5 }} /> : null}
						</Box>
					);
				})}
			</Grid>
		</Grid>
	);
};

export default WorkPreview;