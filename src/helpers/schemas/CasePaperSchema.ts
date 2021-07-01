import * as yup from 'yup';

const CasePaperSchema = yup.object({
    firstName: yup
        .string()
        .required('Please provide a First Name'),
    lastName: yup
        .string()
        .required('Please provide a Last Name'),
    address: yup
        .string()
        .required('Please provide home address'),
    houseNumber: yup
        .string()
        .required('Please provide House / Apt / Flat Number'),
    city: yup
        .string()
        .required('Please provide City'),
    state: yup
        .string()
        .required('Please provide State'),
    zipCode: yup
        .string()
        .required('Please provide Zip Code'),
    phone: yup
        .string()
        .min(10, 'Please provide a valid phone number')
        .max(10, 'Please provide a valid phone number')
        .required('Please provide a phone number'),
    medicalHistory: yup
        .string(),
    medications: yup
        .string()
});

export default CasePaperSchema;