import React, { memo, useCallback, useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DashboardTemplate from '../../templates/Dashboard';

const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const routes = useMemo(() => ({
        general: '/admin/dashboard/general'
    }), []);

    const handleListItemClick = useCallback(url => () => {
        navigate(url);
    }, []);

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
