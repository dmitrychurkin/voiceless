import { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardRoot = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('./general', { replace: true });
    }, [navigate]);

    // TODO: in future use this route for diagrams
    return null;
};

export default memo(DashboardRoot);