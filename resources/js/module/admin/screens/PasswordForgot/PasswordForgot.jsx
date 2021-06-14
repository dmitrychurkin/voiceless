import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Auth from '../../templates/Auth';
import useRequests from '../../hooks/useRequests';

const formSchema = {
    email: 'email'
};

const validationSchema = yup.object({
    [formSchema.email]: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required')
});

const PasswordForgot = () => {
    const navigate = useNavigate();
    const { forgotPassword } = useRequests();

    const onSubmit = useCallback(async ({
        values,
        open
    }) => {
        const { data } = await forgotPassword({
            data: values
        });

        open(data.message, {
            onExited: () => navigate('/admin/login')
        });
    }, [forgotPassword, navigate]);

    return (
        <Auth
            title='Password Forgot'
            actionText='send password reset link'
            formikConfig={{
                onSubmit,
                initialValues: {
                    [formSchema.email]: ''
                },
                validationSchema
            }}
        >
            {formik => (
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
                    value={formik.values[formSchema.email]}
                    error={formik.touched[formSchema.email] && Boolean(formik.errors[formSchema.email])}
                    onChange={formik.handleChange}
                />
            )}
        </Auth>
    );
};

export default memo(PasswordForgot);
