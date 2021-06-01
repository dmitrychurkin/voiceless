import React, { memo, useCallback, useMemo } from 'react';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Auth from '../../templates/Auth';

const PasswordReset = () => {
    const [searchParams] = useSearchParams();

    const { token } = useParams();

    const navigate = useNavigate();

    const formSchema = useMemo(() => ({
        email: 'email',
        password: 'password',
        passwordConfirmation: 'password_confirmation',
        token: 'token'
    }), []);

    const userEmail = searchParams.get(formSchema.email);

    const onSubmit = useCallback(async ({
        formData,
        resetForm,
        open
    }) => {
        formData.set(formSchema.token, token);
        formData.set(formSchema.email, userEmail);

        const { data } = await axios.post('/admin/reset-password', formData);

        resetForm();

        open(data.message, {
            onExited: () => navigate('/admin/login')
        });

    }, [
        formSchema,
        token,
        userEmail,
        navigate
    ]);

    return (
        <Auth
            title='Reset Password'
            actionText='reset'
            formProps={{
                onSubmit
            }}
            formState={{
                [formSchema.password]: '',
                [formSchema.passwordConfirmation]: ''
            }}
        >
            {(formState, onChange) => (
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
                        defaultValue={userEmail}
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
                        value={formState[formSchema.password]}
                        onChange={onChange}
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
                        value={formState[formSchema.passwordConfirmation]}
                        onChange={onChange}
                    />
                </>
            )}
        </Auth>
    );
};

export default memo(PasswordReset);
