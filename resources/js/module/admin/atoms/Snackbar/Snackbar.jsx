import React, { memo } from 'react';

import MuiSnackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Snackbar = ({ snackbarProps, alertProps, children }) => (
    <MuiSnackbar
        autoHideDuration={6000}
        {...snackbarProps}
    >
        <MuiAlert
            elevation={6}
            variant="filled"
            severity="success"
            onClose={alertProps.onClose ?? snackbarProps.onClose}
            {...alertProps}
        >
            {snackbarProps.message || children}
        </MuiAlert>
    </MuiSnackbar>
);

Snackbar.defaultProps = {
    snackbarProps: {},
    alertProps: {}
};

export default memo(Snackbar);
