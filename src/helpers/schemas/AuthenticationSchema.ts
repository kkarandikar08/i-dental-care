import * as yup from 'yup';

const AuthenticationSchema = yup.object({
    username: yup
        .string()
        .required('Username cannot be empty'),
    password: yup
        .string()
        .required('Password cannot not be empty'),
    employeeType: yup
        .string()
        .required('Please select a type')
});

export default AuthenticationSchema;
