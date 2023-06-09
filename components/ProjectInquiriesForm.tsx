import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { Button, Unstable_Grid2 as Grid, TextField, TextFieldProps } from '@mui/material';
import InquirySchema, { InquiryTypes } from '../utils/YupValidation';

const CustomTextField = (props: TextFieldProps<'outlined'>) => {
	return (
		<TextField
			InputLabelProps={{ style: { fontSize: '.9rem' } }}
			inputProps={{ style: { fontSize: '.9rem' } }}
			FormHelperTextProps={{ style: { marginLeft: '.2rem' } }}
			sx={{
				'& fieldset': {
					borderColor: 'rgba(0, 0, 0, 1)',
					borderWidth: 1,
					borderRadius: 0,
				},
				'& label': {
					color: '#000',
				},
			}}
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

	const onSubmit = (values, props: FormikHelpers<any>) => {
		props.setSubmitting(true);
		console.log(values);
		alert(JSON.stringify(values));
		props.resetForm();
	};

	return (
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={onSubmit}
				validationSchema={InquirySchema}>
				{props => {
					return (
						<Form
							onSubmit={e => {
								e.preventDefault();
								props.handleSubmit();
							}}>
							<Grid container gap={1}>
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
									create a your application within the set budget.
								</Grid>
								<Button
									variant='outlined'
									color='secondary'
									type='submit'
									sx={{
										marginTop: 1,
										borderRadius: 0,
										fontSize: '0.85rem',
										padding: '5px 1rem',
									}}
									disabled={props.isSubmitting}>
									Submit Inquiry
								</Button>
							</Grid>
						</Form>
					);
				}}
			</Formik>
		</>
	);
};

export default ProjectInquiriesForm;
