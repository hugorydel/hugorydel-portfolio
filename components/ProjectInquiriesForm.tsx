import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button, Unstable_Grid2 as Grid, TextField } from '@mui/material';
import InquirySchema, { InquiryTypes } from '../utils/YupValidation';

const ProjectInquiriesForm = () => {
	const initialValues: InquiryTypes = {
		name: '',
		email: '',
		phoneNumber: '',
		project: '',
	};

	// const validateForm = (values: FormValues) => {
	// 	const errors = { email: '', password: '' };
	// 	if (!values.email) {
	// 		errors.email = 'Required';
	// 	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
	// 		errors.email = 'Invalid email address';
	// 	}
	// 	return errors;
	// };

	const handleSubmit = (values, props) => {
		console.log(values);
		// alert(JSON.stringify(values));
		props.resetForm();
	};

	return (
		<>
			<Formik
				initialValues={initialValues}
				// validate={validateForm}
				onSubmit={handleSubmit}
				validationSchema={InquirySchema}>
				{props => {
					return (
						<Form>
							<Grid container gap={2}>
								<Field
									as={TextField}
									label='Name'
									type='text'
									name='name'
									fullWidth
									helperText={<ErrorMessage name='name' />}
									error={props.errors.name && props.touched.name}
									required
								/>
								<Field
									as={TextField}
									label='Email'
									type='email'
									name='email'
									fullWidth
									helperText={<ErrorMessage name='email' />}
									error={props.errors.email && props.touched.email}
									required
								/>
								<Field
									as={TextField}
									label='Phone Number (optional)'
									type='tel'
									name='phoneNumber'
									fullWidth
									helperText={<ErrorMessage name='phoneNumber' />}
									error={props.errors.phoneNumber && props.touched.phoneNumber}
								/>
								<Field
									as={TextField}
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
									You will get a response within the next 24 hours. We'll share our plan
									for how to create your application, if you chose to work with us.
								</Grid>
								<Button variant='outlined' type='submit' disabled={props.isSubmitting}>
									Submit
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
