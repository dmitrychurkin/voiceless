import React, { memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Auth from '../../templates/Auth';

const PasswordForgot = () => {
    const navigate = useNavigate();

    const formSchema = useMemo(() => ({
        email: 'email'
    }), []);

    const onSubmit = useCallback(async ({
        formData,
        resetForm,
        open
    }) => {
        const { data } = await axios.post('/admin/forgot-password', formData);

        resetForm();

        open(data.message, {
            onExited: () => navigate('/admin/login')
        });

    }, [navigate]);

    return (
        <Auth
            title='Password Forgot'
            actionText='send password reset link'
            formProps={{
                onSubmit
            }}
            formState={{
                [formSchema.email]: ''
            }}
        >
            {(formState, onChange) => (
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
                    value={formState[formSchema.email]}
                    onChange={onChange}
                />
            )}
        </Auth>
    );
};

export default memo(PasswordForgot);
