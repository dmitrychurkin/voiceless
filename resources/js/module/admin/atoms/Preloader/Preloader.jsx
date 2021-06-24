import React, { memo } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

const Preloader = props => (
    <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='100vh'
        {...props}
    >
        <CircularProgress />
    </Box>
);

export default memo(Preloader);
