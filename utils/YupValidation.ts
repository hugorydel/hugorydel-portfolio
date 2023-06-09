import * as yup from 'yup';

const InquirySchema = yup.object().shape({
	name: yup
		.string()
		.max(50, 'Must be 50 characters or less')
		.required('Name is Required'),
	email: yup.string().email('Enter a Valid Email').required('Email is Required'),
	phoneNumber: yup.string().notRequired(),
	project: yup
		.string()
		.max(10000, 'Must be 10,000 characters or less')
		.required('Project Description Required'),
});

export type InquiryTypes = yup.InferType<typeof InquirySchema>;

export default InquirySchema;
