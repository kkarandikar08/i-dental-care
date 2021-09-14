import * as yup from 'yup';

const CasePaperSchema = yup.object({
    username: yup
        .string()
        .required('Username cannot be empty'),
    password: yup
        .string()
        .required('Password should not be empty')
});

export default CasePaperSchema;
