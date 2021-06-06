import React, { memo } from 'react';
import { Outlet } from 'react-router';
import DashboardTemplate from '../../templates/Dashboard';

const Dashboard = () => {
    return (
        <DashboardTemplate>
            <Outlet />
        </DashboardTemplate>
    );
};

export default memo(Dashboard);
