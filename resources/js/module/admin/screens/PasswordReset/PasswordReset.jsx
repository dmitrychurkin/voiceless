import React, { memo, useCallback } from 'react';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Auth from '../../templates/Auth';
import useRequests from '../../hooks/useRequests';

const formSchema = {
    email: 'email',
    password: 'password',
    passwordConfirmation: 'password_confirmation',
    token: 'token'
};

const validationSchema = yup.object({
    [formSchema.email]: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    [formSchema.password]: yup
        .string('Enter your password')
        .required('Password is required'),
    [formSchema.passwordConfirmation]: yup
        .string()
        .oneOf([yup.ref(formSchema.password), null], 'Passwords must match')
        .required()
});

const PasswordReset = () => {
    const { resetPassword } = useRequests();

    const [searchParams] = useSearchParams();

    const { token } = useParams();

    const navigate = useNavigate();

    const onSubmit = useCallback(async ({
        values,
        open
    }) => {
        const { data } = await resetPassword({
            data: {
                ...values,
                [formSchema.token]: token
            }
        });

        open(data.message, {
            onExited: () => navigate('/admin/login')
        });
    }, [
        resetPassword,
        token,
        navigate
    ]);

    return (
        <Auth
            title='Reset Password'
            actionText='reset'
            formikConfig={{
                onSubmit,
                initialValues: {
                    [formSchema.email]: searchParams.get(formSchema.email),
                    [formSchema.password]: '',
                    [formSchema.passwordConfirmation]: ''
                },
                validationSchema
            }}
        >
            {formik => (
                <>
                    <TextField
                        type='email'
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name={formSchema.email}
                        autoComplete="email"
                        autoFocus
                        required
                        disabled
                        value={formik.values[formSchema.email]}
                        error={formik.touched[formSchema.email] && Boolean(formik.errors[formSchema.email])}
                        onChange={formik.handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name={formSchema.password}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        required
                        value={formik.values[formSchema.password]}
                        error={formik.touched[formSchema.password] && Boolean(formik.errors[formSchema.password])}
                        onChange={formik.handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name={formSchema.passwordConfirmation}
                        label="Confirm Password"
                        type="password"
                        id="password_confirmation"
                        autoComplete="current-password"
                        required
                        value={formik.values[formSchema.passwordConfirmation]}
                        error={formik.touched[formSchema.passwordConfirmation] && Boolean(formik.errors[formSchema.passwordConfirmation])}
                        onChange={formik.handleChange}
                    />
                </>
            )}
        </Auth>
    );
};

export default memo(PasswordReset);
