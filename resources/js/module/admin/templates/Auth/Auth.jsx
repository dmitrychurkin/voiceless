import React, { memo, useCallback } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import Snackbar from '../../atoms/Snackbar';
import useSnackbar from '../../hooks/useSnackbar';

const Auth = ({
    avatarIcon: AvatarIcon,
    title,
    actionText,
    formProps,
    formikConfig,
    linkProps,
    children
}) => {
    const classes = useStyles();

    const { open, ...notificationProps } = useSnackbar({
        alertProps: {
            severity: 'error'
        }
    });

    const onSubmit = useCallback(async (values, actions) => {
        try {
            await axios.get('/sanctum/csrf-cookie');
            await formikConfig.onSubmit({
                values,
                actions,
                open
            });
        }catch (err) {
            const { response } = err;
            open(response?.data.message || response?.statusText || err.message);
        }finally {
            actions.resetForm();
            actions.validateForm();
        }
    }, [
        formikConfig.onSubmit,
        open
    ]);

    const formik = useFormik({
        validateOnMount: true,
        ...formikConfig,
        onSubmit
    });

    return (
        <>
            <Grid container component="main" className={classes.root}>
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <AvatarIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">{title}</Typography>
                        <form
                            method='post'
                            {...formProps}
                            className={classes.form}
                            onSubmit={formik.handleSubmit}
                        >
                            {children(formik)}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                disabled={!formik.isValid || formik.isSubmitting}
                                className={classes.submit}
                            >
                                {actionText}
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href={linkProps.href} variant="body2">{linkProps.text}</Link>
                                </Grid>
                            </Grid>
                            <Box mt={5}>
                                <Typography variant="body2" color="textSecondary" align="center">
                                    {'Copyright © '}
                                    <Link color="inherit" href="/">
                                        Voiceless
                                    </Link>{' '}
                                    {new Date().getFullYear()}
                                    {'.'}
                                </Typography>
                            </Box>
                        </form>
                    </div>
                </Grid>
            </Grid>
            <Snackbar {...notificationProps} />
        </>
    );
};

Auth.defaultProps = {
    avatarIcon: LockOutlinedIcon,
    formikConfig: {},
    formProps: {},
    linkProps: {
        href: '/admin/login',
        text: 'Back to login'
    }
};

export default memo(Auth);
