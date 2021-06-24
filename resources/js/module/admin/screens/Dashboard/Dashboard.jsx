import React, { memo, useCallback, useMemo, useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DashboardTemplate from '../../templates/Dashboard';
import useStore from '../../hooks/useStore';

const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { state } = useStore();

    const [queuedRoute, setQueuedRoute] = useState();

    const routes = useMemo(() => ({
        general: '/admin/dashboard/general'
    }), []);

    const checkCanActivate = useCallback(() => state.router.canActivate, [state.router.canActivate]);

    const navigateTo = useCallback((to, options) => {
        navigate(to, options);
        setQueuedRoute();
    }, [navigate]);

    const handleListItemClick = useCallback(url => () => {
        if (checkCanActivate()) {
            navigateTo(url);
        }else {
            setQueuedRoute(url);
        }
    }, [
        checkCanActivate,
        navigateTo
    ]);

    useEffect(() => {
        if (state.router.canActivate && queuedRoute) {
            navigateTo(queuedRoute);
        }
    }, [
        state.router.canActivate,
        queuedRoute,
        navigateTo
    ]);

    const mainListItems = (
        <div>
            <ListItem
                button
                selected={location.pathname === routes.general}
                onClick={handleListItemClick(routes.general)}
            >
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="General" />
            </ListItem>
        </div>
    );
    return (
        <DashboardTemplate mainListItems={mainListItems}>
            <Outlet />
        </DashboardTemplate>
    );
};

export default memo(Dashboard);
