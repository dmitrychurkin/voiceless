import React, { memo, useEffect } from 'react';
import { Route as ReactRouterRoute, useNavigate, useLocation } from 'react-router-dom';
import Preloader from '../../atoms/Preloader';
import useAuth from '../../hooks/useAuth';

const Route = ({ isPrivate, redirectIfAuthenticated, ...rest }) => {
    const user = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (redirectIfAuthenticated && user) {
            const { from } = location.state || { from: { pathname: '/admin/dashboard' } };
            navigate(from, { replace: true });
        }else if (isPrivate && (user === null)) {
            navigate('/admin/login', { state: { from: location } });
        }
    }, [
        isPrivate,
        user,
        location
    ]);

    if (!isPrivate || user) {
        return (
            <ReactRouterRoute {...rest} />
        );
    }

    return (
        <Preloader />
    );
};

export default memo(Route);
