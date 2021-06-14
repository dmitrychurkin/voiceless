import React, { memo, useCallback } from 'react';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Auth from '../../templates/Auth';
import useRequests from '../../hooks/useRequests';

const formSchema = {
    email: 'email',
    password: 'password',
    remember: 'remember'
};

const validationSchema = yup.object({
    [formSchema.email]: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    [formSchema.password]: yup
        .string('Enter your password')
        .required('Password is required'),
    [formSchema.remember]: yup
        .boolean()
        .optional()
});

const Login = () => {
    const { login } = useRequests();
    const onSubmit = useCallback(async ({
        values,
        open
    }) => {
        const { data } = await login({
            data: {
                ...values,
                [formSchema.remember]: values[formSchema.remember] || undefined
            }
        });

        if (!data) {
            window.location.reload();
        }

        open(data.message);
    }, [login]);

    return (
        <Auth
            title='Sign in'
            actionText='sign in'
            linkProps={{
                href: 'forgot-password',
                text: 'Forgot password?'
            }}
            formikConfig={{
                onSubmit,
                initialValues: {
                    [formSchema.email]: '',
                    [formSchema.password]: '',
                    [formSchema.remember]: false
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
                    <FormControlLabel
                        control={(
                            <Checkbox
                                value="remember"
                                color="primary"
                                name={formSchema.remember}
                                checked={formik.values[formSchema.remember]}
                                onChange={formik.handleChange}
                            />
                        )}
                        label="Remember me"
                    />
                </>
            )}
        </Auth>
    );
};

export default memo(Login);
