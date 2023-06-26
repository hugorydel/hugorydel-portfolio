import { Box, Unstable_Grid2 as Grid, Link, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import Image from 'next/image';
import NextJSLink from 'next/link';
import { WorkPreviewType } from '../interfaces/work';

const WorkPreview: React.FC<WorkPreviewType> = ({ title, skills, coverImage, slug }) => {
	const image = (
		<Image
			src={coverImage}
			alt={`Cover Image for ${title} Project`}
			width={0}
			height={0}
			sizes='100vw'
			style={{ width: '100%', height: '290px', objectFit: 'cover' }}
		/>
	);

	return (
		<Grid
			container
			direction={'column'}
			xs={12}
			sm={6}
			md={4}
			lg={3}
			gap={0.4}
			sx={theme => ({
				border: theme.palette.mode === 'dark' ? '1px solid #fff' : '1px solid #000',
				padding: '1rem',
				cursor: 'pointer',
				'&:hover': {
					background: theme.palette.secondary.main,
				},
			})}>
			<Link
				component={NextJSLink}
				href={`/works/${slug}`}
				aria-label={title}
				style={{ textDecoration: 'none' }}>
				{image}
				<Typography
					sx={theme => ({
						fontSize: '1.2rem',
						fontWeight: 900,
						marginTop: 0.2,
						color: theme.palette.text.primary,
					})}>
					{title}
				</Typography>
				<Grid container direction='row' alignItems='center' columnGap={1} rowGap={0.2}>
					{skills.map((skill, index) => {
						return (
							<Box
								display={'flex'}
								flexDirection={'row'}
								columnGap={1}
								alignItems={'center'}
								key={index}>
								<Typography
									sx={theme => ({
										fontWeight: 900,
										fontSize: '.65rem',
										color: theme.palette.text.primary,
									})}>
									{skill.toUpperCase()}
								</Typography>
								{skills.length - 1 > index ? (
									<CircleIcon
										sx={theme => ({ fontSize: 5, color: theme.palette.text.primary })}
									/>
								) : null}
							</Box>
						);
					})}
				</Grid>
			</Link>
		</Grid>
	);
};

export default WorkPreview;
