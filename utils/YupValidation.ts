import * as yup from 'yup';

const phoneNumberRegEx = /^[0-1]{2}[0-9]{9}/;

const InquirySchema = yup.object().shape({
	name: yup.string().max(50, 'Must be 50 characters or less').required('Required'),
	email: yup.string().email('Enter a Vaid Email').required('Email is Required'),
	phoneNumber: yup.string().notRequired(),
	// .when('phoneNumber', value =>
	// 	value
	// 		? yup
	// 				.string()
	// 				.matches(phoneNumberRegEx, 'Invalid Phone Number')
	// 				.max(11, 'Invalid Phone Number')
	// 		: yup.string().optional()
	// )

	project: yup
		.string()
		.max(10000, 'Must be 10,000 characters or less')
		.required('Required'),
});

export type InquiryTypes = yup.InferType<typeof InquirySchema>;

export default InquirySchema;
