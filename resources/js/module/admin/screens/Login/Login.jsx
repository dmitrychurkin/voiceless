import React, { memo, useCallback, useMemo } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Auth from '../../templates/Auth';

const Login = () => {
    const formSchema = useMemo(() => ({
        email: 'email',
        password: 'password',
        remember: 'remember'
    }), []);

    const onSubmit = useCallback(async ({
        formData,
        formState,
        open
    }) => {
        if (formState[formSchema.remember]) {
            formData.set(formSchema.remember, 1);
        }

        const { data } = await axios.post('/admin/login', formData);

        if (!data) {
            window.location.reload();
        }
        open(data.message);
    }, [formSchema]);

    return (
        <Auth
            title='Sign in'
            actionText='sign in'
            linkProps={{
                href: 'forgot-password',
                text: 'Forgot password?'
            }}
            formProps={{
                onSubmit
            }}
            formState={{
                [formSchema.email]: '',
                [formSchema.password]: '',
                [formSchema.remember]: false
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
                        value={formState[formSchema.email]}
                        onChange={onChange}
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
                    <FormControlLabel
                        control={(
                            <Checkbox
                                value="remember"
                                color="primary"
                                name={formSchema.remember}
                                checked={formState[formSchema.remember]}
                                onChange={onChange}
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
