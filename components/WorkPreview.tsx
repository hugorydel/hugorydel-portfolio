import { Box, Unstable_Grid2 as Grid, Link, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import Image from 'next/image';
import NextJSLink from 'next/link';
import { WorkPreviewType } from '../interfaces/work';

const WorkPreview: React.FC<WorkPreviewType> = ({ title, skills, coverImage, slug }) => {
	// const [isLoading, setIsLoading] = useState(true);

	// useEffect(() => {
	// 	setTimeout(() => setIsLoading(false), 0);
	// }, []);

	return (
		<Grid
			container
			direction={'column'}
			gap={0.4}
			lg={3}
			md={4}
			sm={6}
			xs={12}
			sx={theme => ({
				border: theme.palette.mode === 'dark' ? '1px solid #fff' : '1px solid #000',
				padding: '.75rem',
				cursor: 'pointer',
				maxWidth: '300px',
				'&:hover': {
					background: theme.palette.secondary.main,
				},
			})}>
			{/* {isLoading ? (
				<div>
					<Skeleton
						animation='wave'
						variant='rectangular'
						sx={{
							height: '290px',
							width: '275px',
						}}
					/>
					<Skeleton animation='wave' variant='text' height={30} />
					<Skeleton animation='wave' variant='text' height={10} />
				</div>
			) : ( */}
			<Link
				component={NextJSLink}
				href={`/works/${slug}`}
				aria-label={title}
				style={{ textDecoration: 'none' }}>
				<Image
					src={coverImage}
					alt={`Cover Image for ${title} Project`}
					priority
					width={275}
					height={290}
					style={{
						width: '100%',
						minHeight: '290px',
						// maxHeight: '290px',
						maxHeight: '100%',
						// maxWidth: '320px',
						objectFit: 'cover',
					}}
					sizes='100vw'
				/>
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
			{/* )} */}
		</Grid>
	);
};

export default WorkPreview;
