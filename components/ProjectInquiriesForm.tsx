import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { Button, Unstable_Grid2 as Grid, TextField, TextFieldProps } from '@mui/material';
import InquirySchema, { InquiryTypes } from '../utils/YupValidation';
import emailjs from '@emailjs/browser';

const CustomTextField = (props: TextFieldProps<'outlined'>) => {
	return (
		<TextField
			InputLabelProps={{ style: { fontSize: '.9rem' } }}
			inputProps={{ style: { fontSize: '.9rem' } }}
			FormHelperTextProps={{ style: { marginLeft: '.2rem' } }}
			sx={theme => ({
				'& fieldset': {
					borderColor:
						theme.palette.mode === 'dark' ? 'rgba(234, 234, 234, 1)' : 'rgba(0, 0, 0, 1)',
					borderWidth: 1,
					borderRadius: 0,
				},
				'& label': {
					color:
						theme.palette.mode === 'dark' ? 'rgba(234, 234, 234, 1)' : 'rgba(0, 0, 0, 1)',
				},
			})}
			{...props}
		/>
	);
};

const ProjectInquiriesForm = () => {
	const initialValues: InquiryTypes = {
		name: '',
		email: '',
		phoneNumber: '',
		project: '',
	};

	const onSubmit = (values: InquiryTypes, props: FormikHelpers<any>) => {
		props.setSubmitting(true);
		emailjs
			.send(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				values,
				process.env.NEXT_PUBLIC_PUBLIC_KEY
			)
			.then(
				response => {
					console.log('SUCCESS!', response.status);
				},
				err => {
					console.log('SEND FAILED...');
				}
			);
		props.resetForm();
		props.setSubmitting(false);
	};

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={InquirySchema}>
				{props => {
					return (
						<Grid
							container
							direction='column'
							component={Form}
							gap={1}
							onSubmit={e => {
								e.preventDefault();
								props.handleSubmit();
							}}>
							{/* <Grid  > */}
							<Field
								as={CustomTextField}
								label='Name'
								type='text'
								name='name'
								fullWidth
								helperText={<ErrorMessage name='name' />}
								error={props.errors.name && props.touched.name}
								required
							/>
							<Field
								as={CustomTextField}
								label='Email'
								type='email'
								name='email'
								fullWidth
								helperText={<ErrorMessage name='email' />}
								error={props.errors.email && props.touched.email}
								required
							/>
							<Field
								as={CustomTextField}
								label='Phone Number'
								type='tel'
								name='phoneNumber'
								fullWidth
								helperText={<ErrorMessage name='phoneNumber' />}
								error={props.errors.phoneNumber && props.touched.phoneNumber}
							/>
							<Field
								as={CustomTextField}
								label='Project'
								type='text'
								name='project'
								multiline
								fullWidth
								helperText={<ErrorMessage name='project' />}
								error={props.errors.project && props.touched.project}
								required
								minRows={2}
							/>
							<Grid>
								You will get a response within the next 24 hours. We will explain how to
								create a your application within the set budget and guidelines.
							</Grid>
							<Button
								variant='outlined'
								color='secondary'
								type='submit'
								sx={{
									maxWidth: '200px',
									marginTop: 1,
									borderRadius: 0,
									fontSize: '0.85rem',
									padding: '5px 1rem',
								}}
								disabled={props.isSubmitting}>
								Submit Inquiry
							</Button>
							{/* </Grid> */}
						</Grid>
					);
				}}
			</Formik>
		</>
	);
};

export default ProjectInquiriesForm;
