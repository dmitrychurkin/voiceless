import { useCallback, useState } from "react";

const useSnackbar = ({ snackbarProps = {}, alertProps = {} } = {}) => {
    const [snackbarPropsState, setSnackbarPropsState] = useState(snackbarProps);
    const [alertPropsState, setAlertPropsState] = useState(alertProps);

    const handleOpen = useCallback((message = '', snackbarProps = {}, alertProps = {}) => {
        if (!message) {
            return;
        }

        setSnackbarPropsState(state => ({
            ...state,
            ...snackbarProps,
            message,
            open: true
        }));

        setAlertPropsState(state => ({
            ...state,
            ...alertProps
        }));
    }, []);

    const handleClose = useCallback((_, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarPropsState(state => ({
            ...state,
            open: false
        }));
    }, []);

    return {
        open: handleOpen,
        snackbarProps: {
            onClose: handleClose,
            ...snackbarPropsState
        },
        alertProps: alertPropsState
    };
};

export default useSnackbar;
